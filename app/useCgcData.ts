import { useState, useEffect } from 'react';
import axios from 'axios';
import cheerio from 'cheerio';

type Content = string | string[] | undefined;

interface CGCData {
  [key: string]: Content;
}

const fetchCgcData = async (certNumber: string): Promise<CGCData> => {
  const data: CGCData = {};
  try {
    const response = await axios.get(`https://www.cgccomics.com/certlookup/${certNumber}/`);
    const $ = cheerio.load(response.data);

    const fields = [
      'CGC Cert #', 'Title', 'Issue', 'Issue Date', 'Issue Year',
      'Publisher', 'Variant', 'Grade', 'Page Quality', 'Grade Date',
      'Grade Category', 'Art Comments', 'Key Comments', 'Grader Notes', 'Signatures'
    ];

    fields.forEach((field) => {
      const element = $(`dt:contains("${field}")`).next('dd');
      if (element.length === 0) return;

      const content = element.html()?.replace(/<br>/g, '\n').trim() as Content;
      if (field === 'Art Comments' && typeof content === "string") {
        data[fieldToKey(field)] = content.split('\n');
      } else {
        data[fieldToKey(field)] = content;
      }
    });

  } catch (error) {
    console.error('Error scraping data:', error);
  }
  return data;
};

const fieldToKey = (field: string) => field.toLowerCase().replace(/ /g, '_');

export const useCgcData = (certNumber: string): { data: CGCData; isLoading: boolean } => {
  const [data, setData] = useState<CGCData>({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!certNumber) return;

    setIsLoading(true);
    fetchCgcData(certNumber)
      .then(fetchedData => {
        setData(fetchedData);
      })
      .finally(() => setIsLoading(false));
  }, [certNumber]);

  return { data, isLoading };
};


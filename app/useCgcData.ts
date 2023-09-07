import { useState, useEffect } from 'react';
import axios from 'axios';
import cheerio from 'cheerio';

const getTextContent = ($, element) => {
  if ($(element).children().length > 0) {
    return $(element).children().first().text().trim();
  }
  return $(element).text().trim();
};

const fetchCgcData = async (certNumber) => {
  let data = {};
  try {
    const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://www.cgccomics.com/certlookup/${certNumber}/`);
    const $ = cheerio.load(response.data);

    const fields = ['CGC Cert #', 'Title', 'Issue', 'Issue Date', 'Issue Year', 'Publisher', 'Page Quality', 'Grade Date', 'Grade Category', 'Art Comments', 'Key Comments', 'Grader Notes', 'Signatures'];
    
    fields.forEach(field => {
      data[field.toLowerCase().replace(/ /g, '_')] = getTextContent($, $(`dt:contains("${field}")`).next('dd'));
    });

    data.grade = $('div.related-info').find('dt:contains("Grade")').next('dd:first').text().trim();
  } catch (error) {
    console.error('Error scraping data:', error);
  }
  return data;
};

export const useCgcData = (certNumber) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (certNumber) {
      setIsLoading(true);
      fetchCgcData(certNumber).then(fetchedData => {
        setData(fetchedData);
        setIsLoading(false);
      });
    }
  }, [certNumber]);

  return { data, isLoading };
};


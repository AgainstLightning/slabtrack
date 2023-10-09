import React from 'react';

type CgcData = {
  certification_number?: string;
  title?: string;
  issue?: string;
  issue_date?: string;
  issue_year?: string;
  publisher?: string;
  variant?: string;
  grade?: string;
  page_quality?: string;
  grade_date?: string;
  grade_category?: string;
  art_comments?: string;
  key_comments?: string;
  grader_notes?: string;
  signatures?: string;
};

const FULL_SLAB_DATA_FIELDS = [
  "art_comments",
  "asking_price",
  "certification_number",
  "created_at",
  "grade",
  "grade_category",
  "grade_date",
  "grader_notes",
  "id",
  "issue",
  "issue_date",
  "issue_year",
  "key_comments",
  "page_quality",
  "personal_note",
  "publisher",
  "purchase_date",
  "purchase_platform",
  "purchase_price",
  "signatures",
  "title",
  "updated_at",
  "variant"
];

const FIELD_DISPLAY_NAMES: Record<string, string> = {
  certification_number: "Certification Number",
  title: "Title",
  issue: "Issue",
  issue_date: "Issue Date",
  issue_year: "Issue Year",
  publisher: "Publisher",
  variant: "Variant",
  grade: "Grade",
  page_quality: "Page Quality",
  grade_date: "Grade Date",
  grade_category: "Grade Category",
  art_comments: "Art Comments",
  key_comments: "Key Comments",
  grader_notes: "Grader Notes",
  signatures: "Signatures"
};

const Review: React.FC<{ cgcData: CgcData }> = ({ cgcData }) => {
  return (
    <div className="flex flex-col max-w-xl">
      <div className="grid grid-cols-2 gap-4 py-4">
        {FULL_SLAB_DATA_FIELDS.map((field, index) => {
          if (cgcData[field] && FIELD_DISPLAY_NAMES[field]) {
            return (
              <div key={index} className="col-span-1">
                <strong className="block mb-1">{FIELD_DISPLAY_NAMES[field]}:</strong>
                <span className="text-gray-700">{cgcData[field]}</span>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );

};

export default Review;

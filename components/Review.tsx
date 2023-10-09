import React from 'react';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';

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
    <div className="flex flex-col bg-white">
      <div className="mb-4 flex items-center">
        <div className="text-4xl font-bold pr-4 border-r-2 mr-4">{cgcData.grade}</div>
        <div>
          <span className="text-gray-800 text-xl font-medium">{cgcData.title} #{cgcData.issue}</span>
          <div className="text-blue-500 hover:underline">{cgcData.certification_number}</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <Label>Issue Date</Label>
          <Input className="mb-1" type="text" value={cgcData.issue_date} disabled />
          <Label>Issue Year</Label>
          <Input className="mb-1" type="text" value={cgcData.issue_year} disabled />
          <Label htmlFor="publisher">Publisher</Label>
          <Input className="mb-1" type="text" value={cgcData.publisher} disabled />
        </div>
        <div>
          <Label>Grade Category</Label>
          <Input className="mb-1" type="text" value={cgcData.grade_category} disabled />
          <Label htmlFor="issue">Grade Date</Label>
          <Input className="mb-1" type="text" value={cgcData.grade_date} disabled />
          <Label>Page Quality</Label>
          <Input className="mb-1" type="text" value={cgcData.page_quality} disabled />
        </div>
      </div>

      {cgcData?.variant && (<div className="mb-4">
        <Label>Variant</Label>
        <Input type="text" value={cgcData.variant} disabled />
      </div>)}

      <div className="mb-4">
        <Label>Art Comments</Label>
        <Textarea value={cgcData.art_comments} disabled />
      </div>

      <div className="mb-4">
        <Label htmlFor="key_comments">Key Comments</Label>
        <Textarea id="key_comments" value={cgcData.key_comments} disabled />
      </div>

      <div className="mb-4">
        <Label htmlFor="signatures">Signatures</Label>
        <Textarea id="signatures" value={cgcData.signatures} disabled />
      </div>

      <div className="mb-4">
        <Label htmlFor="grader_notes">Grader Notes</Label>
        <Textarea id="grader_notes" value={cgcData.grader_notes} disabled />
      </div>
    </div>
  );
};

export default Review;


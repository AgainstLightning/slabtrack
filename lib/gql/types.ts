export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  timestamptz: { input: any; output: any; }
  uuid: { input: any; output: any; }
  date: { input: any; output: any; }
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "slabs" */
  slabs: Array<Slabs>;
  /** fetch aggregated fields from the table: "slabs" */
  slabs_aggregate: Slabs_Aggregate;
  /** fetch data from the table: "slabs" using primary key columns */
  slabs_by_pk?: Maybe<Slabs>;
};


export type Query_RootSlabsArgs = {
  distinct_on?: InputMaybe<Array<Slabs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Slabs_Order_By>>;
  where?: InputMaybe<Slabs_Bool_Exp>;
};


export type Query_RootSlabs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Slabs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Slabs_Order_By>>;
  where?: InputMaybe<Slabs_Bool_Exp>;
};


export type Query_RootSlabs_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "slabs" */
export enum Slabs_Select_Column {
  /** column name */
  ArtComments = 'art_comments',
  /** column name */
  AskingPrice = 'asking_price',
  /** column name */
  CertificationNumber = 'certification_number',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Grade = 'grade',
  /** column name */
  GradeCategory = 'grade_category',
  /** column name */
  GradeDate = 'grade_date',
  /** column name */
  GraderNotes = 'grader_notes',
  /** column name */
  Id = 'id',
  /** column name */
  Issue = 'issue',
  /** column name */
  IssueDate = 'issue_date',
  /** column name */
  IssueYear = 'issue_year',
  /** column name */
  KeyComments = 'key_comments',
  /** column name */
  PageQuality = 'page_quality',
  /** column name */
  PersonalNote = 'personal_note',
  /** column name */
  Publisher = 'publisher',
  /** column name */
  PurchaseDate = 'purchase_date',
  /** column name */
  PurchasePlatform = 'purchase_platform',
  /** column name */
  PurchasePrice = 'purchase_price',
  /** column name */
  Signatures = 'signatures',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** Ordering options when selecting data from "slabs". */
export type Slabs_Order_By = {
  art_comments?: InputMaybe<Order_By>;
  asking_price?: InputMaybe<Order_By>;
  certification_number?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  grade?: InputMaybe<Order_By>;
  grade_category?: InputMaybe<Order_By>;
  grade_date?: InputMaybe<Order_By>;
  grader_notes?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  issue?: InputMaybe<Order_By>;
  issue_date?: InputMaybe<Order_By>;
  issue_year?: InputMaybe<Order_By>;
  key_comments?: InputMaybe<Order_By>;
  page_quality?: InputMaybe<Order_By>;
  personal_note?: InputMaybe<Order_By>;
  publisher?: InputMaybe<Order_By>;
  purchase_date?: InputMaybe<Order_By>;
  purchase_platform?: InputMaybe<Order_By>;
  purchase_price?: InputMaybe<Order_By>;
  signatures?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** Boolean expression to filter rows from the table "slabs". All fields are combined with a logical 'AND'. */
export type Slabs_Bool_Exp = {
  _and?: InputMaybe<Array<Slabs_Bool_Exp>>;
  _not?: InputMaybe<Slabs_Bool_Exp>;
  _or?: InputMaybe<Array<Slabs_Bool_Exp>>;
  art_comments?: InputMaybe<String_Comparison_Exp>;
  asking_price?: InputMaybe<Int_Comparison_Exp>;
  certification_number?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  grade?: InputMaybe<String_Comparison_Exp>;
  grade_category?: InputMaybe<String_Comparison_Exp>;
  grade_date?: InputMaybe<String_Comparison_Exp>;
  grader_notes?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  issue?: InputMaybe<String_Comparison_Exp>;
  issue_date?: InputMaybe<String_Comparison_Exp>;
  issue_year?: InputMaybe<String_Comparison_Exp>;
  key_comments?: InputMaybe<String_Comparison_Exp>;
  page_quality?: InputMaybe<String_Comparison_Exp>;
  personal_note?: InputMaybe<String_Comparison_Exp>;
  publisher?: InputMaybe<String_Comparison_Exp>;
  purchase_date?: InputMaybe<Date_Comparison_Exp>;
  purchase_platform?: InputMaybe<String_Comparison_Exp>;
  purchase_price?: InputMaybe<Int_Comparison_Exp>;
  signatures?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']['input']>;
  _gt?: InputMaybe<Scalars['date']['input']>;
  _gte?: InputMaybe<Scalars['date']['input']>;
  _in?: InputMaybe<Array<Scalars['date']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['date']['input']>;
  _lte?: InputMaybe<Scalars['date']['input']>;
  _neq?: InputMaybe<Scalars['date']['input']>;
  _nin?: InputMaybe<Array<Scalars['date']['input']>>;
};

/** columns and relationships of "slabs" */
export type Slabs = {
  __typename?: 'slabs';
  art_comments?: Maybe<Scalars['String']['output']>;
  asking_price?: Maybe<Scalars['Int']['output']>;
  certification_number: Scalars['String']['output'];
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  grade: Scalars['String']['output'];
  grade_category: Scalars['String']['output'];
  grade_date: Scalars['String']['output'];
  grader_notes?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  issue: Scalars['String']['output'];
  issue_date?: Maybe<Scalars['String']['output']>;
  issue_year?: Maybe<Scalars['String']['output']>;
  key_comments?: Maybe<Scalars['String']['output']>;
  page_quality?: Maybe<Scalars['String']['output']>;
  personal_note?: Maybe<Scalars['String']['output']>;
  publisher: Scalars['String']['output'];
  purchase_date?: Maybe<Scalars['date']['output']>;
  purchase_platform?: Maybe<Scalars['String']['output']>;
  purchase_price?: Maybe<Scalars['Int']['output']>;
  signatures?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregated selection of "slabs" */
export type Slabs_Aggregate = {
  __typename?: 'slabs_aggregate';
  aggregate?: Maybe<Slabs_Aggregate_Fields>;
  nodes: Array<Slabs>;
};

/** aggregate fields of "slabs" */
export type Slabs_Aggregate_Fields = {
  __typename?: 'slabs_aggregate_fields';
  avg?: Maybe<Slabs_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Slabs_Max_Fields>;
  min?: Maybe<Slabs_Min_Fields>;
  stddev?: Maybe<Slabs_Stddev_Fields>;
  stddev_pop?: Maybe<Slabs_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Slabs_Stddev_Samp_Fields>;
  sum?: Maybe<Slabs_Sum_Fields>;
  var_pop?: Maybe<Slabs_Var_Pop_Fields>;
  var_samp?: Maybe<Slabs_Var_Samp_Fields>;
  variance?: Maybe<Slabs_Variance_Fields>;
};


/** aggregate fields of "slabs" */
export type Slabs_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Slabs_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Slabs_Avg_Fields = {
  __typename?: 'slabs_avg_fields';
  asking_price?: Maybe<Scalars['Float']['output']>;
  purchase_price?: Maybe<Scalars['Float']['output']>;
};

/** aggregate max on columns */
export type Slabs_Max_Fields = {
  __typename?: 'slabs_max_fields';
  art_comments?: Maybe<Scalars['String']['output']>;
  asking_price?: Maybe<Scalars['Int']['output']>;
  certification_number?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  grade?: Maybe<Scalars['String']['output']>;
  grade_category?: Maybe<Scalars['String']['output']>;
  grade_date?: Maybe<Scalars['String']['output']>;
  grader_notes?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  issue?: Maybe<Scalars['String']['output']>;
  issue_date?: Maybe<Scalars['String']['output']>;
  issue_year?: Maybe<Scalars['String']['output']>;
  key_comments?: Maybe<Scalars['String']['output']>;
  page_quality?: Maybe<Scalars['String']['output']>;
  personal_note?: Maybe<Scalars['String']['output']>;
  publisher?: Maybe<Scalars['String']['output']>;
  purchase_date?: Maybe<Scalars['date']['output']>;
  purchase_platform?: Maybe<Scalars['String']['output']>;
  purchase_price?: Maybe<Scalars['Int']['output']>;
  signatures?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Slabs_Min_Fields = {
  __typename?: 'slabs_min_fields';
  art_comments?: Maybe<Scalars['String']['output']>;
  asking_price?: Maybe<Scalars['Int']['output']>;
  certification_number?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  grade?: Maybe<Scalars['String']['output']>;
  grade_category?: Maybe<Scalars['String']['output']>;
  grade_date?: Maybe<Scalars['String']['output']>;
  grader_notes?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  issue?: Maybe<Scalars['String']['output']>;
  issue_date?: Maybe<Scalars['String']['output']>;
  issue_year?: Maybe<Scalars['String']['output']>;
  key_comments?: Maybe<Scalars['String']['output']>;
  page_quality?: Maybe<Scalars['String']['output']>;
  personal_note?: Maybe<Scalars['String']['output']>;
  publisher?: Maybe<Scalars['String']['output']>;
  purchase_date?: Maybe<Scalars['date']['output']>;
  purchase_platform?: Maybe<Scalars['String']['output']>;
  purchase_price?: Maybe<Scalars['Int']['output']>;
  signatures?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate stddev on columns */
export type Slabs_Stddev_Fields = {
  __typename?: 'slabs_stddev_fields';
  asking_price?: Maybe<Scalars['Float']['output']>;
  purchase_price?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Slabs_Stddev_Pop_Fields = {
  __typename?: 'slabs_stddev_pop_fields';
  asking_price?: Maybe<Scalars['Float']['output']>;
  purchase_price?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Slabs_Stddev_Samp_Fields = {
  __typename?: 'slabs_stddev_samp_fields';
  asking_price?: Maybe<Scalars['Float']['output']>;
  purchase_price?: Maybe<Scalars['Float']['output']>;
};

/** aggregate sum on columns */
export type Slabs_Sum_Fields = {
  __typename?: 'slabs_sum_fields';
  asking_price?: Maybe<Scalars['Int']['output']>;
  purchase_price?: Maybe<Scalars['Int']['output']>;
};

/** aggregate var_pop on columns */
export type Slabs_Var_Pop_Fields = {
  __typename?: 'slabs_var_pop_fields';
  asking_price?: Maybe<Scalars['Float']['output']>;
  purchase_price?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Slabs_Var_Samp_Fields = {
  __typename?: 'slabs_var_samp_fields';
  asking_price?: Maybe<Scalars['Float']['output']>;
  purchase_price?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Slabs_Variance_Fields = {
  __typename?: 'slabs_variance_fields';
  asking_price?: Maybe<Scalars['Float']['output']>;
  purchase_price?: Maybe<Scalars['Float']['output']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "slabs" */
  delete_slabs?: Maybe<Slabs_Mutation_Response>;
  /** delete single row from the table: "slabs" */
  delete_slabs_by_pk?: Maybe<Slabs>;
  /** insert data into the table: "slabs" */
  insert_slabs?: Maybe<Slabs_Mutation_Response>;
  /** insert a single row into the table: "slabs" */
  insert_slabs_one?: Maybe<Slabs>;
  /** update data of the table: "slabs" */
  update_slabs?: Maybe<Slabs_Mutation_Response>;
  /** update single row of the table: "slabs" */
  update_slabs_by_pk?: Maybe<Slabs>;
  /** update multiples rows of table: "slabs" */
  update_slabs_many?: Maybe<Array<Maybe<Slabs_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_SlabsArgs = {
  where: Slabs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Slabs_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootInsert_SlabsArgs = {
  objects: Array<Slabs_Insert_Input>;
  on_conflict?: InputMaybe<Slabs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Slabs_OneArgs = {
  object: Slabs_Insert_Input;
  on_conflict?: InputMaybe<Slabs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_SlabsArgs = {
  _inc?: InputMaybe<Slabs_Inc_Input>;
  _set?: InputMaybe<Slabs_Set_Input>;
  where: Slabs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Slabs_By_PkArgs = {
  _inc?: InputMaybe<Slabs_Inc_Input>;
  _set?: InputMaybe<Slabs_Set_Input>;
  pk_columns: Slabs_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Slabs_ManyArgs = {
  updates: Array<Slabs_Updates>;
};

/** response of any mutation on the table "slabs" */
export type Slabs_Mutation_Response = {
  __typename?: 'slabs_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Slabs>;
};

/** input type for inserting data into table "slabs" */
export type Slabs_Insert_Input = {
  art_comments?: InputMaybe<Scalars['String']['input']>;
  asking_price?: InputMaybe<Scalars['Int']['input']>;
  certification_number?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  grade?: InputMaybe<Scalars['String']['input']>;
  grade_category?: InputMaybe<Scalars['String']['input']>;
  grade_date?: InputMaybe<Scalars['String']['input']>;
  grader_notes?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  issue?: InputMaybe<Scalars['String']['input']>;
  issue_date?: InputMaybe<Scalars['String']['input']>;
  issue_year?: InputMaybe<Scalars['String']['input']>;
  key_comments?: InputMaybe<Scalars['String']['input']>;
  page_quality?: InputMaybe<Scalars['String']['input']>;
  personal_note?: InputMaybe<Scalars['String']['input']>;
  publisher?: InputMaybe<Scalars['String']['input']>;
  purchase_date?: InputMaybe<Scalars['date']['input']>;
  purchase_platform?: InputMaybe<Scalars['String']['input']>;
  purchase_price?: InputMaybe<Scalars['Int']['input']>;
  signatures?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** on_conflict condition type for table "slabs" */
export type Slabs_On_Conflict = {
  constraint: Slabs_Constraint;
  update_columns?: Array<Slabs_Update_Column>;
  where?: InputMaybe<Slabs_Bool_Exp>;
};

/** unique or primary key constraints on table "slabs" */
export enum Slabs_Constraint {
  /** unique or primary key constraint on columns "certification_number" */
  SlabsCertificationNumberKey = 'slabs_certification_number_key',
  /** unique or primary key constraint on columns "id" */
  SlabsPkey = 'slabs_pkey'
}

/** update columns of table "slabs" */
export enum Slabs_Update_Column {
  /** column name */
  ArtComments = 'art_comments',
  /** column name */
  AskingPrice = 'asking_price',
  /** column name */
  CertificationNumber = 'certification_number',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Grade = 'grade',
  /** column name */
  GradeCategory = 'grade_category',
  /** column name */
  GradeDate = 'grade_date',
  /** column name */
  GraderNotes = 'grader_notes',
  /** column name */
  Id = 'id',
  /** column name */
  Issue = 'issue',
  /** column name */
  IssueDate = 'issue_date',
  /** column name */
  IssueYear = 'issue_year',
  /** column name */
  KeyComments = 'key_comments',
  /** column name */
  PageQuality = 'page_quality',
  /** column name */
  PersonalNote = 'personal_note',
  /** column name */
  Publisher = 'publisher',
  /** column name */
  PurchaseDate = 'purchase_date',
  /** column name */
  PurchasePlatform = 'purchase_platform',
  /** column name */
  PurchasePrice = 'purchase_price',
  /** column name */
  Signatures = 'signatures',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for incrementing numeric columns in table "slabs" */
export type Slabs_Inc_Input = {
  asking_price?: InputMaybe<Scalars['Int']['input']>;
  purchase_price?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for updating data in table "slabs" */
export type Slabs_Set_Input = {
  art_comments?: InputMaybe<Scalars['String']['input']>;
  asking_price?: InputMaybe<Scalars['Int']['input']>;
  certification_number?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  grade?: InputMaybe<Scalars['String']['input']>;
  grade_category?: InputMaybe<Scalars['String']['input']>;
  grade_date?: InputMaybe<Scalars['String']['input']>;
  grader_notes?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  issue?: InputMaybe<Scalars['String']['input']>;
  issue_date?: InputMaybe<Scalars['String']['input']>;
  issue_year?: InputMaybe<Scalars['String']['input']>;
  key_comments?: InputMaybe<Scalars['String']['input']>;
  page_quality?: InputMaybe<Scalars['String']['input']>;
  personal_note?: InputMaybe<Scalars['String']['input']>;
  publisher?: InputMaybe<Scalars['String']['input']>;
  purchase_date?: InputMaybe<Scalars['date']['input']>;
  purchase_platform?: InputMaybe<Scalars['String']['input']>;
  purchase_price?: InputMaybe<Scalars['Int']['input']>;
  signatures?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** primary key columns input for table: slabs */
export type Slabs_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

export type Slabs_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Slabs_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Slabs_Set_Input>;
  /** filter the rows which have to be updated */
  where: Slabs_Bool_Exp;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "slabs" */
  slabs: Array<Slabs>;
  /** fetch aggregated fields from the table: "slabs" */
  slabs_aggregate: Slabs_Aggregate;
  /** fetch data from the table: "slabs" using primary key columns */
  slabs_by_pk?: Maybe<Slabs>;
  /** fetch data from the table in a streaming manner: "slabs" */
  slabs_stream: Array<Slabs>;
};


export type Subscription_RootSlabsArgs = {
  distinct_on?: InputMaybe<Array<Slabs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Slabs_Order_By>>;
  where?: InputMaybe<Slabs_Bool_Exp>;
};


export type Subscription_RootSlabs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Slabs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Slabs_Order_By>>;
  where?: InputMaybe<Slabs_Bool_Exp>;
};


export type Subscription_RootSlabs_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootSlabs_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Slabs_Stream_Cursor_Input>>;
  where?: InputMaybe<Slabs_Bool_Exp>;
};

/** Streaming cursor of the table "slabs" */
export type Slabs_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Slabs_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Slabs_Stream_Cursor_Value_Input = {
  art_comments?: InputMaybe<Scalars['String']['input']>;
  asking_price?: InputMaybe<Scalars['Int']['input']>;
  certification_number?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  grade?: InputMaybe<Scalars['String']['input']>;
  grade_category?: InputMaybe<Scalars['String']['input']>;
  grade_date?: InputMaybe<Scalars['String']['input']>;
  grader_notes?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  issue?: InputMaybe<Scalars['String']['input']>;
  issue_date?: InputMaybe<Scalars['String']['input']>;
  issue_year?: InputMaybe<Scalars['String']['input']>;
  key_comments?: InputMaybe<Scalars['String']['input']>;
  page_quality?: InputMaybe<Scalars['String']['input']>;
  personal_note?: InputMaybe<Scalars['String']['input']>;
  publisher?: InputMaybe<Scalars['String']['input']>;
  purchase_date?: InputMaybe<Scalars['date']['input']>;
  purchase_platform?: InputMaybe<Scalars['String']['input']>;
  purchase_price?: InputMaybe<Scalars['Int']['input']>;
  signatures?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

export type AddToDatabaseMutationVariables = Exact<{
  slabData: Slabs_Insert_Input;
}>;


export type AddToDatabaseMutation = { __typename?: 'mutation_root', insert_slabs_one?: { __typename?: 'slabs', id: any } | null };

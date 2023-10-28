/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\nsubscription SlabsSubscription {\n  slabs(order_by: {created_at: desc}) {\n    certification_number\n    title\n    variant\n    issue\n    issue_date\n    issue_year\n    publisher\n    grade\n    page_quality\n    grade_date\n    grade_category\n    art_comments\n    key_comments\n    grader_notes\n    signatures\n    asking_price\n    purchase_date\n    purchase_platform\n    purchase_price\n    personal_note\n    updated_at\n    id\n    created_at\n  }\n}\n": types.SlabsSubscriptionDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nsubscription SlabsSubscription {\n  slabs(order_by: {created_at: desc}) {\n    certification_number\n    title\n    variant\n    issue\n    issue_date\n    issue_year\n    publisher\n    grade\n    page_quality\n    grade_date\n    grade_category\n    art_comments\n    key_comments\n    grader_notes\n    signatures\n    asking_price\n    purchase_date\n    purchase_platform\n    purchase_price\n    personal_note\n    updated_at\n    id\n    created_at\n  }\n}\n"): (typeof documents)["\nsubscription SlabsSubscription {\n  slabs(order_by: {created_at: desc}) {\n    certification_number\n    title\n    variant\n    issue\n    issue_date\n    issue_year\n    publisher\n    grade\n    page_quality\n    grade_date\n    grade_category\n    art_comments\n    key_comments\n    grader_notes\n    signatures\n    asking_price\n    purchase_date\n    purchase_platform\n    purchase_price\n    personal_note\n    updated_at\n    id\n    created_at\n  }\n}\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;
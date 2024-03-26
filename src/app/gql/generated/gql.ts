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
    "\n  query GruppiDiIsole {\n    gruppiDiIsole {\n      nome\n      slug\n      long_description\n      isles {\n        nome\n        short_descrizione\n        foto {\n          url\n        }\n      }\n      mappa {\n        latitude\n        longitude\n      }\n      foto {\n        url\n      }\n    }\n  }\n": types.GruppiDiIsoleDocument,
    "\n  query Isola($nomeIsola: String!) {\n    isola(where: { nome: $nomeIsola }) {\n      nome\n      short_descrizione\n      foto {\n        url\n      }\n      coordinate {\n        latitude\n        longitude\n      }\n      strutture {\n        nome\n        slug\n        long_description\n        foto {\n          url\n        }\n        alloggi {\n          descrizione\n          nome\n          id\n          prezzi {\n            ... on FasciaDiPrezzo {\n              prezzo\n              fascia {\n                al\n                nome\n                dal\n              }\n            }\n          }\n          foto {\n            url\n          }\n          postiLetto\n        }\n      }\n    }\n  }\n": types.IsolaDocument,
    "\n  query Isole {\n    isole {\n      nome\n    }\n  }\n": types.IsoleDocument,
    "\n  query hp_recommendations {\n    strutture(where: { promuoviSuHomePage: true }) {\n      nome\n      slug\n      foto {\n        url\n      }\n      short_description\n      isola {\n        nome\n      }\n      alloggi {\n        postiLetto\n        id\n        prezzi {\n          ... on FasciaDiPrezzo {\n            prezzo\n          }\n        }\n      }\n    }\n  }\n": types.Hp_RecommendationsDocument,
    "\n  query strutturaSlugs {\n    strutture {\n      slug\n    }\n  }\n": types.StrutturaSlugsDocument,
    "\n  query struttura($slug: String!) {\n    struttura(where: { slug: $slug }) {\n      alloggi {\n        id\n        postiLetto\n        prezzi {\n          ... on FasciaDiPrezzo {\n            prezzo\n            fascia {\n              nome\n            }\n          }\n        }\n        descrizione\n        review {\n          autore\n          commento\n          data\n        }\n        nome\n      }\n      nome\n      condizioniDiAffitto\n      foto {\n        url\n      }\n      long_description\n      isola {\n        nome\n      }\n    }\n  }\n": types.StrutturaDocument,
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
export function graphql(source: "\n  query GruppiDiIsole {\n    gruppiDiIsole {\n      nome\n      slug\n      long_description\n      isles {\n        nome\n        short_descrizione\n        foto {\n          url\n        }\n      }\n      mappa {\n        latitude\n        longitude\n      }\n      foto {\n        url\n      }\n    }\n  }\n"): (typeof documents)["\n  query GruppiDiIsole {\n    gruppiDiIsole {\n      nome\n      slug\n      long_description\n      isles {\n        nome\n        short_descrizione\n        foto {\n          url\n        }\n      }\n      mappa {\n        latitude\n        longitude\n      }\n      foto {\n        url\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Isola($nomeIsola: String!) {\n    isola(where: { nome: $nomeIsola }) {\n      nome\n      short_descrizione\n      foto {\n        url\n      }\n      coordinate {\n        latitude\n        longitude\n      }\n      strutture {\n        nome\n        slug\n        long_description\n        foto {\n          url\n        }\n        alloggi {\n          descrizione\n          nome\n          id\n          prezzi {\n            ... on FasciaDiPrezzo {\n              prezzo\n              fascia {\n                al\n                nome\n                dal\n              }\n            }\n          }\n          foto {\n            url\n          }\n          postiLetto\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query Isola($nomeIsola: String!) {\n    isola(where: { nome: $nomeIsola }) {\n      nome\n      short_descrizione\n      foto {\n        url\n      }\n      coordinate {\n        latitude\n        longitude\n      }\n      strutture {\n        nome\n        slug\n        long_description\n        foto {\n          url\n        }\n        alloggi {\n          descrizione\n          nome\n          id\n          prezzi {\n            ... on FasciaDiPrezzo {\n              prezzo\n              fascia {\n                al\n                nome\n                dal\n              }\n            }\n          }\n          foto {\n            url\n          }\n          postiLetto\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Isole {\n    isole {\n      nome\n    }\n  }\n"): (typeof documents)["\n  query Isole {\n    isole {\n      nome\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query hp_recommendations {\n    strutture(where: { promuoviSuHomePage: true }) {\n      nome\n      slug\n      foto {\n        url\n      }\n      short_description\n      isola {\n        nome\n      }\n      alloggi {\n        postiLetto\n        id\n        prezzi {\n          ... on FasciaDiPrezzo {\n            prezzo\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query hp_recommendations {\n    strutture(where: { promuoviSuHomePage: true }) {\n      nome\n      slug\n      foto {\n        url\n      }\n      short_description\n      isola {\n        nome\n      }\n      alloggi {\n        postiLetto\n        id\n        prezzi {\n          ... on FasciaDiPrezzo {\n            prezzo\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query strutturaSlugs {\n    strutture {\n      slug\n    }\n  }\n"): (typeof documents)["\n  query strutturaSlugs {\n    strutture {\n      slug\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query struttura($slug: String!) {\n    struttura(where: { slug: $slug }) {\n      alloggi {\n        id\n        postiLetto\n        prezzi {\n          ... on FasciaDiPrezzo {\n            prezzo\n            fascia {\n              nome\n            }\n          }\n        }\n        descrizione\n        review {\n          autore\n          commento\n          data\n        }\n        nome\n      }\n      nome\n      condizioniDiAffitto\n      foto {\n        url\n      }\n      long_description\n      isola {\n        nome\n      }\n    }\n  }\n"): (typeof documents)["\n  query struttura($slug: String!) {\n    struttura(where: { slug: $slug }) {\n      alloggi {\n        id\n        postiLetto\n        prezzi {\n          ... on FasciaDiPrezzo {\n            prezzo\n            fascia {\n              nome\n            }\n          }\n        }\n        descrizione\n        review {\n          autore\n          commento\n          data\n        }\n        nome\n      }\n      nome\n      condizioniDiAffitto\n      foto {\n        url\n      }\n      long_description\n      isola {\n        nome\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;
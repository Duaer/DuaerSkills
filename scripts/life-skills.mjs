/** Full skill text for the Duaer Data life sources. Wired into catalog.mjs by slug. */

const key = 'Get a Duaer key: https://skills.duaer.com/keys.md';

const header = `Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

${key}`;

/** Life sources bill a search that reaches the upstream, even when it finds nothing. */
const credits = `## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.`;

const compoundCredits = `## Credits

A successful search uses 1 credit, even when it finds nothing.
A \`name\` that PubChem does not know, or an identifier PubChem answers with not found, returns no items and uses 0.
Wrong input, a missing identifier, or more than one identifier returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.`;

const blank = 'Fields without a value are empty strings.';

export const LIFE_SKILLS = {
	papers: `---
name: duaer-papers
description: >-
  Duaer papers. Published papers from OpenAlex by words, title, abstract, author, year, type, open access, citations, language, DOI, journal, institution, or topic.
  One successful search uses 1 Duaer credit.
---

# Duaer papers

Duaer papers searches published works in OpenAlex: articles, reviews, preprints, books, datasets, and more. Filters combine. Results are ordered by relevance unless you sort by citations.

## When to use

- Find the most cited papers on a topic in a range of years.
- Check what an author or institution published.
- Resolve a DOI to its title and abstract.

## When not to use

- Preprints from bioRxiv or medRxiv only. Use https://skills.duaer.com/preprints.md.
- Research grants. Use https://skills.duaer.com/grants.md.
- Patents. Use https://skills.duaer.com/patents.md.

## Call

\`GET https://api.duaer.com/v1/data/papers?title=lithium&author=Zhang&yearFrom=2020&yearTo=2024&limit=10\`

${header}

## Parameters

Provide at least one search field. \`sort\` and \`limit\` alone are not a search.

- \`q\` — Optional. Words in the title, abstract, or full text.
- \`title\` — Optional. Words in the title.
- \`abstract\` — Optional. Words in the abstract.
- \`author\` — Optional. Author name.
- \`yearFrom\`, \`yearTo\` — Optional. Publication years from 1000 to 2100. Leave a year out, or send \`0\`, for any year.
- \`type\` — Optional. Work type: \`article\`, \`book\`, \`book-chapter\`, \`dataset\`, \`dissertation\`, \`editorial\`, \`erratum\`, \`letter\`, \`libguides\`, \`other\`, \`paratext\`, \`peer-review\`, \`preprint\`, \`reference-entry\`, \`report\`, \`retraction\`, \`review\`, \`standard\`, or \`supplementary-materials\`.
- \`openAccess\` — Optional. \`yes\` or \`no\`.
- \`citationsFrom\`, \`citationsTo\` — Optional. Citation count. \`0\` means no bound.
- \`language\` — Optional. Language code, such as \`en\` or \`zh\`.
- \`doi\` — Optional. Digital object identifier, such as \`10.1038/nature12373\`.
- \`journal\`, \`institution\`, \`topic\` — Optional. Names. Duaer uses the closest OpenAlex match. A name with no match returns 400.
- \`sort\` — Optional. \`citations\` orders by most cited. Omit it for relevance.
- \`limit\` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/papers?q=CRISPR%20base%20editing&yearFrom=2022&sort=citations\` — most cited base editing papers since 2022.
- \`GET https://api.duaer.com/v1/data/papers?doi=10.1038/nature12373\` — one paper by DOI.
- \`GET https://api.duaer.com/v1/data/papers?topic=lithium%20batteries&type=review&openAccess=yes\` — open access reviews on a topic.

## Result

The response is \`{ "items": [...] }\`. Each item has:

- \`source\` — \`OpenAlex\`.
- \`title\` — work title.
- \`url\` — DOI link, or the OpenAlex page when there is no DOI.
- \`summary\` — abstract, up to 1000 characters. Empty when OpenAlex has no abstract.

${credits}
`,

	proteins: `---
name: duaer-proteins
description: >-
  Duaer proteins. UniProt proteins by gene, name, organism, accession, review status, length, disease, keyword, location, function, GO term, pathway, domain, or taxonomy id.
  One successful search uses 1 Duaer credit.
---

# Duaer proteins

Duaer proteins searches UniProtKB. Fields combine, so each one narrows the search.

## When to use

- Get the reviewed human protein for a gene symbol.
- List proteins linked to a disease, a pathway, or a domain.
- Find proteins in a cell location with a given function.

## When not to use

- Gene ids, aliases, and map locations. Use https://skills.duaer.com/genes.md.
- Predicted 3D models. Use https://skills.duaer.com/alphafold.md.
- Experimental structures. Use https://skills.duaer.com/structures.md.

## Call

\`GET https://api.duaer.com/v1/data/proteins?gene=INS&organism=Homo%20sapiens&reviewed=yes&limit=10\`

${header}

## Parameters

Provide at least one search field.

- \`q\` — Optional. Words in the protein record.
- \`gene\` — Optional. Gene symbol, such as \`INS\`. Look up symbols with https://skills.duaer.com/genes.md.
- \`name\` — Optional. Protein name.
- \`organism\` — Optional. Organism name, such as \`Homo sapiens\`. Look up names with https://skills.duaer.com/organisms.md.
- \`accession\` — Optional. UniProt accession, such as \`P01308\`.
- \`reviewed\` — Optional. \`yes\` for Swiss-Prot, \`no\` for TrEMBL.
- \`lengthFrom\`, \`lengthTo\` — Optional. Sequence length. \`0\` means no bound.
- \`disease\` — Optional. Disease name. Look up names with https://skills.duaer.com/diseases.md.
- \`keyword\` — Optional. UniProt keyword. Look up keywords with https://skills.duaer.com/keywords.md.
- \`location\` — Optional. Subcellular location. Look up names with https://skills.duaer.com/locations.md.
- \`function\` — Optional. Words in the function text.
- \`go\` — Optional. Gene Ontology term. Look up terms with https://skills.duaer.com/gene-ontology.md.
- \`pathway\` — Optional. Reactome pathway id or words. Look up pathways with https://skills.duaer.com/pathways.md.
- \`domain\` — Optional. InterPro domain id or words. Look up domains with https://skills.duaer.com/domains.md.
- \`taxonomyId\` — Optional. NCBI taxonomy id, such as \`9606\`. Look up ids with https://skills.duaer.com/organisms.md.
- \`limit\` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/proteins?gene=INS&organism=Homo%20sapiens&reviewed=yes\` — reviewed human insulin.
- \`GET https://api.duaer.com/v1/data/proteins?disease=Alzheimer%20disease&taxonomyId=9606&reviewed=yes\` — reviewed human proteins linked to Alzheimer disease.
- \`GET https://api.duaer.com/v1/data/proteins?accession=P04637\` — one protein by accession.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`UniProt\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`accession\` — UniProt accession.
- \`gene\` — primary gene symbol.
- \`organism\` — scientific name.
- \`length\` — sequence length.
- \`reviewed\` — true for Swiss-Prot entries.
- \`disease\`, \`location\` — linked diseases and subcellular locations.

${blank}

${credits}
`,

	trials: `---
name: duaer-trials
description: >-
  Duaer clinical trials. ClinicalTrials.gov studies by condition, intervention, location, title, outcome, sponsor, NCT id, status, or phase.
  One successful search uses 1 Duaer credit.
---

# Duaer clinical trials

Duaer clinical trials searches ClinicalTrials.gov. Fields combine, so each one narrows the search. Results are ordered by relevance unless you sort by last update.

## When to use

- Find recruiting trials for a condition and a drug.
- List phase 3 trials a sponsor runs.
- Look up one study by its NCT id.

## When not to use

- Published trial results in papers. Use https://skills.duaer.com/papers.md.
- Drug adverse event reports. Use https://skills.duaer.com/adverse-events.md.

## Call

\`GET https://api.duaer.com/v1/data/trials?condition=diabetes&intervention=insulin&status=RECRUITING&limit=10\`

${header}

## Parameters

Provide at least one search field. \`status\` or \`phase\` alone counts. \`sort\` and \`limit\` alone are not a search.

- \`condition\` — Optional. Disease or condition.
- \`term\` — Optional. Other words.
- \`intervention\` — Optional. Drug, device, or other intervention.
- \`location\` — Optional. Where the study runs, such as a city or country.
- \`title\` — Optional. Words in the title.
- \`outcome\` — Optional. Words in the outcome measures.
- \`sponsor\` — Optional. Sponsor or collaborator name.
- \`lead\` — Optional. Lead sponsor name.
- \`nctId\` — Optional. Study id, such as \`NCT04368728\`.
- \`status\` — Optional. \`NOT_YET_RECRUITING\`, \`RECRUITING\`, \`ENROLLING_BY_INVITATION\`, \`ACTIVE_NOT_RECRUITING\`, \`SUSPENDED\`, \`TERMINATED\`, \`COMPLETED\`, \`WITHDRAWN\`, or \`UNKNOWN\`.
- \`phase\` — Optional. \`EARLY_PHASE1\`, \`PHASE1\`, \`PHASE2\`, \`PHASE3\`, \`PHASE4\`, or \`NA\`.
- \`sort\` — Optional. \`recent\` orders by last update. Omit it for relevance.
- \`limit\` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/trials?condition=diabetes&intervention=insulin&status=RECRUITING\` — recruiting insulin trials for diabetes.
- \`GET https://api.duaer.com/v1/data/trials?lead=Pfizer&phase=PHASE3&sort=recent\` — Pfizer phase 3 trials, latest update first.
- \`GET https://api.duaer.com/v1/data/trials?nctId=NCT04368728\` — one study by NCT id.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`ClinicalTrials.gov\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`nctId\` — study id.
- \`status\`, \`phase\` — recruitment status and phase.
- \`conditions\`, \`interventions\` — conditions and interventions studied.
- \`sponsor\` — lead sponsor.
- \`startDate\` — start date.

${blank}

${credits}
`,

	compounds: `---
name: duaer-compounds
description: >-
  Duaer compounds. PubChem compounds and drugs by name, CID, formula, SMILES, or InChIKey, with weight, structure, and drug-likeness properties.
  One successful search uses 1 Duaer credit.
---

# Duaer compounds

Duaer compounds looks up PubChem compounds by one identifier and returns structure and computed properties.

## When to use

- Get the formula, weight, SMILES, and InChIKey of a drug by name.
- Check drug-likeness properties such as XLogP, TPSA, and hydrogen bond counts.
- Resolve an InChIKey or SMILES to a PubChem CID.

## When not to use

- Bioactivity against targets. Use https://skills.duaer.com/activities.md.
- Drug labels and indications. Use https://skills.duaer.com/drug-labels.md.
- Ids for one compound in other databases. Use https://skills.duaer.com/crossrefs.md.

## Call

\`GET https://api.duaer.com/v1/data/compounds?name=aspirin&limit=10\`

${header}

## Parameters

Provide exactly one of \`name\`, \`cid\`, \`formula\`, \`smiles\`, or \`inchikey\`.

- \`name\` — Compound or drug name, such as \`aspirin\`. A name can match several compounds, up to \`limit\`.
- \`cid\` — PubChem compound id, such as \`2244\`.
- \`formula\` — Molecular formula, such as \`C9H8O4\`. Can match several compounds, up to \`limit\`.
- \`smiles\` — SMILES string. URL-encode it.
- \`inchikey\` — InChIKey, such as \`BSYNRYMUTXBXSQ-UHFFFAOYSA-N\`.
- \`limit\` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/compounds?name=aspirin\` — aspirin and close name matches.
- \`GET https://api.duaer.com/v1/data/compounds?inchikey=BSYNRYMUTXBXSQ-UHFFFAOYSA-N\` — one compound by InChIKey.
- \`GET https://api.duaer.com/v1/data/compounds?formula=C9H8O4&limit=5\` — compounds with one formula.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`PubChem\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`cid\` — PubChem compound id.
- \`formula\`, \`weight\` — molecular formula and weight.
- \`iupacName\`, \`smiles\`, \`inchi\`, \`inchiKey\` — names and structure strings.
- \`xlogp\`, \`tpsa\` — computed lipophilicity and polar surface area.
- \`hbondDonors\`, \`hbondAcceptors\`, \`rotatableBonds\` — counts used in drug-likeness rules.
- \`complexity\`, \`charge\` — structural complexity and formal charge.

${blank}

${compoundCredits}
`,

	genes: `---
name: duaer-genes
description: >-
  Duaer genes. MyGene.info genes by words, official symbol, or NCBI Gene id, with name, aliases, Ensembl id, species, and map location.
  One successful search uses 1 Duaer credit.
---

# Duaer genes

Duaer genes searches MyGene.info for genes. It uses one search field: \`id\` first, then \`symbol\`, then \`q\`.

## When to use

- Turn a gene symbol or name into an NCBI Gene id and Ensembl id.
- Check aliases and the chromosome location of a gene.
- Get the official symbol before searching proteins or variants.

## When not to use

- Protein function, disease, and location. Use https://skills.duaer.com/proteins.md.
- Variants in a gene. Use https://skills.duaer.com/variants.md.
- Official HGNC nomenclature records. Use https://skills.duaer.com/hgnc.md.

## Call

\`GET https://api.duaer.com/v1/data/genes?symbol=INS\`

${header}

## Parameters

Provide \`q\`, \`symbol\`, or \`id\`. When you send more than one, Duaer uses \`id\` if it is a number, else \`symbol\`, else \`q\`.

- \`q\` — Words in the gene symbol, name, or summary.
- \`symbol\` — Official gene symbol, such as \`INS\`.
- \`id\` — NCBI Gene id, such as \`3630\`. Reuse \`geneId\` from a result for an exact lookup.
- \`species\` — Optional. Species for \`q\` and \`symbol\`, such as \`human\`, \`mouse\`, or a taxonomy id. Default \`human\`. Ignored with \`id\`.
- \`limit\` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/genes?symbol=INS\` — human insulin gene.
- \`GET https://api.duaer.com/v1/data/genes?symbol=Trp53&species=mouse\` — mouse p53 gene.
- \`GET https://api.duaer.com/v1/data/genes?id=3630\` — one gene by NCBI Gene id.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`MyGene\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`geneId\` — NCBI Gene id.
- \`symbol\`, \`name\` — official symbol and full name.
- \`aliases\` — other symbols.
- \`ensemblId\` — Ensembl gene id.
- \`taxId\` — NCBI taxonomy id of the species.
- \`mapLocation\` — cytogenetic location, such as \`11p15.5\`.
- \`typeOfGene\` — gene type, such as \`protein-coding\`.

Use \`symbol\` as \`gene\` in https://skills.duaer.com/proteins.md and https://skills.duaer.com/variants.md.

${blank}

${credits}
`,

	variants: `---
name: duaer-variants
description: >-
  Duaer variants. ClinVar and dbSNP variants from MyVariant.info by rs id, gene symbol, words, or HGVS id, with clinical significance and alleles.
  One successful search uses 1 Duaer credit.
---

# Duaer variants

Duaer variants searches MyVariant.info, which merges ClinVar and dbSNP. It uses one search field: \`id\` first, then \`rsid\`, then \`gene\`, then \`q\`.

## When to use

- Check the clinical significance of an rs id.
- List ClinVar variants in a gene.
- Get the reference and alternate allele of a variant.

## When not to use

- Population allele frequencies. Use https://skills.duaer.com/gnomad.md.
- Variant effect prediction. Use https://skills.duaer.com/ensembl-vep.md.
- Trait associations from GWAS. Use https://skills.duaer.com/gwas.md.

## Call

\`GET https://api.duaer.com/v1/data/variants?rsid=rs113488022\`

${header}

## Parameters

Provide \`q\`, \`rsid\`, \`gene\`, or \`id\`. When you send more than one, Duaer uses \`id\`, else \`rsid\`, else \`gene\`, else \`q\`.

- \`q\` — Words, such as an rs id.
- \`rsid\` — dbSNP rs id, such as \`rs113488022\`. A number without \`rs\` also works.
- \`gene\` — Gene symbol with ClinVar records, such as \`BRAF\`. Look up symbols with https://skills.duaer.com/genes.md.
- \`id\` — HGVS genomic id, such as \`chr7:g.140453136A>T\`. Reuse \`variantId\` from a result for an exact lookup.
- \`limit\` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/variants?rsid=rs113488022\` — BRAF V600E by rs id.
- \`GET https://api.duaer.com/v1/data/variants?gene=BRCA1&limit=20\` — ClinVar variants in BRCA1.
- \`GET https://api.duaer.com/v1/data/variants?id=chr7:g.140453136A%3ET\` — one variant by HGVS id.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`MyVariant\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`variantId\` — HGVS genomic id.
- \`rsid\` — dbSNP rs id.
- \`gene\` — gene symbol.
- \`hgvsProtein\` — protein change, such as \`p.Val600Glu\`.
- \`clinicalSignificance\` — ClinVar significance, such as \`Pathogenic\`.
- \`chrom\`, \`ref\`, \`alt\` — chromosome and alleles.

${blank}

${credits}
`,
};

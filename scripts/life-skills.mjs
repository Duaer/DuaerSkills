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

## Related

- https://skills.duaer.com/proteins.md — Duaer proteins
- https://skills.duaer.com/trials.md — Duaer clinical trials
- https://skills.duaer.com/diseases.md — Duaer diseases
- https://skills.duaer.com/preprints.md — Duaer preprints
- https://skills.duaer.com/grants.md — Duaer grants
- https://skills.duaer.com/patents.md — Duaer patents
- https://skills.duaer.com/life-research-brief.md — Digital employee: Life research brief
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

For interaction partners of a gene or protein, use https://skills.duaer.com/interactions.md.

${blank}

${credits}

## Related

- https://skills.duaer.com/genes.md — Duaer genes
- https://skills.duaer.com/structures.md — Duaer structures
- https://skills.duaer.com/pathways.md — Duaer pathways
- https://skills.duaer.com/diseases.md — Duaer diseases
- https://skills.duaer.com/interactions.md — Duaer interactions
- https://skills.duaer.com/atlas.md — Duaer tissue atlas
- https://skills.duaer.com/alphafold.md — Duaer AlphaFold
- https://skills.duaer.com/complexes.md — Duaer complexes
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

## Related

- https://skills.duaer.com/compounds.md — Duaer compounds
- https://skills.duaer.com/diseases.md — Duaer diseases
- https://skills.duaer.com/papers.md — Duaer papers
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

Reuse a compound name as \`molecule\` when searching activities: https://skills.duaer.com/activities.md.

${blank}

${compoundCredits}

## Related

- https://skills.duaer.com/trials.md — Duaer clinical trials
- https://skills.duaer.com/structures.md — Duaer structures
- https://skills.duaer.com/proteins.md — Duaer proteins
- https://skills.duaer.com/activities.md — Duaer activities
- https://skills.duaer.com/indications.md — Duaer indications
- https://skills.duaer.com/mechanisms.md — Duaer mechanisms
- https://skills.duaer.com/assays.md — Duaer assays
- https://skills.duaer.com/patents.md — Duaer patents
- https://skills.duaer.com/drug-gene.md — Duaer drug–gene
- https://skills.duaer.com/reactions.md — Duaer reactions
- https://skills.duaer.com/metabolites.md — Duaer metabolites
- https://skills.duaer.com/drug-labels.md — Duaer drug labels
- https://skills.duaer.com/adverse-events.md — Duaer adverse events
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

For tissue expression, use https://skills.duaer.com/expression.md.

${blank}

${credits}

## Related

- https://skills.duaer.com/proteins.md — Duaer proteins
- https://skills.duaer.com/variants.md — Duaer variants
- https://skills.duaer.com/pathways.md — Duaer pathways
- https://skills.duaer.com/gene-ontology.md — Duaer Gene Ontology
- https://skills.duaer.com/expression.md — Duaer expression
- https://skills.duaer.com/atlas.md — Duaer tissue atlas
- https://skills.duaer.com/geo.md — Duaer GEO
- https://skills.duaer.com/drug-gene.md — Duaer drug–gene
- https://skills.duaer.com/life-research-brief.md — Digital employee: Life research brief
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

## Related

- https://skills.duaer.com/genes.md — Duaer genes
- https://skills.duaer.com/diseases.md — Duaer diseases
- https://skills.duaer.com/proteins.md — Duaer proteins
- https://skills.duaer.com/life-research-brief.md — Digital employee: Life research brief
`,

	structures: `---
name: duaer-structures
description: >-
  Duaer structures. Search protein structures.
  One successful search uses 1 Duaer credit.
---

# Duaer structures

Search protein structures. Data comes from RCSB PDB.

## When to use

- Find experimental 3D structures of a protein in an organism.
- Filter structures by method, resolution, release date, or bound ligand.

## When not to use

- Predicted models without an experimental structure. Use https://skills.duaer.com/alphafold.md.

## Call

\`GET https://api.duaer.com/v1/data/structures?q=insulin&organism=Homo%20sapiens&method=X-RAY%20DIFFRACTION&resolutionTo=2.5&limit=10\`

${header}

## Parameters

At least one search field is required. Fields combine.

- \`q\` — words in the structure record.
- \`pdbId\` — structure id, such as \`4HHB\`.
- \`organism\` — scientific name. Look up formal names with https://skills.duaer.com/organisms.md.
- \`method\` — experimental method, such as \`X-RAY DIFFRACTION\`, \`SOLUTION NMR\`, or \`ELECTRON MICROSCOPY\`.
- \`resolutionFrom\`, \`resolutionTo\` — resolution in angstroms. \`0\` means no bound.
- \`releasedFrom\`, \`releasedTo\` — release date as \`YYYY-MM-DD\`.
- \`polymer\` — \`protein\`, \`dna\`, or \`rna\`.
- \`ligand\` — bound chemical name.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/structures?q=insulin&organism=Homo%20sapiens&method=X-RAY%20DIFFRACTION&resolutionTo=2.5&limit=10\` — human insulin X-ray structures at 2.5 Å or better.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`RCSB PDB\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`pdbId\`, \`method\`, \`resolution\`, \`organism\`, \`released\`, \`ligand\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/proteins.md — Duaer proteins
- https://skills.duaer.com/compounds.md — Duaer compounds
- https://skills.duaer.com/genes.md — Duaer genes
- https://skills.duaer.com/alphafold.md — Duaer AlphaFold
`,

	diseases: `---
name: duaer-diseases
description: >-
  Duaer diseases. Search disease names. Use the formal name with proteins.disease.
  One successful search uses 1 Duaer credit.
---

# Duaer diseases

Search disease names. Use the formal name with proteins.disease. Data comes from UniProt.

## When to use

- Get the formal UniProt disease name before searching proteins.
- Check the acronym and id of a disease.

## When not to use

- Disease ontology terms and cross-references. Use https://skills.duaer.com/mondo.md.

## Call

\`GET https://api.duaer.com/v1/data/diseases?q=diabetes&limit=10\`

${header}

## Parameters

At least one search field is required. Fields combine. Search with \`q\` first; use \`id\` or \`acronym\` only when you already have them from a result.

- \`q\` — words in the disease name or definition.
- \`id\` — Optional. UniProt disease id from a result (\`diseaseId\`), such as \`DI-02060\`.
- \`name\` — Optional. Disease name.
- \`acronym\` — Optional. Disease acronym from a result, such as \`T2D\`.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/diseases?q=diabetes&limit=10\` — diseases matching diabetes.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`UniProt\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`diseaseId\`, \`acronym\`, \`alternativeNames\` — text.
- \`reviewedProteinCount\` — number.

Use \`title\` as \`disease\` when searching proteins. Reuse \`diseaseId\` in \`id\` for an exact lookup.

${blank}

${credits}

## Related

- https://skills.duaer.com/genes.md — Duaer genes
- https://skills.duaer.com/proteins.md — Duaer proteins
- https://skills.duaer.com/variants.md — Duaer variants
- https://skills.duaer.com/trials.md — Duaer clinical trials
- https://skills.duaer.com/indications.md — Duaer indications
- https://skills.duaer.com/cell-lines.md — Duaer cell lines
`,

	organisms: `---
name: duaer-organisms
description: >-
  Duaer organisms. Search organism names. Use the scientific name with proteins.organism and structures.organism.
  One successful search uses 1 Duaer credit.
---

# Duaer organisms

Search organism names. Use the scientific name with proteins.organism and structures.organism. Data comes from UniProt.

## When to use

- Get the scientific name or taxonomy id before searching proteins or structures.
- Look up the common name of a species.

## When not to use

- Full taxonomic classification. Use https://skills.duaer.com/ncbi-taxon.md.

## Call

\`GET https://api.duaer.com/v1/data/organisms?q=human&limit=10\`

${header}

## Parameters

At least one search field is required. Fields combine. Search with \`q\` first; use \`taxonId\` only when you already have it from a result.

- \`q\` — words in the scientific or common name.
- \`taxonId\` — Optional. NCBI / UniProt taxon id from a result (\`taxonId\`), such as \`9606\`.
- \`scientific\` — Optional. Scientific name, such as \`Homo sapiens\`.
- \`common\` — Optional. Common name, such as \`human\`.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/organisms?q=human&limit=10\` — organisms matching human.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`UniProt\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`taxonId\` — number.
- \`scientificName\`, \`commonName\`, \`mnemonic\`, \`rank\` — text.

Use \`title\` (scientific name) as \`organism\` when searching proteins or structures. Reuse \`taxonId\` as \`taxonomyId\` on proteins.

${blank}

${credits}

## Related

- https://skills.duaer.com/proteins.md — Duaer proteins
- https://skills.duaer.com/genes.md — Duaer genes
- https://skills.duaer.com/geo.md — Duaer GEO
- https://skills.duaer.com/cell-lines.md — Duaer cell lines
`,

	keywords: `---
name: duaer-keywords
description: >-
  Duaer keywords. Search UniProt keywords. Use the name with proteins.keyword.
  One successful search uses 1 Duaer credit.
---

# Duaer keywords

Search UniProt keywords. Use the name with proteins.keyword. Data comes from UniProt.

## When to use

- Get the exact UniProt keyword before searching proteins.
- Browse keywords for a protein class.

## When not to use

- Gene Ontology terms. Use https://skills.duaer.com/gene-ontology.md.

## Call

\`GET https://api.duaer.com/v1/data/keywords?q=kinase&limit=10\`

${header}

## Parameters

At least one search field is required. Fields combine. Search with \`q\` first; use \`id\` only when you already have it from a result.

- \`q\` — words in the keyword name or definition.
- \`id\` — Optional. UniProt keyword id from a result (\`keywordId\`), such as \`KW-0418\`.
- \`name\` — Optional. Keyword name.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/keywords?q=kinase&limit=10\` — keywords matching kinase.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`UniProt\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`keywordId\`, \`category\`, \`synonyms\` — text.
- \`reviewedProteinCount\` — number.

Use \`title\` as \`keyword\` when searching proteins. Reuse \`keywordId\` in \`id\` for an exact lookup.

${blank}

${credits}

## Related

- https://skills.duaer.com/proteins.md — Duaer proteins
- https://skills.duaer.com/gene-ontology.md — Duaer Gene Ontology
`,

	locations: `---
name: duaer-locations
description: >-
  Duaer locations. Search UniProt subcellular locations. Use the name with proteins.location.
  One successful search uses 1 Duaer credit.
---

# Duaer locations

Search UniProt subcellular locations. Use the name with proteins.location. Data comes from UniProt.

## When to use

- Get the exact subcellular location name before searching proteins.
- Check what a location term covers.

## When not to use

- Gene Ontology cellular component terms. Use https://skills.duaer.com/gene-ontology.md.

## Call

\`GET https://api.duaer.com/v1/data/locations?q=nucleus&limit=10\`

${header}

## Parameters

At least one search field is required. Fields combine. Search with \`q\` first; use \`id\` only when you already have it from a result.

- \`q\` — words in the location name or definition.
- \`id\` — Optional. UniProt location id from a result (\`locationId\`), such as \`SL-0191\`.
- \`name\` — Optional. Location name.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/locations?q=nucleus&limit=10\` — locations matching nucleus.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`UniProt\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`locationId\`, \`category\`, \`synonyms\` — text.
- \`reviewedProteinCount\` — number.

Use \`title\` as \`location\` when searching proteins. Reuse \`locationId\` in \`id\` for an exact lookup.

${blank}

${credits}

## Related

- https://skills.duaer.com/proteins.md — Duaer proteins
- https://skills.duaer.com/genes.md — Duaer genes
`,

	'gene-ontology': `---
name: duaer-gene-ontology
description: >-
  Duaer Gene Ontology. Search Gene Ontology terms. Use the name or id with proteins.go.
  One successful search uses 1 Duaer credit.
---

# Duaer Gene Ontology

Search Gene Ontology terms. Use the name or id with proteins.go. Data comes from QuickGO.

## When to use

- Get a GO term name or id before searching proteins.
- Check the definition of a biological process, function, or component.

## When not to use

- GO annotations for one gene product. Use https://skills.duaer.com/goa.md.

## Call

\`GET https://api.duaer.com/v1/data/gene-ontology?q=apoptosis&limit=10\`

${header}

## Parameters

Provide \`q\`, \`name\`, or \`id\`. When you send more than one, Duaer uses \`id\`, else \`name\`, else \`q\`. Search with \`q\` first; use \`id\` only when you already have it from a result.

- \`q\` — words in the term name or definition.
- \`id\` — Optional. Gene Ontology id from a result (\`goId\`), such as \`GO:0006915\`.
- \`name\` — Optional. Term name.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/gene-ontology?q=apoptosis&limit=10\` — GO terms matching apoptosis.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`QuickGO\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`goId\`, \`aspect\` — text.
- \`obsolete\` — true or false.

Use \`title\` or \`goId\` as \`go\` when searching proteins. Reuse \`goId\` in \`id\` for an exact lookup.

${blank}

${credits}

## Related

- https://skills.duaer.com/genes.md — Duaer genes
- https://skills.duaer.com/proteins.md — Duaer proteins
- https://skills.duaer.com/pathways.md — Duaer pathways
`,

	pathways: `---
name: duaer-pathways
description: >-
  Duaer pathways. Search Reactome pathways. Use the pathwayId with proteins.pathway.
  One successful search uses 1 Duaer credit.
---

# Duaer pathways

Search Reactome pathways. Use the pathwayId with proteins.pathway. Data comes from Reactome.

## When to use

- Get a Reactome pathway id before searching proteins.
- Find human pathways for a process or molecule.

## When not to use

- KEGG pathways. Use https://skills.duaer.com/kegg.md.

## Call

\`GET https://api.duaer.com/v1/data/pathways?q=insulin&limit=10\`

${header}

## Parameters

Provide \`q\`, \`name\`, or \`id\`. When you send more than one, Duaer uses \`id\`, else \`name\`, else \`q\`. Search with \`q\` first; use \`id\` only when you already have it from a result. Word searches default to Homo sapiens pathways.

- \`q\` — words in the pathway name or summary.
- \`id\` — Optional. Reactome pathway id from a result (\`pathwayId\`), such as \`R-HSA-264876\`.
- \`name\` — Optional. Pathway name.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/pathways?q=insulin&limit=10\` — human Reactome pathways matching insulin.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`Reactome\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`pathwayId\`, \`dbId\`, \`stIdVersion\`, \`species\`, \`browserUrl\`, \`diagramUrl\`, \`figureUrl\` — text.
- \`hasDiagram\`, \`hasEHLD\`, \`isDisease\` — true or false.
- \`doi\`, \`releaseDate\`, \`lastUpdatedDate\`, \`compartments\`, \`compartmentAccessions\`, \`goId\`, \`goName\`, \`schemaClass\` — text.

Use \`pathwayId\` as \`pathway\` when searching proteins. Reuse \`pathwayId\` in \`id\` for an exact lookup.
Open \`browserUrl\` for the interactive Reactome diagram, or \`diagramUrl\` for a PNG export.
Open \`browserUrl\` for the interactive Reactome diagram, or \`diagramUrl\` for a PNG export. Words and name searches are enriched with Reactome detail (doi, GO, figure, dates, diagram flags), same as an id lookup.
Words and name searches are enriched with Reactome detail, same as an id lookup.

${blank}

${credits}

## Related

- https://skills.duaer.com/genes.md — Duaer genes
- https://skills.duaer.com/proteins.md — Duaer proteins
- https://skills.duaer.com/compounds.md — Duaer compounds
- https://skills.duaer.com/reactions.md — Duaer reactions
`,

	domains: `---
name: duaer-domains
description: >-
  Duaer domains. Search InterPro domains. Use the domainId with proteins.domain.
  One successful search uses 1 Duaer credit.
---

# Duaer domains

Search InterPro domains. Use the domainId with proteins.domain. Data comes from InterPro.

## When to use

- Get an InterPro domain id before searching proteins.
- Find domain families for a protein function.

## When not to use

- Pfam families only. Use https://skills.duaer.com/pfam.md.

## Call

\`GET https://api.duaer.com/v1/data/domains?q=kinase&limit=10\`

${header}

## Parameters

Provide \`q\`, \`name\`, or \`id\`. An InterPro id in \`id\` is an exact lookup. Otherwise Duaer searches \`q\`, else \`name\`, else the \`id\` text. Search with \`q\` first; use \`id\` only when you already have an InterPro id from a result.

- \`q\` — words in the domain name or description.
- \`id\` — Optional. InterPro id from a result (\`domainId\`), such as \`IPR000719\`.
- \`name\` — Optional. Domain name.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/domains?q=kinase&limit=10\` — InterPro domains matching kinase.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`InterPro\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`domainId\`, \`type\`, \`shortName\`, \`goIds\`, \`memberDatabases\` — text.

Use \`domainId\` as \`domain\` when searching proteins. Reuse \`domainId\` in \`id\` for an exact lookup.

${blank}

${credits}

## Related

- https://skills.duaer.com/proteins.md — Duaer proteins
- https://skills.duaer.com/gene-ontology.md — Duaer Gene Ontology
- https://skills.duaer.com/pathways.md — Duaer pathways
`,

	preprints: `---
name: duaer-preprints
description: >-
  Duaer preprints. Search bioRxiv and medRxiv preprints (Europe PMC).
  One successful search uses 1 Duaer credit.
---

# Duaer preprints

Search bioRxiv and medRxiv preprints (Europe PMC). Data comes from EuropePMC.

## When to use

- Find recent bioRxiv or medRxiv preprints on a topic.
- Filter preprints by author, DOI, or year.

## When not to use

- Published papers. Use https://skills.duaer.com/papers.md.

## Call

\`GET https://api.duaer.com/v1/data/preprints?q=insulin&limit=10\`

${header}

## Parameters

At least one search field is required (not \`server\` alone). Fields combine.

- \`q\` — words in the title or abstract.
- \`title\` — Optional. Words in the title.
- \`author\` — Optional. Author name.
- \`doi\` — Optional. Digital object identifier.
- \`server\` — Optional. \`bioRxiv\` or \`medRxiv\`. Omit for both.
- \`yearFrom\` — Optional. First publication year (1000–2100).
- \`yearTo\` — Optional. Last publication year (1000–2100).
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/preprints?q=insulin&limit=10\` — preprints matching insulin.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`EuropePMC\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`preprintId\`, \`doi\`, \`server\`, \`authors\`, \`published\` — text.
- \`year\` — number.

${blank}

${credits}

## Related

- https://skills.duaer.com/papers.md — Duaer papers
- https://skills.duaer.com/genes.md — Duaer genes
`,

	grants: `---
name: duaer-grants
description: >-
  Duaer grants. Search NIH grants (NIH RePORTER).
  One successful search uses 1 Duaer credit.
---

# Duaer grants

Search NIH grants (NIH RePORTER). Data comes from NIH RePORTER.

## When to use

- Find NIH-funded projects on a topic.
- List grants for a principal investigator or organization.

## When not to use

- NSF awards. Use https://skills.duaer.com/nsf-awards.md.

## Call

\`GET https://api.duaer.com/v1/data/grants?q=insulin&limit=10\`

${header}

## Parameters

At least one search field is required. Fields combine.

- \`q\` — words in the project title, terms, or abstract.
- \`pi\` — Optional. Principal investigator name.
- \`organization\` — Optional. Awardee organization name.
- \`projectNum\` — Optional. NIH project number, such as \`5P20GM152335-03\`.
- \`yearFrom\` — Optional. First fiscal year (1000–2100).
- \`yearTo\` — Optional. Last fiscal year (1000–2100).
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/grants?q=insulin&limit=10\` — NIH grants matching insulin.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`NIH RePORTER\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`projectNum\`, \`applId\`, \`pi\`, \`organization\`, \`agency\` — text.
- \`fiscalYear\`, \`awardAmount\` — number.
- \`activityCode\`, \`startDate\`, \`endDate\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/papers.md — Duaer papers
- https://skills.duaer.com/preprints.md — Duaer preprints
`,

	interactions: `---
name: duaer-interactions
description: >-
  Duaer interactions. Search STRING protein interaction partners.
  One successful search uses 1 Duaer credit.
---

# Duaer interactions

Search STRING protein interaction partners. Data comes from STRING.

## When to use

- List interaction partners of a protein.
- Keep only high-confidence partners with a score threshold.

## When not to use

- Experimentally curated binary interactions. Use https://skills.duaer.com/intact.md.

## Call

\`GET https://api.duaer.com/v1/data/interactions?protein=INS&species=9606&limit=10\`

${header}

## Parameters

\`protein\` is required. Other fields are optional.

- \`protein\` — gene symbol, UniProt accession, or STRING id. Look up symbols with https://skills.duaer.com/genes.md or proteins with https://skills.duaer.com/proteins.md.
- \`species\` — Optional. NCBI taxonomy id. Default \`9606\` (human). Look up ids with https://skills.duaer.com/organisms.md.
- \`requiredScore\` — Optional. STRING threshold from 0 to 1000. Omit for the STRING default.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/interactions?protein=INS&species=9606&limit=10\` — human insulin partners.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`STRING\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`proteinA\`, \`proteinB\`, \`stringIdA\`, \`stringIdB\`, \`partner\`, \`partnerStringId\` — text.
- \`score\`, \`neighborhood\`, \`fusion\`, \`cooccurrence\`, \`coexpression\`, \`experimental\`, \`database\`, \`textmining\`, \`taxId\` — number.

Reuse \`partner\` as \`gene\` when searching proteins or expression, or as \`protein\` for further interaction partners.

${blank}

${credits}

## Related

- https://skills.duaer.com/proteins.md — Duaer proteins
- https://skills.duaer.com/genes.md — Duaer genes
- https://skills.duaer.com/organisms.md — Duaer organisms
- https://skills.duaer.com/expression.md — Duaer expression
- https://skills.duaer.com/complexes.md — Duaer complexes
`,

	expression: `---
name: duaer-expression
description: >-
  Duaer expression. Search GTEx median tissue expression.
  One successful search uses 1 Duaer credit.
---

# Duaer expression

Search GTEx median tissue expression. Data comes from GTEx.

## When to use

- Compare median expression of a gene across human tissues.
- Check expression in one tissue.

## When not to use

- Protein-level tissue enrichment. Use https://skills.duaer.com/atlas.md.

## Call

\`GET https://api.duaer.com/v1/data/expression?gene=INS&limit=10\`

${header}

## Parameters

At least \`gene\` or \`gencodeId\` is required.

- \`gene\` — gene symbol. Look up symbols with https://skills.duaer.com/genes.md.
- \`gencodeId\` — Optional. Ensembl/Gencode id from a result, such as \`ENSG00000254647.6\`.
- \`tissue\` — Optional. GTEx tissue id, such as \`Pancreas\` or \`Adipose_Subcutaneous\`.
- \`limit\` — Optional. From 1 to 20. Default 10. Results are sorted by median TPM descending.

## Examples

- \`GET https://api.duaer.com/v1/data/expression?gene=INS&limit=10\` — insulin expression by tissue.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`GTEx\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`gene\`, \`gencodeId\`, \`tissue\`, \`tissueLabel\` — text.
- \`median\` — number.
- \`unit\`, \`ontologyId\`, \`dataset\` — text.

Reuse \`gene\` when searching proteins or genes. Reuse \`gencodeId\` in \`gencodeId\` for an exact expression lookup. For gene–disease associations, use https://skills.duaer.com/targets.md. For HPA tissue enrichment, use https://skills.duaer.com/atlas.md.

${blank}

## Credits

A successful search uses 1 credit, even when it finds nothing.
If you send a \`gene\` that GTEx does not know, Duaer returns no items and uses 0.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/genes.md — Duaer genes
- https://skills.duaer.com/proteins.md — Duaer proteins
- https://skills.duaer.com/interactions.md — Duaer interactions
- https://skills.duaer.com/targets.md — Duaer targets
- https://skills.duaer.com/atlas.md — Duaer tissue atlas
- https://skills.duaer.com/geo.md — Duaer GEO
`,

	targets: `---
name: duaer-targets
description: >-
  Duaer targets. Search Open Targets gene–disease associations.
  One successful search uses 1 Duaer credit.
---

# Duaer targets

Search Open Targets gene–disease associations. Data comes from Open Targets.

## When to use

- Rank diseases associated with a gene.
- Check the evidence score for one gene–disease pair.

## When not to use

- Drugs that act on a gene. Use https://skills.duaer.com/drug-gene.md.

## Call

\`GET https://api.duaer.com/v1/data/targets?gene=INS&limit=10\`

${header}

## Parameters

At least \`gene\` or \`disease\` is required.

- \`gene\` — gene symbol or Ensembl id. Look up symbols with https://skills.duaer.com/genes.md.
- \`disease\` — Optional. Disease name or ontology id (\`EFO_\` / \`MONDO_\`). Alone, returns associated targets. With \`gene\`, filters that gene’s associations. Look up names with https://skills.duaer.com/diseases.md.
- \`limit\` — Optional. From 1 to 20. Default 10. Results are sorted by association score descending.

## Examples

- \`GET https://api.duaer.com/v1/data/targets?gene=INS&limit=10\` — diseases associated with INS.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`Open Targets\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`gene\`, \`ensemblId\`, \`disease\`, \`diseaseId\` — text.
- \`score\` — number.

Reuse \`gene\` when searching proteins, genes, expression, interactions, or orthologs. Reuse \`disease\` when searching diseases or proteins.

${blank}

## Credits

A successful search uses 1 credit, even when it finds nothing.
If you send a \`gene\` that Open Targets does not know, Duaer returns no items and uses 0.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/genes.md — Duaer genes
- https://skills.duaer.com/diseases.md — Duaer diseases
- https://skills.duaer.com/proteins.md — Duaer proteins
- https://skills.duaer.com/expression.md — Duaer expression
- https://skills.duaer.com/orthologs.md — Duaer orthologs
- https://skills.duaer.com/activities.md — Duaer activities
- https://skills.duaer.com/assays.md — Duaer assays
- https://skills.duaer.com/drug-gene.md — Duaer drug–gene
`,

	orthologs: `---
name: duaer-orthologs
description: >-
  Duaer orthologs. Search cross-species orthologs (MyGene HomoloGene).
  One successful search uses 1 Duaer credit.
---

# Duaer orthologs

Search cross-species orthologs (MyGene HomoloGene). Data comes from MyGene.

## When to use

- Find the matching gene in another species.
- Map a human gene to mouse or zebrafish.

## When not to use

- Ensembl Compara orthologues. Use https://skills.duaer.com/ensembl-homology.md.

## Call

\`GET https://api.duaer.com/v1/data/orthologs?gene=INS&species=9606&limit=10\`

${header}

## Parameters

\`gene\` is required.

- \`gene\` — gene symbol or NCBI Gene id. Look up symbols with https://skills.duaer.com/genes.md.
- \`species\` — Optional. NCBI taxonomy id for the query gene. Default \`9606\` (human). Look up ids with https://skills.duaer.com/organisms.md.
- \`orthologSpecies\` — Optional. Keep only orthologs for this taxonomy id (for example \`10090\` for mouse).
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/orthologs?gene=INS&species=9606&limit=10\` — orthologs of human INS.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`MyGene\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`gene\`, \`geneId\`, \`name\` — text.
- \`taxId\` — number.
- \`organism\`, \`ensemblId\` — text.
- \`homologeneId\` — number.
- \`queryGene\` — text.
- \`queryTaxId\` — number.

Reuse \`gene\` when searching proteins, genes, expression, or targets.

${blank}

## Credits

A successful search uses 1 credit, even when it finds nothing.
If you send a \`gene\` without a HomoloGene group, Duaer returns no items and uses 0.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/genes.md — Duaer genes
- https://skills.duaer.com/organisms.md — Duaer organisms
- https://skills.duaer.com/proteins.md — Duaer proteins
- https://skills.duaer.com/targets.md — Duaer targets
`,

	activities: `---
name: duaer-activities
description: >-
  Duaer activities. Search ChEMBL bioactivities by molecule or target.
  One successful search uses 1 Duaer credit.
---

# Duaer activities

Search ChEMBL bioactivities by molecule or target. Data comes from ChEMBL.

## When to use

- List measured bioactivities of a molecule.
- List active molecules against a target.

## When not to use

- Binding affinities by UniProt accession. Use https://skills.duaer.com/bindingdb.md.

## Call

\`GET https://api.duaer.com/v1/data/activities?molecule=aspirin&limit=10\`

${header}

## Parameters

At least \`molecule\` or \`target\` is required.

- \`molecule\` — molecule name or ChEMBL id (\`CHEMBL25\`). Names resolve via ChEMBL search. Look up PubChem names with https://skills.duaer.com/compounds.md.
- \`target\` — Optional. Target name, gene symbol, or ChEMBL id. Alone, returns activities for that target. With \`molecule\`, filters both. Look up gene–disease targets with https://skills.duaer.com/targets.md.
- \`limit\` — Optional. From 1 to 20. Default 10. Results prefer higher pChEMBL values.

## Examples

- \`GET https://api.duaer.com/v1/data/activities?molecule=aspirin&limit=10\` — bioactivities of aspirin.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`ChEMBL\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`activityId\`, \`moleculeChemblId\`, \`moleculeName\`, \`targetChemblId\`, \`targetName\`, \`targetOrganism\`, \`standardType\`, \`standardRelation\`, \`standardValue\`, \`standardUnits\`, \`pchemblValue\`, \`assayChemblId\`, \`assayDescription\`, \`assayType\` — text.
- \`documentYear\` — number.

Reuse \`moleculeChemblId\` / names when searching compounds or indications: https://skills.duaer.com/indications.md. Reuse \`targetChemblId\` / gene symbols when searching targets or genes.

${blank}

## Credits

A successful search uses 1 credit, even when it finds nothing.
If you send a \`molecule\` or \`target\` that ChEMBL does not know, Duaer returns no items and uses 0.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/compounds.md — Duaer compounds
- https://skills.duaer.com/targets.md — Duaer targets
- https://skills.duaer.com/genes.md — Duaer genes
- https://skills.duaer.com/indications.md — Duaer indications
- https://skills.duaer.com/mechanisms.md — Duaer mechanisms
- https://skills.duaer.com/assays.md — Duaer assays
`,

	atlas: `---
name: duaer-atlas
description: >-
  Duaer tissue atlas. Search Human Protein Atlas tissue-enriched expression.
  One successful search uses 1 Duaer credit.
---

# Duaer tissue atlas

Search Human Protein Atlas tissue-enriched expression. Data comes from HPA.

## When to use

- Check which tissues enrich a gene in the Human Protein Atlas.
- Compare enrichment for one tissue.

## When not to use

- Median RNA expression by tissue. Use https://skills.duaer.com/expression.md.

## Call

\`GET https://api.duaer.com/v1/data/atlas?gene=INS&limit=10\`

${header}

## Parameters

\`gene\` is required.

- \`gene\` — gene symbol or Ensembl id. Look up symbols with https://skills.duaer.com/genes.md.
- \`tissue\` — Optional. Keep only enriched tissues whose name contains this text (for example \`pancreas\`).
- \`limit\` — Optional. From 1 to 20. Default 10. Results sort by nTPM descending.

## Examples

- \`GET https://api.duaer.com/v1/data/atlas?gene=INS&limit=10\` — tissue enrichment of INS.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`HPA\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`gene\`, \`ensemblId\`, \`description\`, \`tissue\` — text.
- \`nTPM\` — number.
- \`specificity\`, \`distribution\`, \`proteinClasses\`, \`secretomeLocation\` — text.

Reuse \`gene\` when searching proteins, genes, expression, or targets. For GTEx median TPM across tissues, use https://skills.duaer.com/expression.md. For GEO experiment series, use https://skills.duaer.com/geo.md.

${blank}

## Credits

A successful search uses 1 credit, even when it finds nothing.
If you send a \`gene\` that the Human Protein Atlas does not know, Duaer returns no items and uses 0.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/expression.md — Duaer expression
- https://skills.duaer.com/genes.md — Duaer genes
- https://skills.duaer.com/proteins.md — Duaer proteins
`,

	indications: `---
name: duaer-indications
description: >-
  Duaer indications. Search ChEMBL drug indications by molecule.
  One successful search uses 1 Duaer credit.
---

# Duaer indications

Search ChEMBL drug indications by molecule. Data comes from ChEMBL.

## When to use

- List diseases a drug is approved or tested for.
- Check the highest trial phase per indication.

## When not to use

- Running clinical trials. Use https://skills.duaer.com/trials.md.

## Call

\`GET https://api.duaer.com/v1/data/indications?molecule=aspirin&limit=10\`

${header}

## Parameters

\`molecule\` is required.

- \`molecule\` — molecule name or ChEMBL id (\`CHEMBL25\`). Names resolve via ChEMBL search. Look up PubChem names with https://skills.duaer.com/compounds.md.
- \`limit\` — Optional. From 1 to 20. Default 10. Results prefer higher max phase.

## Examples

- \`GET https://api.duaer.com/v1/data/indications?molecule=aspirin&limit=10\` — indications of aspirin.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`ChEMBL\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`indicationId\`, \`moleculeChemblId\`, \`efoId\`, \`efoTerm\`, \`meshId\`, \`meshHeading\` — text.
- \`maxPhase\` — number.

Reuse \`moleculeChemblId\` / names when searching compounds, activities, or mechanisms: https://skills.duaer.com/mechanisms.md. Reuse \`efoTerm\` / \`meshHeading\` when searching diseases or trials.

${blank}

## Credits

A successful search uses 1 credit, even when it finds nothing.
If you send a \`molecule\` that ChEMBL does not know, Duaer returns no items and uses 0.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/compounds.md — Duaer compounds
- https://skills.duaer.com/activities.md — Duaer activities
- https://skills.duaer.com/diseases.md — Duaer diseases
- https://skills.duaer.com/mechanisms.md — Duaer mechanisms
`,

	mechanisms: `---
name: duaer-mechanisms
description: >-
  Duaer mechanisms. Search ChEMBL mechanisms of action by molecule.
  One successful search uses 1 Duaer credit.
---

# Duaer mechanisms

Search ChEMBL mechanisms of action by molecule. Data comes from ChEMBL.

## When to use

- Get the mechanism of action and target of a drug.
- Check the action type, such as inhibitor or agonist.

## When not to use

- Measured bioactivities. Use https://skills.duaer.com/activities.md.

## Call

\`GET https://api.duaer.com/v1/data/mechanisms?molecule=aspirin&limit=10\`

${header}

## Parameters

\`molecule\` is required.

- \`molecule\` — molecule name or ChEMBL id (\`CHEMBL25\`). Names resolve via ChEMBL search. Look up PubChem names with https://skills.duaer.com/compounds.md.
- \`limit\` — Optional. From 1 to 20. Default 10. Results prefer higher max phase.

## Examples

- \`GET https://api.duaer.com/v1/data/mechanisms?molecule=aspirin&limit=10\` — mechanisms of aspirin.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`ChEMBL\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`mechanismId\`, \`moleculeChemblId\`, \`mechanismOfAction\`, \`actionType\`, \`targetChemblId\` — text.
- \`maxPhase\` — number.
- \`directInteraction\` — true or false.

Reuse \`moleculeChemblId\` / names when searching compounds, activities, or indications. Reuse \`targetChemblId\` when searching activities or targets.

${blank}

## Credits

A successful search uses 1 credit, even when it finds nothing.
If you send a \`molecule\` that ChEMBL does not know, Duaer returns no items and uses 0.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/compounds.md — Duaer compounds
- https://skills.duaer.com/activities.md — Duaer activities
- https://skills.duaer.com/indications.md — Duaer indications
`,

	geo: `---
name: duaer-geo
description: >-
  Duaer GEO. Search NCBI GEO series and datasets.
  One successful search uses 1 Duaer credit.
---

# Duaer GEO

Search NCBI GEO series and datasets. Data comes from GEO.

## When to use

- Find GEO series or datasets for a topic and organism.
- Locate public expression data for reanalysis.

## When not to use

- Curated bulk expression experiments. Use https://skills.duaer.com/expression-atlas.md.

## Call

\`GET https://api.duaer.com/v1/data/geo?words=insulin&organism=Homo%20sapiens&entryType=gse&limit=10\`

${header}

## Parameters

\`words\` is required.

- \`words\` — words in the GEO record, or an accession such as \`GSE10072\`.
- \`organism\` — Optional. Scientific name (\`Homo sapiens\`). Look up names with https://skills.duaer.com/organisms.md.
- \`entryType\` — Optional. \`gse\` (default), \`gds\`, \`gpl\`, \`gsm\`, or \`any\`.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/geo?words=insulin&organism=Homo%20sapiens&entryType=gse&limit=10\` — human GEO series matching insulin.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`GEO\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`accession\`, \`uid\`, \`entryType\`, \`organism\`, \`datasetType\` — text.
- \`sampleCount\` — number.
- \`pubDate\`, \`pubmedId\` — text.

Reuse gene symbols from related studies when searching expression: https://skills.duaer.com/expression.md.

${blank}

${credits}

## Related

- https://skills.duaer.com/expression.md — Duaer expression
- https://skills.duaer.com/organisms.md — Duaer organisms
- https://skills.duaer.com/genes.md — Duaer genes
`,

	assays: `---
name: duaer-assays
description: >-
  Duaer assays. Search ChEMBL assays by words or assay id.
  One successful search uses 1 Duaer credit.
---

# Duaer assays

Search ChEMBL assays by words or assay id. Data comes from ChEMBL.

## When to use

- Find ChEMBL assays for a target and organism.
- Filter assays by type, such as binding or functional.

## When not to use

- PubChem BioAssays for a gene. Use https://skills.duaer.com/pubchem-assay.md.

## Call

\`GET https://api.duaer.com/v1/data/assays?words=EGFR&organism=Homo%20sapiens&assayType=B&limit=10\`

${header}

## Parameters

\`words\` is required.

- \`words\` — words in the assay description, or a ChEMBL assay id (\`CHEMBL5344031\`).
- \`organism\` — Optional. Keep assays whose organism contains this text.
- \`assayType\` — Optional. Letter code (\`B\`/\`F\`/\`A\`/…) or words from the type description.
- \`limit\` — Optional. From 1 to 20. Default 10. Results prefer higher confidence.

## Examples

- \`GET https://api.duaer.com/v1/data/assays?words=EGFR&organism=Homo%20sapiens&assayType=B&limit=10\` — human EGFR binding assays.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`ChEMBL\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`assayChemblId\`, \`description\`, \`assayType\`, \`assayTypeDescription\`, \`organism\`, \`targetChemblId\` — text.
- \`confidenceScore\` — number.
- \`baoLabel\`, \`documentChemblId\` — text.

Reuse \`assayChemblId\` / \`targetChemblId\` when searching activities: https://skills.duaer.com/activities.md.

${blank}

${credits}

## Related

- https://skills.duaer.com/activities.md — Duaer activities
- https://skills.duaer.com/targets.md — Duaer targets
- https://skills.duaer.com/compounds.md — Duaer compounds
- https://skills.duaer.com/patents.md — Duaer patents
`,

	patents: `---
name: duaer-patents
description: >-
  Duaer patents. Search patents from Europe PMC.
  One successful search uses 1 Duaer credit.
---

# Duaer patents

Search patents from Europe PMC. Data comes from Europe PMC.

## When to use

- Find patents on a topic in a range of years.
- Filter patents by country.

## When not to use

- Published papers. Use https://skills.duaer.com/papers.md.

## Call

\`GET https://api.duaer.com/v1/data/patents?words=insulin&yearFrom=2010&yearTo=2020&country=US&limit=10\`

${header}

## Parameters

\`words\` is required.

- \`words\` — words in the patent title or abstract.
- \`yearFrom\` / \`yearTo\` — Optional. Publication year range (YYYY).
- \`country\` — Optional. Country code on the patent id (\`US\`, \`EP\`, \`WO\`, …).
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/patents?words=insulin&yearFrom=2010&yearTo=2020&country=US&limit=10\` — US insulin patents from 2010 to 2020.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`Europe PMC\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`patentId\`, \`country\`, \`typeCode\`, \`pubYear\`, \`applicationNumber\`, \`applicationDate\`, \`assignee\`, \`authors\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/papers.md — Duaer papers
- https://skills.duaer.com/compounds.md — Duaer compounds
- https://skills.duaer.com/assays.md — Duaer assays
`,

	alphafold: `---
name: duaer-alphafold
description: >-
  Duaer AlphaFold. Look up AlphaFold predicted structures by gene or UniProt accession.
  One successful search uses 1 Duaer credit.
---

# Duaer AlphaFold

Look up AlphaFold predicted structures by gene or UniProt accession. Data comes from AlphaFold.

## When to use

- Get the AlphaFold predicted structure for a gene or accession.
- Check model confidence before using a prediction.

## When not to use

- Experimental structures. Use https://skills.duaer.com/structures.md.

## Call

\`GET https://api.duaer.com/v1/data/alphafold?gene=INS&organism=Homo%20sapiens&limit=10\`

${header}

## Parameters

Provide \`gene\` or \`accession\` (or both; accession wins).

- \`gene\` — gene symbol resolved via UniProt (default organism Homo sapiens).
- \`accession\` — Optional. UniProt accession (\`P01308\`). Overrides gene when set.
- \`organism\` — Optional. Used when resolving gene (default \`Homo sapiens\`).
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/alphafold?gene=INS&organism=Homo%20sapiens&limit=10\` — AlphaFold model for human INS.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`AlphaFold\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`accession\`, \`gene\`, \`uniprotId\`, \`description\`, \`organism\`, \`modelEntityId\` — text.
- \`modelVersion\`, \`globalPlddt\` — number.
- \`pdbUrl\`, \`cifUrl\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/structures.md — Duaer structures
- https://skills.duaer.com/proteins.md — Duaer proteins
- https://skills.duaer.com/genes.md — Duaer genes
`,

	'cell-lines': `---
name: duaer-cell-lines
description: >-
  Duaer cell lines. Search cell lines from Cellosaurus.
  One successful search uses 1 Duaer credit.
---

# Duaer cell lines

Search cell lines from Cellosaurus. Data comes from Cellosaurus.

## When to use

- Find a cell line by name, species, or category.
- Check the Cellosaurus id of a cell line.

## When not to use

- Cell line ontology terms. Use https://skills.duaer.com/clo.md.

## Call

\`GET https://api.duaer.com/v1/data/cell-lines?words=HeLa&species=Homo%20sapiens&category=Cancer&limit=10\`

${header}

## Parameters

\`words\` is required.

- \`words\` — cell line name, synonym, or Cellosaurus accession (\`CVCL_0030\`).
- \`species\` — Optional. Keep lines whose species contains this text.
- \`category\` — Optional. Keep lines whose category contains this text.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/cell-lines?words=HeLa&species=Homo%20sapiens&category=Cancer&limit=10\` — human cancer cell lines matching HeLa.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`Cellosaurus\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`accession\`, \`synonyms\`, \`species\`, \`category\`, \`sex\`, \`age\`, \`disease\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/organisms.md — Duaer organisms
- https://skills.duaer.com/diseases.md — Duaer diseases
- https://skills.duaer.com/assays.md — Duaer assays
`,

	'drug-gene': `---
name: duaer-drug-gene
description: >-
  Duaer drug–gene. Search drug–gene interactions from DGIdb.
  One successful search uses 1 Duaer credit.
---

# Duaer drug–gene

Search drug–gene interactions from DGIdb. Data comes from DGIdb.

## When to use

- List drugs that interact with a gene.
- Keep only approved drugs.

## When not to use

- Mechanisms of action by drug. Use https://skills.duaer.com/mechanisms.md.

## Call

\`GET https://api.duaer.com/v1/data/drug-gene?gene=EGFR&approved=yes&limit=10\`

${header}

## Parameters

Provide \`gene\` or \`drug\` (or both).

- \`gene\` — gene symbol (e.g. \`EGFR\`).
- \`drug\` — drug name (e.g. \`imatinib\`).
- \`approved\` — Optional. \`yes\` or \`no\` to keep only approved or unapproved drugs.
- \`limit\` — Optional. From 1 to 20. Default 10. Results prefer higher interaction score.

## Examples

- \`GET https://api.duaer.com/v1/data/drug-gene?gene=EGFR&approved=yes&limit=10\` — approved drugs for EGFR.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`DGIdb\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`gene\`, \`geneConceptId\`, \`drug\`, \`drugConceptId\` — text.
- \`approved\` — true or false.
- \`interactionTypes\` — text.
- \`interactionScore\` — number.
- \`sources\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/genes.md — Duaer genes
- https://skills.duaer.com/compounds.md — Duaer compounds
- https://skills.duaer.com/targets.md — Duaer targets
`,

	reactions: `---
name: duaer-reactions
description: >-
  Duaer reactions. Search biochemical reactions from Rhea.
  One successful search uses 1 Duaer credit.
---

# Duaer reactions

Search biochemical reactions from Rhea. Data comes from Rhea.

## When to use

- Find Rhea reactions by words or EC number.
- Get reaction equations for an enzyme class.

## When not to use

- Model reactions in ModelSEED. Use https://skills.duaer.com/modelseed.md.

## Call

\`GET https://api.duaer.com/v1/data/reactions?words=kinase&ec=2.7.10.1&limit=10\`

${header}

## Parameters

Provide \`words\` or \`ec\` (or both).

- \`words\` — words in the equation, or a Rhea id (\`RHEA:10596\`).
- \`ec\` — Optional. Enzyme Commission number (\`2.7.10.1\` or \`ec:2.7.10.1\`). Alone is enough.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/reactions?words=kinase&ec=2.7.10.1&limit=10\` — kinase reactions with EC 2.7.10.1.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`Rhea\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`rheaId\`, \`equation\`, \`ec\`, \`status\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/pathways.md — Duaer pathways
- https://skills.duaer.com/compounds.md — Duaer compounds
- https://skills.duaer.com/proteins.md — Duaer proteins
- https://skills.duaer.com/metabolites.md — Duaer metabolites
`,

	complexes: `---
name: duaer-complexes
description: >-
  Duaer complexes. Search protein complexes from Complex Portal.
  One successful search uses 1 Duaer credit.
---

# Duaer complexes

Search protein complexes from Complex Portal. Data comes from Complex Portal.

## When to use

- Find curated protein complexes for a protein or process.
- Filter complexes by organism.

## When not to use

- Pairwise interaction partners. Use https://skills.duaer.com/interactions.md.

## Call

\`GET https://api.duaer.com/v1/data/complexes?words=insulin&organism=Homo%20sapiens&limit=10\`

${header}

## Parameters

\`words\` is required.

- \`words\` — words in the complex name or description, or a Complex Portal id (\`CPX-4305\`).
- \`organism\` — Optional. Keep complexes whose organism contains this text, or an NCBI taxonomy id (\`9606\`).
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/complexes?words=insulin&organism=Homo%20sapiens&limit=10\` — human complexes matching insulin.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`Complex Portal\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`complexAc\`, \`organism\`, \`description\` — text.
- \`predicted\` — true or false.
- \`interactors\` — text.
- \`interactorCount\` — number.

${blank}

${credits}

## Related

- https://skills.duaer.com/interactions.md — Duaer interactions
- https://skills.duaer.com/proteins.md — Duaer proteins
- https://skills.duaer.com/organisms.md — Duaer organisms
`,

	metabolites: `---
name: duaer-metabolites
description: >-
  Duaer metabolites. Search metabolites from ChEBI.
  One successful search uses 1 Duaer credit.
---

# Duaer metabolites

Search metabolites from ChEBI. Data comes from ChEBI.

## When to use

- Find a metabolite and its ChEBI id.
- Get synonyms and a description of a small molecule.

## When not to use

- Compound properties from PubChem. Use https://skills.duaer.com/compounds.md.

## Call

\`GET https://api.duaer.com/v1/data/metabolites?words=glucose&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\` (or both; id wins).

- \`words\` — metabolite or small-molecule name.
- \`id\` — Optional. ChEBI id (\`CHEBI:17234\` or \`17234\`). Overrides words when set.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/metabolites?words=glucose&limit=10\` — metabolites matching glucose.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`ChEBI\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`chebiId\`, \`description\`, \`synonyms\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/compounds.md — Duaer compounds
- https://skills.duaer.com/reactions.md — Duaer reactions
- https://skills.duaer.com/pathways.md — Duaer pathways
- https://skills.duaer.com/drug-labels.md — Duaer drug labels
- https://skills.duaer.com/metabolic-dark-matter.md — Duaer: annotate an unknown feature (metabolic dark matter)
`,

	'drug-labels': `---
name: duaer-drug-labels
description: >-
  Duaer drug labels. Search FDA drug labels from OpenFDA.
  One successful search uses 1 Duaer credit.
---

# Duaer drug labels

Search FDA drug labels from OpenFDA. Data comes from OpenFDA.

## When to use

- Read FDA label sections for a drug by brand or generic name.
- Check indications and warnings on a US label.

## When not to use

- Adverse event reports. Use https://skills.duaer.com/adverse-events.md.

## Call

\`GET https://api.duaer.com/v1/data/drug-labels?words=aspirin&limit=10\`

${header}

## Parameters

Provide \`words\`, \`brand\`, or \`generic\` (or combine; brand/generic narrow when set).

- \`words\` — brand, generic, or substance name.
- \`brand\` — Optional. OpenFDA brand name.
- \`generic\` — Optional. OpenFDA generic name.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/drug-labels?words=aspirin&limit=10\` — labels for aspirin.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`OpenFDA\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`setId\`, \`brandNames\`, \`genericNames\`, \`manufacturer\`, \`indications\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/compounds.md — Duaer compounds
- https://skills.duaer.com/indications.md — Duaer indications
- https://skills.duaer.com/drug-gene.md — Duaer drug–gene
- https://skills.duaer.com/metabolites.md — Duaer metabolites
- https://skills.duaer.com/adverse-events.md — Duaer adverse events
`,

	'adverse-events': `---
name: duaer-adverse-events
description: >-
  Duaer adverse events. Search FDA adverse event reports from OpenFDA FAERS.
  One successful search uses 1 Duaer credit.
---

# Duaer adverse events

Search FDA adverse event reports from OpenFDA FAERS. Data comes from OpenFDA.

## When to use

- Review FAERS adverse event reports for a drug.
- Check reported reactions by brand or generic name.

## When not to use

- Drug labels. Use https://skills.duaer.com/drug-labels.md.

## Call

\`GET https://api.duaer.com/v1/data/adverse-events?words=aspirin&limit=10\`

${header}

## Parameters

Provide \`words\`, \`brand\`, or \`generic\` (or combine; brand/generic narrow when set).

- \`words\` — brand, generic, substance, or medicinal product.
- \`brand\` — Optional. OpenFDA brand name.
- \`generic\` — Optional. OpenFDA generic name.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/adverse-events?words=aspirin&limit=10\` — adverse event reports for aspirin.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`OpenFDA\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`reportId\`, \`serious\`, \`receiptDate\`, \`country\`, \`drugs\`, \`reactions\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/drug-labels.md — Duaer drug labels
- https://skills.duaer.com/trials.md — Duaer clinical trials
- https://skills.duaer.com/indications.md — Duaer indications
- https://skills.duaer.com/compounds.md — Duaer compounds
- https://skills.duaer.com/gwas.md — Duaer GWAS
`,

	gwas: `---
name: duaer-gwas
description: >-
  Duaer GWAS. Search GWAS Catalog associations (REST API v2).
  One successful search uses 1 Duaer credit.
---

# Duaer GWAS

Search GWAS Catalog associations (REST API v2). Data comes from GWAS Catalog.

## When to use

- Find GWAS associations for a gene, variant, or trait.
- Check p-values and effect sizes for an rs id.

## When not to use

- Clinical significance of a variant. Use https://skills.duaer.com/clinvar.md.

## Call

\`GET https://api.duaer.com/v1/data/gwas?words=TCF7L2&limit=10\`

${header}

## Parameters

Provide \`words\`, \`gene\`, \`rsId\`, or \`trait\` (or combine).

- \`words\` — gene symbol or rs id (\`rs…\`).
- \`gene\` — Optional. Mapped gene symbol.
- \`rsId\` — Optional. Variant rs id (\`rs7903146\`).
- \`trait\` — Optional. EFO trait text.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/gwas?words=TCF7L2&limit=10\` — GWAS associations for TCF7L2.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`GWAS Catalog\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`associationId\`, \`rsId\`, \`mappedGenes\`, \`efoTraits\`, \`reportedTrait\`, \`pValue\`, \`beta\`, \`accessionId\`, \`pubmedId\`, \`locations\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/variants.md — Duaer variants
- https://skills.duaer.com/genes.md — Duaer genes
- https://skills.duaer.com/diseases.md — Duaer diseases
- https://skills.duaer.com/adverse-events.md — Duaer adverse events
`,

	rxnorm: `---
name: duaer-rxnorm
description: >-
  Duaer RxNorm. Look up drug names from RxNorm (NLM RxNav).
  One successful search uses 1 Duaer credit.
---

# Duaer RxNorm

Look up drug names from RxNorm (NLM RxNav). Data comes from RxNorm.

## When to use

- Normalize a drug name to an RxNorm concept id.
- Look up an RxCUI.

## When not to use

- Drug classes. Use https://skills.duaer.com/rxclass.md.

## Call

\`GET https://api.duaer.com/v1/data/rxnorm?words=aspirin&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\` (or both; id wins).

- \`words\` — drug or ingredient name.
- \`id\` — Optional. RxNorm concept id (RxCUI). Overrides words when set.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/rxnorm?words=aspirin&limit=10\` — RxNorm concepts for aspirin.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`RxNorm\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`rxcui\`, \`tty\`, \`synonym\`, \`score\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/compounds.md — Duaer compounds
- https://skills.duaer.com/drug-labels.md — Duaer drug labels
- https://skills.duaer.com/indications.md — Duaer indications
- https://skills.duaer.com/gwas.md — Duaer GWAS
`,

	mesh: `---
name: duaer-mesh
description: >-
  Duaer MeSH. Look up MeSH subject headings (NLM MeSH).
  One successful search uses 1 Duaer credit.
---

# Duaer MeSH

Look up MeSH subject headings (NLM MeSH). Data comes from MeSH.

## When to use

- Find the MeSH heading and id for a term.
- Get controlled vocabulary for PubMed searches.

## When not to use

- Disease ontology terms. Use https://skills.duaer.com/mondo.md.

## Call

\`GET https://api.duaer.com/v1/data/mesh?words=aspirin&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\` (or both; id wins).

- \`words\` — MeSH descriptor label.
- \`id\` — Optional. MeSH unique id (D001241). Overrides words when set.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/mesh?words=aspirin&limit=10\` — MeSH headings for aspirin.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`MeSH\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`meshId\`, \`resource\`, \`synonyms\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/keywords.md — Duaer keywords
- https://skills.duaer.com/rxnorm.md — Duaer RxNorm
- https://skills.duaer.com/diseases.md — Duaer diseases
- https://skills.duaer.com/trials.md — Duaer clinical trials
`,

	phenotypes: `---
name: duaer-phenotypes
description: >-
  Duaer phenotypes. Look up HPO phenotype terms (EBI OLS).
  One successful search uses 1 Duaer credit.
---

# Duaer phenotypes

Look up HPO phenotype terms (EBI OLS). Data comes from HPO.

## When to use

- Find HPO terms for a clinical phenotype.
- Look up an HPO id.

## When not to use

- Mouse phenotypes. Use https://skills.duaer.com/mp.md.

## Call

\`GET https://api.duaer.com/v1/data/phenotypes?words=diabetes&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\` (or both; id wins).

- \`words\` — HPO phenotype label.
- \`id\` — Optional. HPO id (HP:0000819). Overrides words when set.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/phenotypes?words=diabetes&limit=10\` — HPO terms matching diabetes.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`HPO\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`hpoId\`, \`iri\`, \`synonyms\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/diseases.md — Duaer diseases
- https://skills.duaer.com/mesh.md — Duaer MeSH
- https://skills.duaer.com/trials.md — Duaer clinical trials
- https://skills.duaer.com/adverse-events.md — Duaer adverse events
`,

	crossrefs: `---
name: duaer-crossrefs
description: >-
  Duaer crossrefs. Look up UniChem compound cross-references by InChIKey.
  One successful search uses 1 Duaer credit.
---

# Duaer crossrefs

Look up UniChem compound cross-references by InChIKey. Data comes from UniChem.

## When to use

- Map a compound InChIKey to ids in ChEMBL, ChEBI, DrugBank, and other sources.
- Link a compound across databases.

## When not to use

- Compound properties. Use https://skills.duaer.com/compounds.md.

## Call

\`GET https://api.duaer.com/v1/data/crossrefs?inchikey=BSYNRYMUTXBXSQ-UHFFFAOYSA-N&limit=10\`

${header}

## Parameters

Provide \`inchikey\`.

- \`inchikey\` — compound InChIKey (for example aspirin: BSYNRYMUTXBXSQ-UHFFFAOYSA-N).
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/crossrefs?inchikey=BSYNRYMUTXBXSQ-UHFFFAOYSA-N&limit=10\` — cross-references for aspirin.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`UniChem\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`database\`, \`compoundId\`, \`srcId\`, \`inchikey\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/compounds.md — Duaer compounds
- https://skills.duaer.com/metabolites.md — Duaer metabolites
- https://skills.duaer.com/drug-labels.md — Duaer drug labels
- https://skills.duaer.com/indications.md — Duaer indications
`,

	'drug-recalls': `---
name: duaer-drug-recalls
description: >-
  Duaer drug recalls. Search FDA drug recall enforcement reports from OpenFDA.
  One successful search uses 1 Duaer credit.
---

# Duaer drug recalls

Search FDA drug recall enforcement reports from OpenFDA. Data comes from OpenFDA.

## When to use

- Find FDA drug recall reports by brand or generic name.
- Check recall class and reason.

## When not to use

- Device recalls. Use https://skills.duaer.com/device-recall.md.

## Call

\`GET https://api.duaer.com/v1/data/drug-recalls?words=aspirin&limit=10\`

${header}

## Parameters

Provide \`words\`, \`brand\`, or \`generic\` (or combine brand and generic).

- \`words\` — brand, generic, substance, or product text.
- \`brand\` — Optional. OpenFDA brand name.
- \`generic\` — Optional. OpenFDA generic name.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/drug-recalls?words=aspirin&limit=10\` — recalls mentioning aspirin.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`OpenFDA\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`recallNumber\`, \`status\`, \`classification\`, \`reason\`, \`product\`, \`firm\`, \`reportDate\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/adverse-events.md — Duaer adverse events
- https://skills.duaer.com/drug-labels.md — Duaer drug labels
- https://skills.duaer.com/rxnorm.md — Duaer RxNorm
- https://skills.duaer.com/compounds.md — Duaer compounds
`,

	ligands: `---
name: duaer-ligands
description: >-
  Duaer ligands. Look up PDBe chemical component (CCD) ligands.
  One successful search uses 1 Duaer credit.
---

# Duaer ligands

Look up PDBe chemical component (CCD) ligands. Data comes from PDBe.

## When to use

- Look up a PDB chemical component by code or name.
- Get formula and name of a ligand in a structure.

## When not to use

- Structures that bind a ligand. Use https://skills.duaer.com/structures.md.

## Call

\`GET https://api.duaer.com/v1/data/ligands?words=ATP&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\` as a CCD chemical component id (1–3 characters). Comma-separate several ids.

- \`words\` — CCD id such as ATP or HEM.
- \`id\` — Optional. Same as words; combine for a batch.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/ligands?words=ATP&limit=10\` — PDBe components matching ATP.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`PDBe\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`ccdId\`, \`name\`, \`formula\`, \`weight\`, \`inchiKey\`, \`inchi\`, \`compoundType\`, \`firstObservedIn\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/structures.md — Duaer structures
- https://skills.duaer.com/compounds.md — Duaer compounds
- https://skills.duaer.com/crossrefs.md — Duaer crossrefs
- https://skills.duaer.com/metabolites.md — Duaer metabolites
`,

	chembl: `---
name: duaer-chembl
description: >-
  Duaer ChEMBL. Search bioactive molecules from ChEMBL.
  One successful search uses 1 Duaer credit.
---

# Duaer ChEMBL

Search bioactive molecules from ChEMBL. Data comes from ChEMBL.

## When to use

- Find a bioactive molecule and its ChEMBL id.
- Check development phase and molecule type.

## When not to use

- Measured bioactivities. Use https://skills.duaer.com/activities.md.

## Call

\`GET https://api.duaer.com/v1/data/chembl?words=aspirin&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — molecule name, such as aspirin.
- \`id\` — Optional. ChEMBL id such as CHEMBL25.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/chembl?words=aspirin&limit=10\` — ChEMBL molecules matching aspirin.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`ChEMBL\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`chemblId\`, \`name\`, \`formula\`, \`weight\`, \`maxPhase\`, \`smiles\`, \`inchiKey\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/compounds.md — Duaer compounds
- https://skills.duaer.com/ligands.md — Duaer ligands
- https://skills.duaer.com/crossrefs.md — Duaer crossrefs
- https://skills.duaer.com/metabolites.md — Duaer metabolites
`,

	ensembl: `---
name: duaer-ensembl
description: >-
  Duaer Ensembl. Look up Ensembl genes by symbol or id.
  One successful search uses 1 Duaer credit.
---

# Duaer Ensembl

Look up Ensembl genes by symbol or id. Data comes from Ensembl.

## When to use

- Get the Ensembl gene id, location, and biotype for a symbol.
- Look up a gene in another species.

## When not to use

- Variant effect prediction. Use https://skills.duaer.com/ensembl-vep.md.

## Call

\`GET https://api.duaer.com/v1/data/ensembl?words=TP53&species=homo_sapiens&limit=10\`

${header}

## Parameters

Provide \`words\` (gene symbol) or \`id\` (Ensembl gene id).

- \`words\` — gene symbol, such as TP53.
- \`id\` — Optional. Ensembl id such as ENSG00000141510.
- \`species\` — Optional. Default homo_sapiens. Used with words.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/ensembl?words=TP53&species=homo_sapiens&limit=10\` — Ensembl genes matching human TP53.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`Ensembl\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`ensemblId\`, \`symbol\`, \`biotype\`, \`species\`, \`assembly\`, \`chromosome\`, \`start\`, \`end\`, \`strand\`, \`canonicalTranscript\`, \`description\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/genes.md — Duaer genes
- https://skills.duaer.com/proteins.md — Duaer proteins
- https://skills.duaer.com/variants.md — Duaer variants
- https://skills.duaer.com/orthologs.md — Duaer orthologs
`,

	kegg: `---
name: duaer-kegg
description: >-
  Duaer KEGG. Search KEGG pathways, diseases, or compounds.
  One successful search uses 1 Duaer credit.
---

# Duaer KEGG

Search KEGG pathways, diseases, or compounds. Data comes from KEGG.

## When to use

- Find KEGG pathways, diseases, or compounds by words.
- Look up one KEGG entry by id.

## When not to use

- Reactome pathways. Use https://skills.duaer.com/pathways.md.

## Call

\`GET https://api.duaer.com/v1/data/kegg?words=apoptosis&db=pathway&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search text, such as apoptosis.
- \`id\` — Optional. KEGG id such as map04210, H00409, or C01405.
- \`db\` — Optional. pathway (default), disease, or compound. Used with words.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/kegg?words=apoptosis&db=pathway&limit=10\` — KEGG pathways matching apoptosis.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`KEGG\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`keggId\`, \`name\`, \`database\`, \`description\`, \`keggClass\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/pathways.md — Duaer pathways
- https://skills.duaer.com/diseases.md — Duaer diseases
- https://skills.duaer.com/compounds.md — Duaer compounds
- https://skills.duaer.com/gene-ontology.md — Duaer Gene Ontology
`,

	monarch: `---
name: duaer-monarch
description: >-
  Duaer Monarch. Search Monarch diseases, phenotypes, or genes.
  One successful search uses 1 Duaer credit.
---

# Duaer Monarch

Search Monarch diseases, phenotypes, or genes. Data comes from Monarch.

## When to use

- Find diseases, phenotypes, or genes in the Monarch knowledge graph.
- Get a Monarch id for linking.

## When not to use

- Rare disease records. Use https://skills.duaer.com/orphanet.md.

## Call

\`GET https://api.duaer.com/v1/data/monarch?words=Marfan&category=disease&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search text, such as Marfan.
- \`id\` — Optional. CURIE such as MONDO:0007947, HP:0000819, or HGNC:1100.
- \`category\` — Optional. disease (default), phenotype, or gene. Used with words.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/monarch?words=Marfan&category=disease&limit=10\` — Monarch diseases matching Marfan.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`Monarch\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`monarchId\`, \`name\`, \`category\`, \`description\`, \`taxon\`, \`xrefs\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/diseases.md — Duaer diseases
- https://skills.duaer.com/phenotypes.md — Duaer phenotypes
- https://skills.duaer.com/genes.md — Duaer genes
`,

	hgnc: `---
name: duaer-hgnc
description: >-
  Duaer HGNC. Look up approved gene symbols from HGNC.
  One successful search uses 1 Duaer credit.
---

# Duaer HGNC

Look up approved gene symbols from HGNC. Data comes from HGNC.

## When to use

- Check the approved human gene symbol and HGNC id.
- Resolve a previous or alias symbol.

## When not to use

- Gene ids across species. Use https://skills.duaer.com/genes.md.

## Call

\`GET https://api.duaer.com/v1/data/hgnc?words=BRCA1&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — gene symbol or name words, such as BRCA1.
- \`id\` — Optional. HGNC id such as HGNC:1100 or 1100.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/hgnc?words=BRCA1&limit=10\` — HGNC records for BRCA1.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`HGNC\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`hgncId\`, \`symbol\`, \`name\`, \`locusGroup\`, \`locusType\`, \`location\`, \`ensemblId\`, \`entrezId\`, \`uniprotIds\`, \`status\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/genes.md — Duaer genes
- https://skills.duaer.com/ensembl.md — Duaer Ensembl
- https://skills.duaer.com/proteins.md — Duaer proteins
`,

	pride: `---
name: duaer-pride
description: >-
  Duaer PRIDE. Search proteomics projects in PRIDE.
  One successful search uses 1 Duaer credit.
---

# Duaer PRIDE

Search proteomics projects in PRIDE. Data comes from PRIDE.

## When to use

- Find public proteomics projects in PRIDE.
- Look up a PXD project.

## When not to use

- ProteomeXchange dataset records. Use https://skills.duaer.com/proteomexchange.md.

## Call

\`GET https://api.duaer.com/v1/data/pride?words=insulin&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — project words, such as insulin.
- \`id\` — Optional. PRIDE accession such as PXD000001.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/pride?words=insulin&limit=10\` — PRIDE projects matching insulin.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`PRIDE\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`prideId\`, \`description\`, \`organisms\`, \`keywords\`, \`doi\`, \`publicationDate\`, \`instruments\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/geo.md — Duaer GEO
- https://skills.duaer.com/proteins.md — Duaer proteins
- https://skills.duaer.com/expression.md — Duaer expression
`,

	uberon: `---
name: duaer-uberon
description: >-
  Duaer Uberon. Search anatomy terms from Uberon.
  One successful search uses 1 Duaer credit.
---

# Duaer Uberon

Search anatomy terms from Uberon. Data comes from Uberon.

## When to use

- Find anatomy terms and Uberon ids.
- Standardize tissue names across species.

## When not to use

- Human-only anatomy. Use https://skills.duaer.com/fma.md.

## Call

\`GET https://api.duaer.com/v1/data/uberon?words=liver&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — anatomy words, such as liver.
- \`id\` — Optional. Uberon id such as UBERON:0002107.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/uberon?words=liver&limit=10\` — Uberon terms matching liver.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`Uberon\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`uberonId\`, \`description\`, \`synonyms\`, \`iri\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/locations.md — Duaer locations
- https://skills.duaer.com/atlas.md — Duaer tissue atlas
- https://skills.duaer.com/organisms.md — Duaer organisms
`,

	biostudies: `---
name: duaer-biostudies
description: >-
  Duaer BioStudies. Search multi-omics studies in BioStudies.
  One successful search uses 1 Duaer credit.
---

# Duaer BioStudies

Search multi-omics studies in BioStudies. Data comes from BioStudies.

## When to use

- Find multi-omics studies in BioStudies.
- Look up one study by accession.

## When not to use

- Expression experiments. Use https://skills.duaer.com/expression-atlas.md.

## Call

\`GET https://api.duaer.com/v1/data/biostudies?words=diabetes&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — study words, such as diabetes.
- \`id\` — Optional. BioStudies accession such as S-EPMC7532821.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/biostudies?words=diabetes&limit=10\` — BioStudies studies matching diabetes.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`BioStudies\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`studyId\`, \`studyType\`, \`authors\`, \`releaseDate\`, \`description\`, \`dataSource\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/geo.md — Duaer GEO
- https://skills.duaer.com/pride.md — Duaer PRIDE
- https://skills.duaer.com/expression.md — Duaer expression
`,

	orphanet: `---
name: duaer-orphanet
description: >-
  Duaer Orphanet. Search rare diseases from Orphanet.
  One successful search uses 1 Duaer credit.
---

# Duaer Orphanet

Search rare diseases from Orphanet. Data comes from Orphanet.

## When to use

- Find rare diseases and ORPHA codes.
- Look up one rare disease by code.

## When not to use

- Broad disease ontology. Use https://skills.duaer.com/mondo.md.

## Call

\`GET https://api.duaer.com/v1/data/orphanet?words=Marfan&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — rare disease words, such as Marfan.
- \`id\` — Optional. Orphanet code such as ORPHA:558 or 558.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/orphanet?words=Marfan&limit=10\` — rare diseases matching Marfan.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`Orphanet\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`orphanetId\`, \`description\`, \`synonyms\`, \`iri\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/monarch.md — Duaer Monarch
- https://skills.duaer.com/diseases.md — Duaer diseases
- https://skills.duaer.com/phenotypes.md — Duaer phenotypes
`,

	efo: `---
name: duaer-efo
description: >-
  Duaer EFO. Search experimental factors from EFO.
  One successful search uses 1 Duaer credit.
---

# Duaer EFO

Search experimental factors from EFO. Data comes from EFO.

## When to use

- Find experimental factor terms used by GWAS and Expression Atlas.
- Look up an EFO id.

## When not to use

- Disease ontology. Use https://skills.duaer.com/mondo.md.

## Call

\`GET https://api.duaer.com/v1/data/efo?words=asthma&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — trait or factor words, such as asthma.
- \`id\` — Optional. EFO id such as EFO:0000270 or EFO_0000270.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/efo?words=asthma&limit=10\` — EFO terms matching asthma.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`EFO\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`efoId\`, \`description\`, \`synonyms\`, \`iri\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/gwas.md — Duaer GWAS
- https://skills.duaer.com/phenotypes.md — Duaer phenotypes
- https://skills.duaer.com/mesh.md — Duaer MeSH
`,

	rnacentral: `---
name: duaer-rnacentral
description: >-
  Duaer RNAcentral. Search non-coding RNA in RNAcentral.
  One successful search uses 1 Duaer credit.
---

# Duaer RNAcentral

Search non-coding RNA in RNAcentral. Data comes from RNAcentral.

## When to use

- Find non-coding RNA sequences in RNAcentral.
- Look up an URS id.

## When not to use

- RNA families. Use https://skills.duaer.com/rfam.md.

## Call

\`GET https://api.duaer.com/v1/data/rnacentral?words=microRNA&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — RNA description words, such as microRNA.
- \`id\` — Optional. RNAcentral id such as URS000075C808.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/rnacentral?words=microRNA&limit=10\` — RNAcentral entries matching microRNA.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`RNAcentral\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`rnacentralId\`, \`description\` — text.
- \`length\` — number.
- \`rnaType\`, \`sequence\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/genes.md — Duaer genes
- https://skills.duaer.com/ensembl.md — Duaer Ensembl
- https://skills.duaer.com/hgnc.md — Duaer HGNC
`,

	mondo: `---
name: duaer-mondo
description: >-
  Duaer Mondo. Search diseases from Mondo.
  One successful search uses 1 Duaer credit.
---

# Duaer Mondo

Search diseases from Mondo. Data comes from Mondo.

## When to use

- Find diseases and Mondo ids.
- Map disease names across ontologies.

## When not to use

- Rare disease codes. Use https://skills.duaer.com/orphanet.md.

## Call

\`GET https://api.duaer.com/v1/data/mondo?words=diabetes&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — disease words, such as diabetes.
- \`id\` — Optional. Mondo id such as MONDO:0005148.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/mondo?words=diabetes&limit=10\` — Mondo diseases matching diabetes.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`Mondo\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`mondoId\`, \`description\`, \`synonyms\`, \`iri\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/diseases.md — Duaer diseases
- https://skills.duaer.com/orphanet.md — Duaer Orphanet
- https://skills.duaer.com/monarch.md — Duaer Monarch
`,

	'cell-ontology': `---
name: duaer-cell-ontology
description: >-
  Duaer Cell Ontology. Search cell types from Cell Ontology.
  One successful search uses 1 Duaer credit.
---

# Duaer Cell Ontology

Search cell types from Cell Ontology. Data comes from Cell Ontology.

## When to use

- Find cell type terms and CL ids.
- Standardize cell type names.

## When not to use

- Cell line records. Use https://skills.duaer.com/cell-lines.md.

## Call

\`GET https://api.duaer.com/v1/data/cell-ontology?words=neuron&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — cell type words, such as neuron.
- \`id\` — Optional. Cell Ontology id such as CL:0000540.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/cell-ontology?words=neuron&limit=10\` — cell types matching neuron.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`Cell Ontology\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`clId\`, \`description\`, \`synonyms\`, \`iri\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/cell-lines.md — Duaer cell lines
- https://skills.duaer.com/uberon.md — Duaer Uberon
- https://skills.duaer.com/atlas.md — Duaer tissue atlas
`,

	mp: `---
name: duaer-mp
description: >-
  Duaer MP. Search mammalian phenotypes from MP.
  One successful search uses 1 Duaer credit.
---

# Duaer MP

Search mammalian phenotypes from MP. Data comes from MP.

## When to use

- Find mammalian phenotype terms and MP ids.
- Describe mouse model phenotypes.

## When not to use

- Human phenotypes. Use https://skills.duaer.com/phenotypes.md.

## Call

\`GET https://api.duaer.com/v1/data/mp?words=obesity&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — phenotype words, such as obesity.
- \`id\` — Optional. MP id such as MP:0001261.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/mp?words=obesity&limit=10\` — MP terms matching obesity.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`MP\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`mpId\`, \`description\`, \`synonyms\`, \`iri\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/phenotypes.md — Duaer phenotypes
- https://skills.duaer.com/monarch.md — Duaer Monarch
- https://skills.duaer.com/gwas.md — Duaer GWAS
`,

	mydisease: `---
name: duaer-mydisease
description: >-
  Duaer MyDisease. Search disease annotations in MyDisease.
  One successful search uses 1 Duaer credit.
---

# Duaer MyDisease

Search disease annotations in MyDisease. Data comes from MyDisease.

## When to use

- Get aggregated disease annotations from MyDisease.
- Look up one disease by id.

## When not to use

- Disease ontology terms. Use https://skills.duaer.com/mondo.md.

## Call

\`GET https://api.duaer.com/v1/data/mydisease?words=asthma&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — disease words, such as asthma.
- \`id\` — Optional. Disease id such as MONDO:0004979.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/mydisease?words=asthma&limit=10\` — MyDisease records matching asthma.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`MyDisease\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`diseaseId\`, \`name\`, \`definition\`, \`mondoId\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/mondo.md — Duaer Mondo
- https://skills.duaer.com/diseases.md — Duaer diseases
- https://skills.duaer.com/orphanet.md — Duaer Orphanet
`,

	metabolomics: `---
name: duaer-metabolomics
description: >-
  Duaer Metabolomics. Search metabolomics studies in Metabolomics Workbench.
  One successful search uses 1 Duaer credit.
---

# Duaer Metabolomics

Search metabolomics studies in Metabolomics Workbench. Data comes from Metabolomics Workbench.

## When to use

- Find metabolomics studies in Metabolomics Workbench.
- Look up one study by id.

## When not to use

- MetaboLights studies. Use https://skills.duaer.com/metabolights.md.

## Call

\`GET https://api.duaer.com/v1/data/metabolomics?words=diabetes&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — study title words, such as diabetes.
- \`id\` — Optional. Study id such as ST000001.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/metabolomics?words=diabetes&limit=10\` — studies matching diabetes.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`Metabolomics Workbench\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`studyId\`, \`species\`, \`institute\`, \`analysisType\`, \`sampleCount\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/metabolites.md — Duaer metabolites
- https://skills.duaer.com/biostudies.md — Duaer BioStudies
- https://skills.duaer.com/pride.md — Duaer PRIDE
`,

	intact: `---
name: duaer-intact
description: >-
  Duaer IntAct. Search molecular interactions in IntAct.
  One successful search uses 1 Duaer credit.
---

# Duaer IntAct

Search molecular interactions in IntAct. Data comes from IntAct.

## When to use

- Find curated molecular interactions in IntAct.
- Look up one interaction by id.

## When not to use

- Scored interaction partners. Use https://skills.duaer.com/interactions.md.

## Call

\`GET https://api.duaer.com/v1/data/intact?words=tp53&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — gene or protein words, such as tp53.
- \`id\` — Optional. Interactor id such as P04637.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/intact?words=tp53&limit=10\` — IntAct interactions for tp53.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`IntAct\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`interactionAc\`, \`moleculeA\`, \`moleculeB\`, \`uniqueIdA\`, \`uniqueIdB\`, \`interactionType\`, \`detectionMethod\`, \`publication\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/interactions.md — Duaer interactions
- https://skills.duaer.com/proteins.md — Duaer proteins
- https://skills.duaer.com/complexes.md — Duaer complexes
`,

	biosamples: `---
name: duaer-biosamples
description: >-
  Duaer BioSamples. Search biological samples in BioSamples.
  One successful search uses 1 Duaer credit.
---

# Duaer BioSamples

Search biological samples in BioSamples. Data comes from BioSamples.

## When to use

- Find biological samples in BioSamples.
- Look up one sample by accession.

## When not to use

- Sequencing runs. Use https://skills.duaer.com/ncbi-sra.md.

## Call

\`GET https://api.duaer.com/v1/data/biosamples?words=blood&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — sample words, such as blood.
- \`id\` — Optional. Accession such as SAMN00000000.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/biosamples?words=blood&limit=10\` — samples matching blood.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`BioSamples\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`accession\`, \`name\` — text.
- \`taxId\` — number.
- \`organism\`, \`status\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/geo.md — Duaer GEO
- https://skills.duaer.com/biostudies.md — Duaer BioStudies
- https://skills.duaer.com/cell-lines.md — Duaer cell lines
`,

	encode: `---
name: duaer-encode
description: >-
  Duaer ENCODE. Search functional genomics experiments in ENCODE.
  One successful search uses 1 Duaer credit.
---

# Duaer ENCODE

Search functional genomics experiments in ENCODE. Data comes from ENCODE.

## When to use

- Find ENCODE functional genomics experiments.
- Look up one experiment by accession.

## When not to use

- Regulatory variant scores. Use https://skills.duaer.com/regulomedb.md.

## Call

\`GET https://api.duaer.com/v1/data/encode?words=CTCF&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — experiment words, such as CTCF.
- \`id\` — Optional. Accession such as ENCSR000EJV.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/encode?words=CTCF&limit=10\` — ENCODE experiments for CTCF.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`ENCODE\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`accession\`, \`assay\`, \`status\`, \`description\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/geo.md — Duaer GEO
- https://skills.duaer.com/expression.md — Duaer expression
- https://skills.duaer.com/jaspar.md — Duaer JASPAR
`,

	'pathway-commons': `---
name: duaer-pathway-commons
description: >-
  Duaer Pathway Commons. Search pathways in Pathway Commons.
  One successful search uses 1 Duaer credit.
---

# Duaer Pathway Commons

Search pathways in Pathway Commons. Data comes from Pathway Commons.

## When to use

- Find pathways across many databases in Pathway Commons.
- Look up one pathway by id.

## When not to use

- Reactome only. Use https://skills.duaer.com/pathways.md.

## Call

\`GET https://api.duaer.com/v1/data/pathway-commons?words=TP53&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — pathway words, such as TP53.
- \`id\` — Optional. Query such as TP53.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/pathway-commons?words=TP53&limit=10\` — pathways for TP53.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`Pathway Commons\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`uri\`, \`biopaxClass\`, \`dataSource\`, \`organisms\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/pathways.md — Duaer pathways
- https://skills.duaer.com/interactions.md — Duaer interactions
- https://skills.duaer.com/kegg.md — Duaer KEGG
`,

	alliance: `---
name: duaer-alliance
description: >-
  Duaer Alliance. Search genes in the Alliance of Genome Resources.
  One successful search uses 1 Duaer credit.
---

# Duaer Alliance

Search genes in the Alliance of Genome Resources. Data comes from Alliance.

## When to use

- Find genes across model organisms in the Alliance.
- Look up one gene by Alliance id.

## When not to use

- Human gene ids. Use https://skills.duaer.com/genes.md.

## Call

\`GET https://api.duaer.com/v1/data/alliance?words=BRCA1&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — gene words, such as BRCA1.
- \`id\` — Optional. Gene id such as HGNC:1100.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/alliance?words=BRCA1&limit=10\` — Alliance genes for BRCA1.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`Alliance\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`geneId\`, \`symbol\`, \`name\`, \`species\`, \`soTerm\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/genes.md — Duaer genes
- https://skills.duaer.com/orthologs.md — Duaer orthologs
- https://skills.duaer.com/hgnc.md — Duaer HGNC
`,

	clinvar: `---
name: duaer-clinvar
description: >-
  Duaer ClinVar. Search clinical variants in ClinVar.
  One successful search uses 1 Duaer credit.
---

# Duaer ClinVar

Search clinical variants in ClinVar. Data comes from ClinVar.

## When to use

- Find ClinVar records for a gene or condition.
- Look up one ClinVar record by id.

## When not to use

- Variants by rs id with alleles. Use https://skills.duaer.com/variants.md.

## Call

\`GET https://api.duaer.com/v1/data/clinvar?words=BRCA1&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — gene or variant words, such as BRCA1.
- \`id\` — Optional. ClinVar uid or accession.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/clinvar?words=BRCA1&limit=10\` — ClinVar records for BRCA1.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`ClinVar\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`variationId\`, \`accession\`, \`gene\`, \`clinicalSignificance\`, \`objType\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/variants.md — Duaer variants
- https://skills.duaer.com/dbsnp.md — Duaer dbSNP
- https://skills.duaer.com/gwas.md — Duaer GWAS
`,

	dbsnp: `---
name: duaer-dbsnp
description: >-
  Duaer dbSNP. Search variant ids in dbSNP.
  One successful search uses 1 Duaer credit.
---

# Duaer dbSNP

Search variant ids in dbSNP. Data comes from dbSNP.

## When to use

- Find dbSNP rs ids for a gene or term.
- Look up one rs id.

## When not to use

- Clinical significance. Use https://skills.duaer.com/clinvar.md.

## Call

\`GET https://api.duaer.com/v1/data/dbsnp?words=BRCA1&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`.

- \`words\` — gene words, such as BRCA1.
- \`id\` — Optional. rs id such as rs56116432.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/dbsnp?words=BRCA1&limit=10\` — dbSNP records for BRCA1.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`dbSNP\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`rsid\`, \`chrom\`, \`gene\`, \`clinicalSignificance\`, \`spdi\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/variants.md — Duaer variants
- https://skills.duaer.com/clinvar.md — Duaer ClinVar
- https://skills.duaer.com/gwas.md — Duaer GWAS
`,

	jaspar: `---
name: duaer-jaspar
description: >-
  Duaer JASPAR. Search TF binding motifs in JASPAR.
  One successful search uses 1 Duaer credit.
---

# Duaer JASPAR

Search TF binding motifs in JASPAR. Data comes from JASPAR.

## When to use

- Find transcription factor binding motifs.
- Look up one JASPAR matrix by id.

## When not to use

- Regulatory variant scores. Use https://skills.duaer.com/regulomedb.md.

## Call

\`GET https://api.duaer.com/v1/data/jaspar?words=TP53&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — TF words, such as TP53.
- \`id\` — Optional. Matrix id such as MA0106.1.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/jaspar?words=TP53&limit=10\` — JASPAR motifs for TP53.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`JASPAR\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`matrixId\`, \`name\`, \`collection\`, \`sequenceLogo\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/encode.md — Duaer ENCODE
- https://skills.duaer.com/genes.md — Duaer genes
- https://skills.duaer.com/gene-ontology.md — Duaer Gene Ontology
`,

	cbioportal: `---
name: duaer-cbioportal
description: >-
  Duaer cBioPortal. Search cancer genomics studies in cBioPortal.
  One successful search uses 1 Duaer credit.
---

# Duaer cBioPortal

Search cancer genomics studies in cBioPortal. Data comes from cBioPortal.

## When to use

- Find cancer genomics studies in cBioPortal.
- Look up one study by id.

## When not to use

- NCI GDC projects. Use https://skills.duaer.com/gdc.md.

## Call

\`GET https://api.duaer.com/v1/data/cbioportal?words=brca&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — study words, such as brca.
- \`id\` — Optional. Study id such as brca_tcga.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/cbioportal?words=brca&limit=10\` — cBioPortal studies matching brca.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`cBioPortal\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`studyId\`, \`cancerTypeId\`, \`description\` — text.
- \`sampleCount\` — number.

${blank}

${credits}

## Related

- https://skills.duaer.com/gdc.md — Duaer GDC
- https://skills.duaer.com/gwas.md — Duaer GWAS
- https://skills.duaer.com/variants.md — Duaer variants
`,

	gdc: `---
name: duaer-gdc
description: >-
  Duaer GDC. Search NCI GDC cancer projects.
  One successful search uses 1 Duaer credit.
---

# Duaer GDC

Search NCI GDC cancer projects. Data comes from GDC.

## When to use

- Find NCI GDC cancer projects.
- Look up one project by id.

## When not to use

- cBioPortal studies. Use https://skills.duaer.com/cbioportal.md.

## Call

\`GET https://api.duaer.com/v1/data/gdc?words=breast&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — project words, such as breast.
- \`id\` — Optional. Project id such as TCGA-BRCA.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/gdc?words=breast&limit=10\` — GDC projects matching breast.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`GDC\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`projectId\`, \`primarySite\`, \`diseaseType\`, \`state\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/cbioportal.md — Duaer cBioPortal
- https://skills.duaer.com/gwas.md — Duaer GWAS
- https://skills.duaer.com/trials.md — Duaer clinical trials
`,

	'expression-atlas': `---
name: duaer-expression-atlas
description: >-
  Duaer Expression Atlas. Search bulk expression experiments in Expression Atlas.
  One successful search uses 1 Duaer credit.
---

# Duaer Expression Atlas

Search bulk expression experiments in Expression Atlas. Data comes from Expression Atlas.

## When to use

- Find bulk expression experiments in Expression Atlas.
- Look up one experiment by accession.

## When not to use

- Single-cell experiments. Use https://skills.duaer.com/single-cell-atlas.md.

## Call

\`GET https://api.duaer.com/v1/data/expression-atlas?words=human%20liver&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`.

- \`words\` — experiment words, such as human liver.
- \`id\` — Optional. Accession such as E-MTAB-5214.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/expression-atlas?words=human%20liver&limit=10\` — experiments matching human liver.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`Expression Atlas\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`accession\`, \`species\`, \`experimentType\` — text.
- \`assayCount\` — number.

${blank}

${credits}

## Related

- https://skills.duaer.com/expression.md — Duaer expression
- https://skills.duaer.com/geo.md — Duaer GEO
- https://skills.duaer.com/single-cell-atlas.md — Duaer Single Cell Atlas
`,

	'single-cell-atlas': `---
name: duaer-single-cell-atlas
description: >-
  Duaer Single Cell Atlas. Search single-cell experiments in Single Cell Expression Atlas.
  One successful search uses 1 Duaer credit.
---

# Duaer Single Cell Atlas

Search single-cell experiments in Single Cell Expression Atlas. Data comes from Single Cell Expression Atlas.

## When to use

- Find single-cell experiments in Single Cell Expression Atlas.
- Look up one experiment by accession.

## When not to use

- Bulk experiments. Use https://skills.duaer.com/expression-atlas.md.

## Call

\`GET https://api.duaer.com/v1/data/single-cell-atlas?words=lung&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`.

- \`words\` — experiment words, such as lung.
- \`id\` — Optional. Accession such as E-HCAD-14.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/single-cell-atlas?words=lung&limit=10\` — single-cell experiments matching lung.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`Single Cell Expression Atlas\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`accession\`, \`species\`, \`experimentType\` — text.
- \`assayCount\` — number.

${blank}

${credits}

## Related

- https://skills.duaer.com/expression-atlas.md — Duaer Expression Atlas
- https://skills.duaer.com/expression.md — Duaer expression
- https://skills.duaer.com/cell-ontology.md — Duaer Cell Ontology
`,

	ndc: `---
name: duaer-ndc
description: >-
  Duaer NDC. Search drug NDC records in OpenFDA.
  One successful search uses 1 Duaer credit.
---

# Duaer NDC

Search drug NDC records in OpenFDA. Data comes from OpenFDA.

## When to use

- Find drug products by NDC or name.
- Check labeler and dosage form.

## When not to use

- Drug labels. Use https://skills.duaer.com/drug-labels.md.

## Call

\`GET https://api.duaer.com/v1/data/ndc?words=tylenol&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — brand words, such as tylenol.
- \`id\` — Optional. Product NDC such as 50580-176.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/ndc?words=tylenol&limit=10\` — NDC records for tylenol.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`OpenFDA\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`productNdc\`, \`brandName\`, \`genericName\`, \`labeler\`, \`dosageForm\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/rxnorm.md — Duaer RxNorm
- https://skills.duaer.com/drug-labels.md — Duaer drug labels
- https://skills.duaer.com/adverse-events.md — Duaer adverse events
`,

	'device-events': `---
name: duaer-device-events
description: >-
  Duaer Device events. Search device adverse events in OpenFDA.
  One successful search uses 1 Duaer credit.
---

# Duaer Device events

Search device adverse events in OpenFDA. Data comes from OpenFDA.

## When to use

- Find FDA device adverse event reports.
- Look up one report by id.

## When not to use

- Device recalls. Use https://skills.duaer.com/device-recall.md.

## Call

\`GET https://api.duaer.com/v1/data/device-events?words=insulin&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — device words, such as insulin.
- \`id\` — Optional. Report number.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/device-events?words=insulin&limit=10\` — device events mentioning insulin.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`OpenFDA\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`reportId\`, \`brandName\`, \`genericName\`, \`eventType\`, \`dateReceived\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/adverse-events.md — Duaer adverse events
- https://skills.duaer.com/ndc.md — Duaer NDC
- https://skills.duaer.com/drug-recalls.md — Duaer drug recalls
`,

	'sequence-ontology': `---
name: duaer-sequence-ontology
description: >-
  Duaer Sequence Ontology. Search sequence feature terms from Sequence Ontology.
  One successful search uses 1 Duaer credit.
---

# Duaer Sequence Ontology

Search sequence feature terms from Sequence Ontology. Data comes from Sequence Ontology.

## When to use

- Find sequence feature terms and SO ids.
- Standardize variant and feature types.

## When not to use

- Gene Ontology. Use https://skills.duaer.com/gene-ontology.md.

## Call

\`GET https://api.duaer.com/v1/data/sequence-ontology?words=exon&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — feature words, such as exon.
- \`id\` — Optional. SO id such as SO:0000147.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/sequence-ontology?words=exon&limit=10\` — SO terms matching exon.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`Sequence Ontology\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`soId\`, \`description\`, \`synonyms\`, \`iri\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/gene-ontology.md — Duaer Gene Ontology
- https://skills.duaer.com/ensembl.md — Duaer Ensembl
- https://skills.duaer.com/rnacentral.md — Duaer RNAcentral
`,

	doid: `---
name: duaer-doid
description: >-
  Duaer DOID. Search disease terms from DOID.
  One successful search uses 1 Duaer credit.
---

# Duaer DOID

Search disease terms from DOID. Data comes from DOID.

## When to use

- Find Disease Ontology terms and DOID ids.
- Look up one DOID.

## When not to use

- Mondo diseases. Use https://skills.duaer.com/mondo.md.

## Call

\`GET https://api.duaer.com/v1/data/doid?words=asthma&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — disease words, such as asthma.
- \`id\` — Optional. DOID such as DOID:2841.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/doid?words=asthma&limit=10\` — DOID terms matching asthma.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`DOID\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`doidId\`, \`description\`, \`synonyms\`, \`iri\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/mondo.md — Duaer Mondo
- https://skills.duaer.com/diseases.md — Duaer diseases
- https://skills.duaer.com/orphanet.md — Duaer Orphanet
`,

	'ncbi-taxon': `---
name: duaer-ncbi-taxon
description: >-
  Duaer NCBI Taxonomy. Search taxa from NCBI Taxonomy ontology.
  One successful search uses 1 Duaer credit.
---

# Duaer NCBI Taxonomy

Search taxa from NCBI Taxonomy ontology. Data comes from NCBI Taxonomy.

## When to use

- Find taxa and NCBI taxonomy ids.
- Look up one taxon by id.

## When not to use

- Species occurrence records. Use https://skills.duaer.com/gbif.md.

## Call

\`GET https://api.duaer.com/v1/data/ncbi-taxon?words=Homo%20sapiens&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — taxon words, such as Homo sapiens.
- \`id\` — Optional. NCBITaxon id such as NCBITaxon:9606.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/ncbi-taxon?words=Homo%20sapiens&limit=10\` — taxa matching Homo sapiens.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`NCBI Taxonomy\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`taxonId\`, \`description\`, \`synonyms\`, \`iri\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/organisms.md — Duaer organisms
- https://skills.duaer.com/alliance.md — Duaer Alliance
- https://skills.duaer.com/uberon.md — Duaer Uberon
`,

	glygen: `---
name: duaer-glygen
description: >-
  Duaer GlyGen. Look up glycans in GlyGen by GlyTouCan id.
  One successful search uses 1 Duaer credit.
---

# Duaer GlyGen

Look up glycans in GlyGen by GlyTouCan id. Data comes from GlyGen.

## When to use

- Look up a glycan by GlyTouCan id.
- Check glycan mass and composition.

## When not to use

- Small molecule metabolites. Use https://skills.duaer.com/metabolites.md.

## Call

\`GET https://api.duaer.com/v1/data/glygen?id=G00054MO&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — GlyTouCan accession, such as G00054MO.
- \`id\` — Optional. GlyTouCan accession such as G00054MO.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/glygen?id=G00054MO&limit=10\` — glycan G00054MO.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`GlyGen\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`glytoucanAc\` — text.
- \`mass\` — number.
- \`iupac\` — text.
- \`monosaccharides\` — number.

${blank}

${credits}

## Related

- https://skills.duaer.com/metabolites.md — Duaer metabolites
- https://skills.duaer.com/compounds.md — Duaer compounds
- https://skills.duaer.com/reactions.md — Duaer reactions
`,

	chebi: `---
name: duaer-chebi
description: >-
  Duaer ChEBI. Search chemical entities from ChEBI.
  One successful search uses 1 Duaer credit.
---

# Duaer ChEBI

Search chemical entities from ChEBI. Data comes from ChEBI.

## When to use

- Find chemical entities and ChEBI ids.
- Look up one ChEBI id.

## When not to use

- PubChem properties. Use https://skills.duaer.com/compounds.md.

## Call

\`GET https://api.duaer.com/v1/data/chebi?words=aspirin&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as aspirin.
- \`id\` — Optional. Id such as CHEBI:15365.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/chebi?words=aspirin&limit=10\` — ChEBI entities matching aspirin.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`ChEBI\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`chebiId\`, \`description\`, \`synonyms\`, \`iri\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/compounds.md — Duaer compounds
- https://skills.duaer.com/chembl.md — Duaer ChEMBL
- https://skills.duaer.com/metabolites.md — Duaer metabolites
`,

	ncit: `---
name: duaer-ncit
description: >-
  Duaer NCIt. Search clinical terms from NCI Thesaurus.
  One successful search uses 1 Duaer credit.
---

# Duaer NCIt

Search clinical terms from NCI Thesaurus. Data comes from NCIt.

## When to use

- Find NCI Thesaurus terms for cancer and clinical concepts.
- Look up one NCIt code.

## When not to use

- Tumor types. Use https://skills.duaer.com/oncotree.md.

## Call

\`GET https://api.duaer.com/v1/data/ncit?words=melanoma&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as melanoma.
- \`id\` — Optional. Id such as NCIT:C3224.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/ncit?words=melanoma&limit=10\` — NCIt terms matching melanoma.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`NCIt\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`ncitId\`, \`description\`, \`synonyms\`, \`iri\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/mondo.md — Duaer Mondo
- https://skills.duaer.com/doid.md — Duaer DOID
- https://skills.duaer.com/orphanet.md — Duaer Orphanet
`,

	pfam: `---
name: duaer-pfam
description: >-
  Duaer Pfam. Search Pfam protein families.
  One successful search uses 1 Duaer credit.
---

# Duaer Pfam

Search Pfam protein families. Data comes from Pfam.

## When to use

- Find Pfam protein families.
- Look up one Pfam accession.

## When not to use

- All InterPro entries. Use https://skills.duaer.com/interpro.md.

## Call

\`GET https://api.duaer.com/v1/data/pfam?words=kinase&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as kinase.
- \`id\` — Optional. Id such as PF00069.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/pfam?words=kinase&limit=10\` — Pfam families matching kinase.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`Pfam\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`pfamId\`, \`type\`, \`integrated\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/domains.md — Duaer domains
- https://skills.duaer.com/proteins.md — Duaer proteins
- https://skills.duaer.com/gene-ontology.md — Duaer Gene Ontology
`,

	emdb: `---
name: duaer-emdb
description: >-
  Duaer EMDB. Search cryo-EM structures in EMDB.
  One successful search uses 1 Duaer credit.
---

# Duaer EMDB

Search cryo-EM structures in EMDB. Data comes from EMDB.

## When to use

- Find cryo-EM maps in EMDB.
- Look up one EMD entry.

## When not to use

- Raw cryo-EM images. Use https://skills.duaer.com/empiar.md.

## Call

\`GET https://api.duaer.com/v1/data/emdb?words=insulin&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as insulin.
- \`id\` — Optional. Id such as EMD-74236.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/emdb?words=insulin&limit=10\` — EMDB entries matching insulin.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`EMDB\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`emdbId\`, \`status\`, \`method\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/structures.md — Duaer structures
- https://skills.duaer.com/alphafold.md — Duaer AlphaFold
- https://skills.duaer.com/pride.md — Duaer PRIDE
`,

	uniparc: `---
name: duaer-uniparc
description: >-
  Duaer UniParc. Search UniParc protein sequence archive.
  One successful search uses 1 Duaer credit.
---

# Duaer UniParc

Search UniParc protein sequence archive. Data comes from UniParc.

## When to use

- Find archived protein sequences in UniParc.
- Look up one UPI id.

## When not to use

- Reviewed protein records. Use https://skills.duaer.com/proteins.md.

## Call

\`GET https://api.duaer.com/v1/data/uniparc?words=insulin&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as insulin.
- \`id\` — Optional. Id such as UPI000C3A63FD.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/uniparc?words=insulin&limit=10\` — UniParc entries matching insulin.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`UniParc\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`upi\` — text.
- \`length\` — number.
- \`uniProtKBAccessions\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/proteins.md — Duaer proteins
- https://skills.duaer.com/pfam.md — Duaer Pfam
- https://skills.duaer.com/domains.md — Duaer domains
`,

	'europe-pmc': `---
name: duaer-europe-pmc
description: >-
  Duaer Europe PMC. Search life-science literature in Europe PMC.
  One successful search uses 1 Duaer credit.
---

# Duaer Europe PMC

Search life-science literature in Europe PMC. Data comes from Europe PMC.

## When to use

- Find life-science literature in Europe PMC.
- Look up one article by id.

## When not to use

- OpenAlex papers with citations. Use https://skills.duaer.com/papers.md.

## Call

\`GET https://api.duaer.com/v1/data/europe-pmc?words=BRCA1&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as BRCA1.
- \`id\` — Optional. Id such as 42757486.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/europe-pmc?words=BRCA1&limit=10\` — Europe PMC articles on BRCA1.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`Europe PMC\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`pmid\`, \`doi\`, \`year\`, \`journal\`, \`authors\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/papers.md — Duaer papers
- https://skills.duaer.com/preprints.md — Duaer preprints
- https://skills.duaer.com/crossref.md — Duaer Crossref
`,

	orcid: `---
name: duaer-orcid
description: >-
  Duaer ORCID. Search researchers in ORCID.
  One successful search uses 1 Duaer credit.
---

# Duaer ORCID

Search researchers in ORCID. Data comes from ORCID.

## When to use

- Find researchers in ORCID.
- Look up one ORCID iD.

## When not to use

- OpenAlex author records. Use https://skills.duaer.com/openalex-authors.md.

## Call

\`GET https://api.duaer.com/v1/data/orcid?words=family-name%3ASmith&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as family-name:Smith.
- \`id\` — Optional. Id such as 0000-0003-1660-3511.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/orcid?words=family-name%3ASmith&limit=10\` — ORCID records with family name Smith.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`ORCID\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`orcidId\`, \`givenNames\`, \`familyNames\`, \`institutions\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/papers.md — Duaer papers
- https://skills.duaer.com/europe-pmc.md — Duaer Europe PMC
- https://skills.duaer.com/crossref.md — Duaer Crossref
`,

	'protein-ontology': `---
name: duaer-protein-ontology
description: >-
  Duaer Protein Ontology. Search protein entities from Protein Ontology.
  One successful search uses 1 Duaer credit.
---

# Duaer Protein Ontology

Search protein entities from Protein Ontology. Data comes from Protein Ontology.

## When to use

- Find Protein Ontology entities and PR ids.
- Look up one PR id.

## When not to use

- UniProt proteins. Use https://skills.duaer.com/proteins.md.

## Call

\`GET https://api.duaer.com/v1/data/protein-ontology?words=insulin&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as insulin.
- \`id\` — Optional. Id such as PR:000003276.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/protein-ontology?words=insulin&limit=10\` — PR terms matching insulin.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`Protein Ontology\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`prId\`, \`description\`, \`synonyms\`, \`iri\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/proteins.md — Duaer proteins
- https://skills.duaer.com/chebi.md — Duaer ChEBI
- https://skills.duaer.com/gene-ontology.md — Duaer Gene Ontology
`,

	obi: `---
name: duaer-obi
description: >-
  Duaer OBI. Search assay terms from Ontology for Biomedical Investigations.
  One successful search uses 1 Duaer credit.
---

# Duaer OBI

Search assay terms from Ontology for Biomedical Investigations. Data comes from OBI.

## When to use

- Find assay and investigation terms in OBI.
- Look up one OBI id.

## When not to use

- BioAssay Ontology terms. Use https://skills.duaer.com/bao.md.

## Call

\`GET https://api.duaer.com/v1/data/obi?words=assay&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as assay.
- \`id\` — Optional. Id such as OBI:0000070.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/obi?words=assay&limit=10\` — OBI terms matching assay.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`OBI\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`obiId\`, \`description\`, \`synonyms\`, \`iri\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/assays.md — Duaer assays
- https://skills.duaer.com/expression-atlas.md — Duaer Expression Atlas
- https://skills.duaer.com/geo.md — Duaer GEO
`,

	mpath: `---
name: duaer-mpath
description: >-
  Duaer MPATH. Search pathology terms from MPATH.
  One successful search uses 1 Duaer credit.
---

# Duaer MPATH

Search pathology terms from MPATH. Data comes from MPATH.

## When to use

- Find mouse pathology terms in MPATH.
- Look up one MPATH id.

## When not to use

- Mammalian phenotypes. Use https://skills.duaer.com/mp.md.

## Call

\`GET https://api.duaer.com/v1/data/mpath?words=inflammation&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as inflammation.
- \`id\` — Optional. Id such as MPATH:212.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/mpath?words=inflammation&limit=10\` — MPATH terms matching inflammation.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`MPATH\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`mpathId\`, \`description\`, \`synonyms\`, \`iri\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/ncit.md — Duaer NCIt
- https://skills.duaer.com/mondo.md — Duaer Mondo
- https://skills.duaer.com/doid.md — Duaer DOID
`,

	crossref: `---
name: duaer-crossref
description: >-
  Duaer Crossref. Search scholarly works in Crossref.
  One successful search uses 1 Duaer credit.
---

# Duaer Crossref

Search scholarly works in Crossref. Data comes from Crossref.

## When to use

- Find scholarly works and DOI metadata in Crossref.
- Look up one DOI.

## When not to use

- OpenAlex papers. Use https://skills.duaer.com/papers.md.

## Call

\`GET https://api.duaer.com/v1/data/crossref?words=BRCA1&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as BRCA1.
- \`id\` — Optional. Id such as 10.1038/nature12373.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/crossref?words=BRCA1&limit=10\` — Crossref works matching BRCA1.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`Crossref\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`doi\`, \`type\`, \`year\`, \`container\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/papers.md — Duaer papers
- https://skills.duaer.com/europe-pmc.md — Duaer Europe PMC
- https://skills.duaer.com/preprints.md — Duaer preprints
`,

	mychem: `---
name: duaer-mychem
description: >-
  Duaer MyChem. Search aggregated compound annotations in MyChem.
  One successful search uses 1 Duaer credit.
---

# Duaer MyChem

Search aggregated compound annotations in MyChem. Data comes from MyChem.

## When to use

- Get aggregated compound annotations from MyChem.
- Look up one compound by id.

## When not to use

- PubChem properties. Use https://skills.duaer.com/compounds.md.

## Call

\`GET https://api.duaer.com/v1/data/mychem?words=aspirin&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as aspirin.
- \`id\` — Optional. Id such as CHEBI:15365.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/mychem?words=aspirin&limit=10\` — MyChem records for aspirin.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`MyChem\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`inchikey\`, \`chebiId\`, \`chemblId\`, \`pubchemCid\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/compounds.md — Duaer compounds
- https://skills.duaer.com/chebi.md — Duaer ChEBI
- https://skills.duaer.com/chembl.md — Duaer ChEMBL
`,

	'drugs-fda': `---
name: duaer-drugs-fda
description: >-
  Duaer Drugs@FDA. Search FDA-approved drug applications.
  One successful search uses 1 Duaer credit.
---

# Duaer Drugs@FDA

Search FDA-approved drug applications. Data comes from Drugs@FDA.

## When to use

- Find FDA drug applications and approvals.
- Look up one application number.

## When not to use

- Drug labels. Use https://skills.duaer.com/drug-labels.md.

## Call

\`GET https://api.duaer.com/v1/data/drugs-fda?words=aspirin&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as aspirin.
- \`id\` — Optional. Id such as ANDA075141.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/drugs-fda?words=aspirin&limit=10\` — Drugs@FDA records for aspirin.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`Drugs@FDA\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`applicationNumber\`, \`sponsor\`, \`brandNames\`, \`genericNames\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/ndc.md — Duaer NDC
- https://skills.duaer.com/drug-labels.md — Duaer drug labels
- https://skills.duaer.com/drug-recalls.md — Duaer drug recalls
`,

	uniref: `---
name: duaer-uniref
description: >-
  Duaer UniRef. Search UniRef protein sequence clusters.
  One successful search uses 1 Duaer credit.
---

# Duaer UniRef

Search UniRef protein sequence clusters. Data comes from UniRef.

## When to use

- Find UniRef sequence clusters.
- Look up one UniRef id.

## When not to use

- Single protein records. Use https://skills.duaer.com/proteins.md.

## Call

\`GET https://api.duaer.com/v1/data/uniref?words=insulin&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as insulin.
- \`id\` — Optional. Id such as UniRef90_P01308.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/uniref?words=insulin&limit=10\` — UniRef clusters matching insulin.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`UniRef\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`unirefId\`, \`entryType\` — text.
- \`memberCount\` — number.
- \`organism\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/proteins.md — Duaer proteins
- https://skills.duaer.com/uniparc.md — Duaer UniParc
- https://skills.duaer.com/proteomes.md — Duaer Proteomes
`,

	unirule: `---
name: duaer-unirule
description: >-
  Duaer UniRule. Search UniRule annotation rules.
  One successful search uses 1 Duaer credit.
---

# Duaer UniRule

Search UniRule annotation rules. Data comes from UniRule.

## When to use

- Find UniRule annotation rules.
- Look up one rule id.

## When not to use

- Protein records. Use https://skills.duaer.com/proteins.md.

## Call

\`GET https://api.duaer.com/v1/data/unirule?words=kinase&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as kinase.
- \`id\` — Optional. Id such as UR000000001.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/unirule?words=kinase&limit=10\` — UniRule rules matching kinase.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`UniRule\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`uniruleId\`, \`entryType\` — text.
- \`memberCount\` — number.
- \`organism\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/proteins.md — Duaer proteins
- https://skills.duaer.com/uniref.md — Duaer UniRef
`,

	proteomes: `---
name: duaer-proteomes
description: >-
  Duaer Proteomes. Search UniProt proteomes.
  One successful search uses 1 Duaer credit.
---

# Duaer Proteomes

Search UniProt proteomes. Data comes from Proteomes.

## When to use

- Find UniProt proteomes for an organism.
- Look up one proteome id.

## When not to use

- Genome assemblies. Use https://skills.duaer.com/ncbi-assembly.md.

## Call

\`GET https://api.duaer.com/v1/data/proteomes?words=Homo%20sapiens&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as Homo sapiens.
- \`id\` — Optional. Id such as UP000005640.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/proteomes?words=Homo%20sapiens&limit=10\` — proteomes for Homo sapiens.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`Proteomes\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`proteomeId\`, \`entryType\` — text.
- \`memberCount\` — number.
- \`organism\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/proteins.md — Duaer proteins
- https://skills.duaer.com/organisms.md — Duaer organisms
`,

	ena: `---
name: duaer-ena
description: >-
  Duaer ENA. Search nucleotide sequences in ENA.
  One successful search uses 1 Duaer credit.
---

# Duaer ENA

Search nucleotide sequences in ENA. Data comes from ENA.

## When to use

- Find nucleotide sequence records in ENA.
- Look up one ENA accession.

## When not to use

- Sequencing runs in SRA. Use https://skills.duaer.com/ncbi-sra.md.

## Call

\`GET https://api.duaer.com/v1/data/ena?words=insulin&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as insulin.
- \`id\` — Optional. Id such as DM015610.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/ena?words=insulin&limit=10\` — ENA records matching insulin.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`ENA\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`accession\`, \`description\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/proteins.md — Duaer proteins
- https://skills.duaer.com/genes.md — Duaer genes
`,

	empiar: `---
name: duaer-empiar
description: >-
  Duaer EMPIAR. Search cryo-EM public image archive entries in EMPIAR.
  One successful search uses 1 Duaer credit.
---

# Duaer EMPIAR

Search cryo-EM public image archive entries in EMPIAR. Data comes from EMPIAR.

## When to use

- Find raw cryo-EM image datasets in EMPIAR.
- Look up one EMPIAR id.

## When not to use

- Cryo-EM maps. Use https://skills.duaer.com/emdb.md.

## Call

\`GET https://api.duaer.com/v1/data/empiar?words=ribosome&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as ribosome.
- \`id\` — Optional. Id such as 10005.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/empiar?words=ribosome&limit=10\` — EMPIAR entries matching ribosome.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`EMPIAR\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`empiarId\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/structures.md — Duaer structures
- https://skills.duaer.com/emdb.md — Duaer EMDB
`,

	bmrb: `---
name: duaer-bmrb
description: >-
  Duaer BMRB. Search NMR entries in BMRB.
  One successful search uses 1 Duaer credit.
---

# Duaer BMRB

Search NMR entries in BMRB. Data comes from BMRB.

## When to use

- Find NMR entries in BMRB.
- Look up one BMRB id.

## When not to use

- Experimental structures. Use https://skills.duaer.com/structures.md.

## Call

\`GET https://api.duaer.com/v1/data/bmrb?words=ubiquitin&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as ubiquitin.
- \`id\` — Optional. Id such as 15000.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/bmrb?words=ubiquitin&limit=10\` — BMRB entries matching ubiquitin.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`BMRB\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`bmrbId\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/structures.md — Duaer structures
- https://skills.duaer.com/proteins.md — Duaer proteins
`,

	'swiss-model': `---
name: duaer-swiss-model
description: >-
  Duaer Swiss-Model. Look up Swiss-Model structures by UniProt accession.
  One successful search uses 1 Duaer credit.
---

# Duaer Swiss-Model

Look up Swiss-Model structures by UniProt accession. Data comes from Swiss-Model.

## When to use

- Get Swiss-Model homology models for a UniProt accession.
- List available models and their methods.

## When not to use

- AlphaFold models. Use https://skills.duaer.com/alphafold.md.

## Call

\`GET https://api.duaer.com/v1/data/swiss-model?words=P04637&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as P04637.
- \`id\` — Optional. Id such as P04637.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/swiss-model?words=P04637&limit=10\` — Swiss-Model structures for P04637.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`Swiss-Model\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`uniprotAcc\`, \`modelId\`, \`method\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/structures.md — Duaer structures
- https://skills.duaer.com/alphafold.md — Duaer AlphaFold
- https://skills.duaer.com/proteins.md — Duaer proteins
`,

	'lipid-maps': `---
name: duaer-lipid-maps
description: >-
  Duaer Lipid Maps. Search lipid structures in LIPID MAPS.
  One successful search uses 1 Duaer credit.
---

# Duaer Lipid Maps

Search lipid structures in LIPID MAPS. Data comes from Lipid Maps.

## When to use

- Find lipid structures and LIPID MAPS ids.
- Look up one LM id.

## When not to use

- Other metabolites. Use https://skills.duaer.com/metabolites.md.

## Call

\`GET https://api.duaer.com/v1/data/lipid-maps?words=PA&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as PA.
- \`id\` — Optional. Id such as LMFA01010001.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/lipid-maps?words=PA&limit=10\` — lipids matching PA.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`Lipid Maps\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`lmId\`, \`name\`, \`sysName\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/compounds.md — Duaer compounds
- https://skills.duaer.com/metabolites.md — Duaer metabolites
- https://skills.duaer.com/chebi.md — Duaer ChEBI
`,

	mgnify: `---
name: duaer-mgnify
description: >-
  Duaer MGnify. Search microbiome studies in MGnify.
  One successful search uses 1 Duaer credit.
---

# Duaer MGnify

Search microbiome studies in MGnify. Data comes from MGnify.

## When to use

- Find microbiome studies in MGnify.
- Look up one study id.

## When not to use

- MG-RAST projects. Use https://skills.duaer.com/mgrast.md.

## Call

\`GET https://api.duaer.com/v1/data/mgnify?words=soil&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as soil.
- \`id\` — Optional. Id such as MGYS00005798.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/mgnify?words=soil&limit=10\` — MGnify studies matching soil.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`MGnify\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`studyId\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/geo.md — Duaer GEO
- https://skills.duaer.com/biosamples.md — Duaer BioSamples
`,

	'bv-brc': `---
name: duaer-bv-brc
description: >-
  Duaer BV-BRC. Search pathogen genomes in BV-BRC.
  One successful search uses 1 Duaer credit.
---

# Duaer BV-BRC

Search pathogen genomes in BV-BRC. Data comes from BV-BRC.

## When to use

- Find pathogen genomes in BV-BRC.
- Look up one genome id.

## When not to use

- Genome assemblies in NCBI. Use https://skills.duaer.com/ncbi-assembly.md.

## Call

\`GET https://api.duaer.com/v1/data/bv-brc?words=tuberculosis&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as tuberculosis.
- \`id\` — Optional. Id such as 83332.12.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/bv-brc?words=tuberculosis&limit=10\` — BV-BRC genomes matching tuberculosis.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`BV-BRC\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`genomeId\`, \`genomeName\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/organisms.md — Duaer organisms
- https://skills.duaer.com/genes.md — Duaer genes
`,

	clinpgx: `---
name: duaer-clinpgx
description: >-
  Duaer ClinPGx. Search pharmacogenomics genes in ClinPGx.
  One successful search uses 1 Duaer credit.
---

# Duaer ClinPGx

Search pharmacogenomics genes in ClinPGx. Data comes from ClinPGx.

## When to use

- Find pharmacogenomics genes in ClinPGx.
- Look up one ClinPGx id.

## When not to use

- CPIC guidelines. Use https://skills.duaer.com/cpic.md.

## Call

\`GET https://api.duaer.com/v1/data/clinpgx?words=CYP2D6&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as CYP2D6.
- \`id\` — Optional. Id such as CYP2D6.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/clinpgx?words=CYP2D6&limit=10\` — ClinPGx records for CYP2D6.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`ClinPGx\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`symbol\`, \`name\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/drug-gene.md — Duaer drug–gene
- https://skills.duaer.com/genes.md — Duaer genes
`,

	'daily-med': `---
name: duaer-daily-med
description: >-
  Duaer DailyMed. Search drug labeling in DailyMed.
  One successful search uses 1 Duaer credit.
---

# Duaer DailyMed

Search drug labeling in DailyMed. Data comes from DailyMed.

## When to use

- Find drug labeling in DailyMed.
- Look up one set id.

## When not to use

- OpenFDA label sections. Use https://skills.duaer.com/drug-labels.md.

## Call

\`GET https://api.duaer.com/v1/data/daily-med?words=aspirin&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as aspirin.
- \`id\` — Optional. Id such as d49f3e4f-7e0e-467d-a0c4-c6b109af245e.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/daily-med?words=aspirin&limit=10\` — DailyMed labels for aspirin.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`DailyMed\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`setId\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/ndc.md — Duaer NDC
- https://skills.duaer.com/drug-labels.md — Duaer drug labels
- https://skills.duaer.com/drugs-fda.md — Duaer Drugs@FDA
`,

	rxclass: `---
name: duaer-rxclass
description: >-
  Duaer RxClass. Search drug classes in RxClass.
  One successful search uses 1 Duaer credit.
---

# Duaer RxClass

Search drug classes in RxClass. Data comes from RxClass.

## When to use

- Find the drug classes of a drug.
- Look up one class id.

## When not to use

- RxNorm concept ids. Use https://skills.duaer.com/rxnorm.md.

## Call

\`GET https://api.duaer.com/v1/data/rxclass?words=aspirin&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as aspirin.
- \`id\` — Optional. Id such as aspirin.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/rxclass?words=aspirin&limit=10\` — classes for aspirin.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`RxClass\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`classId\`, \`className\`, \`classType\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/rxnorm.md — Duaer RxNorm
- https://skills.duaer.com/ndc.md — Duaer NDC
`,

	'device-510k': `---
name: duaer-device-510k
description: >-
  Duaer OpenFDA 510(k). Search FDA 510(k) device clearances.
  One successful search uses 1 Duaer credit.
---

# Duaer OpenFDA 510(k)

Search FDA 510(k) device clearances. Data comes from OpenFDA 510(k).

## When to use

- Find FDA 510(k) clearances by company or device.
- Look up one K number.

## When not to use

- PMA approvals. Use https://skills.duaer.com/device-pma.md.

## Call

\`GET https://api.duaer.com/v1/data/device-510k?words=medtronic&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as medtronic.
- \`id\` — Optional. Id such as K123456.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/device-510k?words=medtronic&limit=10\` — 510(k) clearances for medtronic.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`OpenFDA 510(k)\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`kNumber\`, \`applicant\`, \`deviceName\`, \`product\`, \`reason\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/device-events.md — Duaer Device events
- https://skills.duaer.com/ndc.md — Duaer NDC
`,

	'food-enforcement': `---
name: duaer-food-enforcement
description: >-
  Duaer OpenFDA Food. Search FDA food enforcement reports.
  One successful search uses 1 Duaer credit.
---

# Duaer OpenFDA Food

Search FDA food enforcement reports. Data comes from OpenFDA Food.

## When to use

- Find FDA food recall enforcement reports.
- Look up one recall number.

## When not to use

- Food adverse events. Use https://skills.duaer.com/food-events.md.

## Call

\`GET https://api.duaer.com/v1/data/food-enforcement?words=listeria&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as listeria.
- \`id\` — Optional. Id such as F-001-2020.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/food-enforcement?words=listeria&limit=10\` — food recalls mentioning listeria.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`OpenFDA Food\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`recallNumber\`, \`applicant\`, \`deviceName\`, \`product\`, \`reason\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/drug-recalls.md — Duaer drug recalls
- https://skills.duaer.com/ndc.md — Duaer NDC
`,

	zenodo: `---
name: duaer-zenodo
description: >-
  Duaer Zenodo. Search research outputs in Zenodo.
  One successful search uses 1 Duaer credit.
---

# Duaer Zenodo

Search research outputs in Zenodo. Data comes from Zenodo.

## When to use

- Find datasets, software, and papers in Zenodo.
- Look up one Zenodo record or DOI.

## When not to use

- Figshare records. Use https://skills.duaer.com/figshare.md.

## Call

\`GET https://api.duaer.com/v1/data/zenodo?words=proteomics&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as proteomics.
- \`id\` — Optional. Id such as 10.5281/zenodo.17662799.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/zenodo?words=proteomics&limit=10\` — Zenodo records matching proteomics.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`Zenodo\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`doi\`, \`zenodoId\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/papers.md — Duaer papers
- https://skills.duaer.com/preprints.md — Duaer preprints
`,

	figshare: `---
name: duaer-figshare
description: >-
  Duaer Figshare. Search research outputs in Figshare.
  One successful search uses 1 Duaer credit.
---

# Duaer Figshare

Search research outputs in Figshare. Data comes from Figshare.

## When to use

- Find research outputs in Figshare.
- Look up one Figshare article id.

## When not to use

- Zenodo records. Use https://skills.duaer.com/zenodo.md.

## Call

\`GET https://api.duaer.com/v1/data/figshare?words=proteomics&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as proteomics.
- \`id\` — Optional. Id such as 12345.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/figshare?words=proteomics&limit=10\` — Figshare records matching proteomics.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`Figshare\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`articleId\`, \`doi\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/papers.md — Duaer papers
- https://skills.duaer.com/zenodo.md — Duaer Zenodo
`,

	dryad: `---
name: duaer-dryad
description: >-
  Duaer Dryad. Search research datasets in Dryad.
  One successful search uses 1 Duaer credit.
---

# Duaer Dryad

Search research datasets in Dryad. Data comes from Dryad.

## When to use

- Find research datasets in Dryad.
- Look up one Dryad DOI.

## When not to use

- Zenodo records. Use https://skills.duaer.com/zenodo.md.

## Call

\`GET https://api.duaer.com/v1/data/dryad?words=proteomics&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as proteomics.
- \`id\` — Optional. Id such as doi:10.5061/dryad.xxx.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/dryad?words=proteomics&limit=10\` — Dryad datasets matching proteomics.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`Dryad\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`doi\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/papers.md — Duaer papers
- https://skills.duaer.com/zenodo.md — Duaer Zenodo
`,

	proteomexchange: `---
name: duaer-proteomexchange
description: >-
  Duaer ProteomeXchange. Look up ProteomeXchange datasets.
  One successful search uses 1 Duaer credit.
---

# Duaer ProteomeXchange

Look up ProteomeXchange datasets. Data comes from ProteomeXchange.

## When to use

- Look up a ProteomeXchange dataset by PXD id.
- Find which repository holds a dataset.

## When not to use

- PRIDE projects. Use https://skills.duaer.com/pride.md.

## Call

\`GET https://api.duaer.com/v1/data/proteomexchange?words=PXD000001&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as PXD000001.
- \`id\` — Optional. Id such as PXD000001.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/proteomexchange?words=PXD000001&limit=10\` — dataset PXD000001.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`ProteomeXchange\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`pxdId\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/pride.md — Duaer PRIDE
- https://skills.duaer.com/proteins.md — Duaer proteins
`,

	omnipath: `---
name: duaer-omnipath
description: >-
  Duaer Omnipath. Search molecular interactions in OmniPath.
  One successful search uses 1 Duaer credit.
---

# Duaer Omnipath

Search molecular interactions in OmniPath. Data comes from Omnipath.

## When to use

- Find signaling and regulatory interactions in OmniPath.
- Look up interactions for one protein.

## When not to use

- STRING partners. Use https://skills.duaer.com/interactions.md.

## Call

\`GET https://api.duaer.com/v1/data/omnipath?words=EGFR&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as EGFR.
- \`id\` — Optional. Id such as EGFR.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/omnipath?words=EGFR&limit=10\` — OmniPath interactions for EGFR.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`Omnipath\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`partner\`, \`sourceGene\`, \`targetGene\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/interactions.md — Duaer interactions
- https://skills.duaer.com/intact.md — Duaer IntAct
`,

	oma: `---
name: duaer-oma
description: >-
  Duaer OMA. Look up proteins in OMA browser.
  One successful search uses 1 Duaer credit.
---

# Duaer OMA

Look up proteins in OMA browser. Data comes from OMA.

## When to use

- Look up a protein in the OMA orthology browser.
- Get its OMA id.

## When not to use

- OrthoDB groups. Use https://skills.duaer.com/orthodb.md.

## Call

\`GET https://api.duaer.com/v1/data/oma?words=BRCA1_HUMAN&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as BRCA1_HUMAN.
- \`id\` — Optional. Id such as BRCA1_HUMAN.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/oma?words=BRCA1_HUMAN&limit=10\` — OMA entry BRCA1_HUMAN.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`OMA\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`omaId\`, \`canonicalId\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/orthologs.md — Duaer orthologs
- https://skills.duaer.com/proteins.md — Duaer proteins
`,

	orthodb: `---
name: duaer-orthodb
description: >-
  Duaer OrthoDB. Search orthologs in OrthoDB.
  One successful search uses 1 Duaer credit.
---

# Duaer OrthoDB

Search orthologs in OrthoDB. Data comes from OrthoDB.

## When to use

- Find ortholog groups in OrthoDB.
- Look up one group id.

## When not to use

- Gene orthologs by species. Use https://skills.duaer.com/orthologs.md.

## Call

\`GET https://api.duaer.com/v1/data/orthodb?words=BRCA1&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as BRCA1.
- \`id\` — Optional. Id such as 9606_0:001234.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/orthodb?words=BRCA1&limit=10\` — OrthoDB groups for BRCA1.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`OrthoDB\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`orthodbId\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/orthologs.md — Duaer orthologs
- https://skills.duaer.com/oma.md — Duaer OMA
`,

	panther: `---
name: duaer-panther
description: >-
  Duaer PANTHER. Look up gene info in PANTHER.
  One successful search uses 1 Duaer credit.
---

# Duaer PANTHER

Look up gene info in PANTHER. Data comes from PANTHER.

## When to use

- Look up PANTHER family and gene info.
- Check the PANTHER family of a gene.

## When not to use

- InterPro domains. Use https://skills.duaer.com/interpro.md.

## Call

\`GET https://api.duaer.com/v1/data/panther?words=BRCA1&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as BRCA1.
- \`id\` — Optional. Id such as Human=BRCA1.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/panther?words=BRCA1&limit=10\` — PANTHER records for BRCA1.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`PANTHER\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`geneId\`, \`family\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/genes.md — Duaer genes
- https://skills.duaer.com/orthologs.md — Duaer orthologs
`,

	pato: `---
name: duaer-pato
description: >-
  Duaer PATO. Search phenotype quality terms from PATO.
  One successful search uses 1 Duaer credit.
---

# Duaer PATO

Search phenotype quality terms from PATO. Data comes from PATO.

## When to use

- Find phenotype quality terms in PATO.
- Look up one PATO id.

## When not to use

- Mammalian phenotypes. Use https://skills.duaer.com/mp.md.

## Call

\`GET https://api.duaer.com/v1/data/pato?words=shape&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as shape.
- \`id\` — Optional. Id such as PATO:0000052.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/pato?words=shape&limit=10\` — PATO terms matching shape.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`PATO\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`patoId\`, \`description\`, \`synonyms\`, \`iri\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/phenotypes.md — Duaer phenotypes
- https://skills.duaer.com/mp.md — Duaer MP
`,

	edam: `---
name: duaer-edam
description: >-
  Duaer EDAM. Search bioinformatics concepts from EDAM.
  One successful search uses 1 Duaer credit.
---

# Duaer EDAM

Search bioinformatics concepts from EDAM. Data comes from EDAM.

## When to use

- Find bioinformatics data, format, and operation terms in EDAM.
- Look up one EDAM id.

## When not to use

- Bioinformatics tools. Use https://skills.duaer.com/bio-tools.md.

## Call

\`GET https://api.duaer.com/v1/data/edam?words=fasta&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as fasta.
- \`id\` — Optional. Id such as EDAM:format_1929.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/edam?words=fasta&limit=10\` — EDAM terms matching fasta.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`EDAM\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`edamId\`, \`description\`, \`synonyms\`, \`iri\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/assays.md — Duaer assays
- https://skills.duaer.com/bio-tools.md — Duaer bio.tools
`,

	bao: `---
name: duaer-bao
description: >-
  Duaer BAO. Search BioAssay Ontology terms from BAO.
  One successful search uses 1 Duaer credit.
---

# Duaer BAO

Search BioAssay Ontology terms from BAO. Data comes from BAO.

## When to use

- Find BioAssay Ontology terms.
- Look up one BAO id.

## When not to use

- ChEMBL assays. Use https://skills.duaer.com/assays.md.

## Call

\`GET https://api.duaer.com/v1/data/bao?words=assay&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as assay.
- \`id\` — Optional. Id such as BAO:0000015.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/bao?words=assay&limit=10\` — BAO terms matching assay.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`BAO\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`baoId\`, \`description\`, \`synonyms\`, \`iri\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/assays.md — Duaer assays
- https://skills.duaer.com/obi.md — Duaer OBI
`,

	bto: `---
name: duaer-bto
description: >-
  Duaer BTO. Search tissue terms from BRENDA Tissue Ontology.
  One successful search uses 1 Duaer credit.
---

# Duaer BTO

Search tissue terms from BRENDA Tissue Ontology. Data comes from BTO.

## When to use

- Find BRENDA tissue terms.
- Look up one BTO id.

## When not to use

- Uberon anatomy. Use https://skills.duaer.com/uberon.md.

## Call

\`GET https://api.duaer.com/v1/data/bto?words=liver&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as liver.
- \`id\` — Optional. Id such as BTO:0000759.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/bto?words=liver&limit=10\` — BTO terms matching liver.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`BTO\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`btoId\`, \`description\`, \`synonyms\`, \`iri\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/uberon.md — Duaer Uberon
- https://skills.duaer.com/atlas.md — Duaer tissue atlas
`,

	pw: `---
name: duaer-pw
description: >-
  Duaer PW. Search pathway ontology terms from PW.
  One successful search uses 1 Duaer credit.
---

# Duaer PW

Search pathway ontology terms from PW. Data comes from PW.

## When to use

- Find Pathway Ontology terms.
- Look up one PW id.

## When not to use

- Reactome pathways. Use https://skills.duaer.com/pathways.md.

## Call

\`GET https://api.duaer.com/v1/data/pw?words=apoptosis&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as apoptosis.
- \`id\` — Optional. Id such as PW:0000009.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/pw?words=apoptosis&limit=10\` — PW terms matching apoptosis.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`PW\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`pwId\`, \`description\`, \`synonyms\`, \`iri\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/pathways.md — Duaer pathways
- https://skills.duaer.com/kegg.md — Duaer KEGG
`,

	vo: `---
name: duaer-vo
description: >-
  Duaer VO. Search vaccine ontology terms from VO.
  One successful search uses 1 Duaer credit.
---

# Duaer VO

Search vaccine ontology terms from VO. Data comes from VO.

## When to use

- Find Vaccine Ontology terms.
- Look up one VO id.

## When not to use

- Infectious disease terms. Use https://skills.duaer.com/ido.md.

## Call

\`GET https://api.duaer.com/v1/data/vo?words=vaccine&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as vaccine.
- \`id\` — Optional. Id such as VO:0000001.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/vo?words=vaccine&limit=10\` — VO terms matching vaccine.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`VO\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`voId\`, \`description\`, \`synonyms\`, \`iri\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/phenotypes.md — Duaer phenotypes
- https://skills.duaer.com/mesh.md — Duaer MeSH
`,

	oncotree: `---
name: duaer-oncotree
description: >-
  Duaer OncoTree. Search tumor types in OncoTree.
  One successful search uses 1 Duaer credit.
---

# Duaer OncoTree

Search tumor types in OncoTree. Data comes from OncoTree.

## When to use

- Find tumor types and OncoTree codes.
- Look up one OncoTree code.

## When not to use

- NCI Thesaurus terms. Use https://skills.duaer.com/ncit.md.

## Call

\`GET https://api.duaer.com/v1/data/oncotree?words=melanoma&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`words\`.

- \`words\` — search words, such as melanoma.
- \`id\` — Optional. Id such as MEL.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/oncotree?words=melanoma&limit=10\` — tumor types matching melanoma.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`OncoTree\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`oncotreeCode\`, \`name\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/cbioportal.md — Duaer cBioPortal
- https://skills.duaer.com/ncit.md — Duaer NCIt
`,

	idr: `---
name: duaer-idr
description: >-
  Duaer IDR. Browse imaging projects in IDR.
  One successful search uses 1 Duaer credit.
---

# Duaer IDR

Browse imaging projects in IDR. Data comes from IDR.

## When to use

- Browse imaging projects in the Image Data Resource.
- Look up one IDR project.

## When not to use

- Cryo-EM images. Use https://skills.duaer.com/empiar.md.

## Call

\`GET https://api.duaer.com/v1/data/idr?words=cell&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as cell.
- \`id\` — Optional. Id such as 51.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/idr?words=cell&limit=10\` — IDR projects matching cell.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`IDR\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`projectId\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/geo.md — Duaer GEO
- https://skills.duaer.com/expression-atlas.md — Duaer Expression Atlas
`,

	hca: `---
name: duaer-hca
description: >-
  Duaer HCA. Search Human Cell Atlas projects.
  One successful search uses 1 Duaer credit.
---

# Duaer HCA

Search Human Cell Atlas projects. Data comes from HCA.

## When to use

- Find Human Cell Atlas projects.
- Look up one HCA project.

## When not to use

- CELLxGENE collections. Use https://skills.duaer.com/cellxgene.md.

## Call

\`GET https://api.duaer.com/v1/data/hca?words=blood&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`words\`.

- \`words\` — search words, such as blood.
- \`id\` — Optional. Id such as projectId.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/hca?words=blood&limit=10\` — HCA projects matching blood.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`HCA\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`projectId\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/expression-atlas.md — Duaer Expression Atlas
- https://skills.duaer.com/single-cell-atlas.md — Duaer Single Cell Atlas
`,

	ucsc: `---
name: duaer-ucsc
description: >-
  Duaer UCSC. Search UCSC genome assemblies.
  One successful search uses 1 Duaer credit.
---

# Duaer UCSC

Search UCSC genome assemblies. Data comes from UCSC.

## When to use

- Find UCSC genome assemblies.
- Look up one assembly name.

## When not to use

- NCBI assemblies. Use https://skills.duaer.com/ncbi-assembly.md.

## Call

\`GET https://api.duaer.com/v1/data/ucsc?words=hg38&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`.

- \`words\` — search words, such as hg38.
- \`id\` — Optional. Id such as hg38.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/ucsc?words=hg38&limit=10\` — UCSC assemblies matching hg38.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`UCSC\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`genome\`, \`organism\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/ensembl.md — Duaer Ensembl
- https://skills.duaer.com/genes.md — Duaer genes
`,

	harmonizome: `---
name: duaer-harmonizome
description: >-
  Duaer Harmonizome. Look up gene annotations in Harmonizome.
  One successful search uses 1 Duaer credit.
---

# Duaer Harmonizome

Look up gene annotations in Harmonizome. Data comes from Harmonizome.

## When to use

- Look up gene annotations in Harmonizome.
- Find datasets that mention a gene.

## When not to use

- Enrichr libraries. Use https://skills.duaer.com/enrichr.md.

## Call

\`GET https://api.duaer.com/v1/data/harmonizome?words=BRCA1&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as BRCA1.
- \`id\` — Optional. Id such as BRCA1.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/harmonizome?words=BRCA1&limit=10\` — Harmonizome records for BRCA1.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`Harmonizome\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`geneSymbol\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/genes.md — Duaer genes
- https://skills.duaer.com/expression.md — Duaer expression
`,

	pubtator: `---
name: duaer-pubtator
description: >-
  Duaer PubTator. Autocomplete biomedical entities in PubTator.
  One successful search uses 1 Duaer credit.
---

# Duaer PubTator

Autocomplete biomedical entities in PubTator. Data comes from PubTator.

## When to use

- Autocomplete genes, diseases, and chemicals to PubTator ids.
- Normalize an entity name before a literature search.

## When not to use

- Literature search. Use https://skills.duaer.com/pubmed.md.

## Call

\`GET https://api.duaer.com/v1/data/pubtator?words=BRCA1&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as BRCA1.
- \`id\` — Optional. Id such as BRCA1.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/pubtator?words=BRCA1&limit=10\` — PubTator entities for BRCA1.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`PubTator\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`entityId\`, \`biotype\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/papers.md — Duaer papers
- https://skills.duaer.com/genes.md — Duaer genes
`,

	icite: `---
name: duaer-icite
description: >-
  Duaer iCite. Look up NIH relative citation ratios in iCite.
  One successful search uses 1 Duaer credit.
---

# Duaer iCite

Look up NIH relative citation ratios in iCite. Data comes from iCite.

## When to use

- Get the NIH relative citation ratio of a PubMed article.
- Compare citation impact of PMIDs.

## When not to use

- Citation counts from OpenAlex. Use https://skills.duaer.com/papers.md.

## Call

\`GET https://api.duaer.com/v1/data/icite?words=28973672&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as 28973672.
- \`id\` — Optional. Id such as 28973672.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/icite?words=28973672&limit=10\` — iCite metrics for PMID 28973672.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`iCite\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`pmid\` — text.
- \`rcr\`, \`citationCount\` — number.

${blank}

${credits}

## Related

- https://skills.duaer.com/papers.md — Duaer papers
- https://skills.duaer.com/europe-pmc.md — Duaer Europe PMC
`,

	ror: `---
name: duaer-ror
description: >-
  Duaer ROR. Search research organizations in ROR.
  One successful search uses 1 Duaer credit.
---

# Duaer ROR

Search research organizations in ROR. Data comes from ROR.

## When to use

- Find research organizations and ROR ids.
- Look up one ROR id.

## When not to use

- OpenAlex institutions. Use https://skills.duaer.com/openalex-institutions.md.

## Call

\`GET https://api.duaer.com/v1/data/ror?words=cambridge&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as cambridge.
- \`id\` — Optional. Id such as https://ror.org/013meh722.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/ror?words=cambridge&limit=10\` — ROR organizations matching cambridge.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`ROR\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`rorId\`, \`country\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/papers.md — Duaer papers
- https://skills.duaer.com/orcid.md — Duaer ORCID
`,

	'openalex-authors': `---
name: duaer-openalex-authors
description: >-
  Duaer OpenAlex Authors. Search authors in OpenAlex.
  One successful search uses 1 Duaer credit.
---

# Duaer OpenAlex Authors

Search authors in OpenAlex. Data comes from OpenAlex Authors.

## When to use

- Find authors in OpenAlex.
- Look up one OpenAlex author id.

## When not to use

- ORCID records. Use https://skills.duaer.com/orcid.md.

## Call

\`GET https://api.duaer.com/v1/data/openalex-authors?words=crick&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as crick.
- \`id\` — Optional. Id such as A5023888391.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/openalex-authors?words=crick&limit=10\` — OpenAlex authors matching crick.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`OpenAlex Authors\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`openAlexId\` — text.
- \`worksCount\` — number.

${blank}

${credits}

## Related

- https://skills.duaer.com/papers.md — Duaer papers
- https://skills.duaer.com/orcid.md — Duaer ORCID
`,

	'openalex-institutions': `---
name: duaer-openalex-institutions
description: >-
  Duaer OpenAlex Institutions. Search institutions in OpenAlex.
  One successful search uses 1 Duaer credit.
---

# Duaer OpenAlex Institutions

Search institutions in OpenAlex. Data comes from OpenAlex Institutions.

## When to use

- Find institutions in OpenAlex.
- Look up one OpenAlex institution id.

## When not to use

- ROR records. Use https://skills.duaer.com/ror.md.

## Call

\`GET https://api.duaer.com/v1/data/openalex-institutions?words=cambridge&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as cambridge.
- \`id\` — Optional. Id such as I97018004.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/openalex-institutions?words=cambridge&limit=10\` — institutions matching cambridge.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`OpenAlex Institutions\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`openAlexId\` — text.
- \`worksCount\` — number.

${blank}

${credits}

## Related

- https://skills.duaer.com/papers.md — Duaer papers
- https://skills.duaer.com/ror.md — Duaer ROR
`,

	'openalex-topics': `---
name: duaer-openalex-topics
description: >-
  Duaer OpenAlex Topics. Search topics in OpenAlex.
  One successful search uses 1 Duaer credit.
---

# Duaer OpenAlex Topics

Search topics in OpenAlex. Data comes from OpenAlex Topics.

## When to use

- Find research topics in OpenAlex.
- Look up one topic id.

## When not to use

- OpenAlex concepts. Use https://skills.duaer.com/openalex-concepts.md.

## Call

\`GET https://api.duaer.com/v1/data/openalex-topics?words=cancer&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as cancer.
- \`id\` — Optional. Id such as T10001.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/openalex-topics?words=cancer&limit=10\` — topics matching cancer.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`OpenAlex Topics\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`openAlexId\` — text.
- \`worksCount\` — number.

${blank}

${credits}

## Related

- https://skills.duaer.com/papers.md — Duaer papers
- https://skills.duaer.com/crossref.md — Duaer Crossref
`,

	'crossref-funders': `---
name: duaer-crossref-funders
description: >-
  Duaer Crossref Funders. Search funders in Crossref.
  One successful search uses 1 Duaer credit.
---

# Duaer Crossref Funders

Search funders in Crossref. Data comes from Crossref Funders.

## When to use

- Find funders in the Crossref funder registry.
- Look up one funder id.

## When not to use

- OpenAlex funders. Use https://skills.duaer.com/openalex-funders.md.

## Call

\`GET https://api.duaer.com/v1/data/crossref-funders?words=wellcome&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as wellcome.
- \`id\` — Optional. Id such as 100000002.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/crossref-funders?words=wellcome&limit=10\` — Crossref funders matching wellcome.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`Crossref Funders\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`funderId\`, \`location\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/grants.md — Duaer grants
- https://skills.duaer.com/papers.md — Duaer papers
`,

	'nsf-awards': `---
name: duaer-nsf-awards
description: >-
  Duaer NSF Awards. Search NSF awards.
  One successful search uses 1 Duaer credit.
---

# Duaer NSF Awards

Search NSF awards. Data comes from NSF Awards.

## When to use

- Find NSF awards on a topic.
- Look up one award id.

## When not to use

- NIH grants. Use https://skills.duaer.com/grants.md.

## Call

\`GET https://api.duaer.com/v1/data/nsf-awards?words=proteomics&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as proteomics.
- \`id\` — Optional. Id such as 1234567.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/nsf-awards?words=proteomics&limit=10\` — NSF awards matching proteomics.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`NSF Awards\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`awardId\`, \`agency\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/grants.md — Duaer grants
- https://skills.duaer.com/papers.md — Duaer papers
`,

	eva: `---
name: duaer-eva
description: >-
  Duaer EVA. Browse variation studies in EVA.
  One successful search uses 1 Duaer credit.
---

# Duaer EVA

Browse variation studies in EVA. Data comes from EVA.

## When to use

- Browse variation studies in the European Variation Archive.
- Look up one EVA study.

## When not to use

- dbSNP records. Use https://skills.duaer.com/dbsnp.md.

## Call

\`GET https://api.duaer.com/v1/data/eva?words=human&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`.

- \`words\` — search words, such as human.
- \`id\` — Optional. Id such as PRJEB123.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/eva?words=human&limit=10\` — EVA studies matching human.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`EVA\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`studyId\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/variants.md — Duaer variants
- https://skills.duaer.com/dbsnp.md — Duaer dbSNP
- https://skills.duaer.com/clinvar.md — Duaer ClinVar
`,

	'ensembl-vep': `---
name: duaer-ensembl-vep
description: >-
  Duaer Ensembl VEP. Predict variant effects with Ensembl VEP.
  One successful search uses 1 Duaer credit.
---

# Duaer Ensembl VEP

Predict variant effects with Ensembl VEP. Data comes from Ensembl VEP.

## When to use

- Predict the consequence of a variant with Ensembl VEP.
- Annotate an rs id or HGVS description.

## When not to use

- Clinical significance. Use https://skills.duaer.com/clinvar.md.

## Call

\`GET https://api.duaer.com/v1/data/ensembl-vep?words=rs699&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as rs699.
- \`id\` — Optional. Id such as rs699.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/ensembl-vep?words=rs699&limit=10\` — VEP consequences for rs699.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`Ensembl VEP\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`variantId\`, \`mostSevere\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/variants.md — Duaer variants
- https://skills.duaer.com/ensembl.md — Duaer Ensembl
- https://skills.duaer.com/dbsnp.md — Duaer dbSNP
`,

	'ncbi-datasets': `---
name: duaer-ncbi-datasets
description: >-
  Duaer NCBI Datasets. Look up genes in NCBI Datasets.
  One successful search uses 1 Duaer credit.
---

# Duaer NCBI Datasets

Look up genes in NCBI Datasets. Data comes from NCBI Datasets.

## When to use

- Look up gene records in NCBI Datasets.
- Get gene ids and descriptions by symbol.

## When not to use

- MyGene search. Use https://skills.duaer.com/genes.md.

## Call

\`GET https://api.duaer.com/v1/data/ncbi-datasets?words=BRCA1&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as BRCA1.
- \`id\` — Optional. Id such as 672.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/ncbi-datasets?words=BRCA1&limit=10\` — NCBI Datasets genes for BRCA1.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`NCBI Datasets\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`geneId\`, \`symbol\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/genes.md — Duaer genes
- https://skills.duaer.com/ensembl.md — Duaer Ensembl
`,

	'4dn': `---
name: duaer-4dn
description: >-
  Duaer 4DN. Search 4D Nucleome publications.
  One successful search uses 1 Duaer credit.
---

# Duaer 4DN

Search 4D Nucleome publications. Data comes from 4DN.

## When to use

- Find 4D Nucleome publications and data.
- Look up one 4DN item.

## When not to use

- ENCODE experiments. Use https://skills.duaer.com/encode.md.

## Call

\`GET https://api.duaer.com/v1/data/4dn?words=chromatin&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`words\`.

- \`words\` — search words, such as chromatin.
- \`id\` — Optional. Id such as 12345.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/4dn?words=chromatin&limit=10\` — 4DN items matching chromatin.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`4DN\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`uuid\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/encode.md — Duaer ENCODE
- https://skills.duaer.com/geo.md — Duaer GEO
`,

	rgd: `---
name: duaer-rgd
description: >-
  Duaer RGD. Look up rat genes in RGD.
  One successful search uses 1 Duaer credit.
---

# Duaer RGD

Look up rat genes in RGD. Data comes from RGD.

## When to use

- Look up rat genes in RGD.
- Find a rat gene by RGD id.

## When not to use

- Mouse genes. Use https://skills.duaer.com/mgi.md.

## Call

\`GET https://api.duaer.com/v1/data/rgd?words=61919&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as 61919.
- \`id\` — Optional. Id such as 61919.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/rgd?words=61919&limit=10\` — RGD gene 61919.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`RGD\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`rgdId\`, \`symbol\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/genes.md — Duaer genes
- https://skills.duaer.com/alliance.md — Duaer Alliance
`,

	sgd: `---
name: duaer-sgd
description: >-
  Duaer SGD. Look up yeast genes in SGD.
  One successful search uses 1 Duaer credit.
---

# Duaer SGD

Look up yeast genes in SGD. Data comes from SGD.

## When to use

- Look up budding yeast genes in SGD.
- Find a yeast gene by SGD id.

## When not to use

- Fission yeast genes. Use https://skills.duaer.com/pombase.md.

## Call

\`GET https://api.duaer.com/v1/data/sgd?words=S000000001&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as S000000001.
- \`id\` — Optional. Id such as S000000001.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/sgd?words=S000000001&limit=10\` — SGD gene S000000001.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`SGD\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`sgdId\`, \`name\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/genes.md — Duaer genes
- https://skills.duaer.com/alliance.md — Duaer Alliance
`,

	nextstrain: `---
name: duaer-nextstrain
description: >-
  Duaer Nextstrain. Search pathogen datasets in Nextstrain.
  One successful search uses 1 Duaer credit.
---

# Duaer Nextstrain

Search pathogen datasets in Nextstrain. Data comes from Nextstrain.

## When to use

- Find pathogen phylogeny datasets in Nextstrain.
- Look up one Nextstrain dataset.

## When not to use

- Pathogen genomes. Use https://skills.duaer.com/bv-brc.md.

## Call

\`GET https://api.duaer.com/v1/data/nextstrain?words=ncov&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`.

- \`words\` — search words, such as ncov.
- \`id\` — Optional. Id such as ncov/open/global/all-time.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/nextstrain?words=ncov&limit=10\` — Nextstrain datasets matching ncov.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`Nextstrain\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`dataset\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/geo.md — Duaer GEO
- https://skills.duaer.com/organisms.md — Duaer organisms
`,

	medlineplus: `---
name: duaer-medlineplus
description: >-
  Duaer MedlinePlus. Look up consumer health topics in MedlinePlus.
  One successful search uses 1 Duaer credit.
---

# Duaer MedlinePlus

Look up consumer health topics in MedlinePlus. Data comes from MedlinePlus.

## When to use

- Find consumer health topics for a code or term.
- Give patients plain-language health information.

## When not to use

- ICD-10 codes. Use https://skills.duaer.com/icd10.md.

## Call

\`GET https://api.duaer.com/v1/data/medlineplus?words=E11&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as E11.
- \`id\` — Optional. Id such as E11.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/medlineplus?words=E11&limit=10\` — MedlinePlus topics for code E11.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`MedlinePlus\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`code\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/diseases.md — Duaer diseases
- https://skills.duaer.com/mesh.md — Duaer MeSH
`,

	icd10: `---
name: duaer-icd10
description: >-
  Duaer ICD-10. Search ICD-10-CM codes from ClinicalTables.
  One successful search uses 1 Duaer credit.
---

# Duaer ICD-10

Search ICD-10-CM codes from ClinicalTables. Data comes from ICD-10.

## When to use

- Find ICD-10-CM codes for a condition.
- Look up one ICD-10-CM code.

## When not to use

- Consumer health topics. Use https://skills.duaer.com/medlineplus.md.

## Call

\`GET https://api.duaer.com/v1/data/icd10?words=diabetes&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as diabetes.
- \`id\` — Optional. Id such as E11.9.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/icd10?words=diabetes&limit=10\` — ICD-10-CM codes matching diabetes.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`ICD-10\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`code\`, \`name\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/diseases.md — Duaer diseases
- https://skills.duaer.com/medlineplus.md — Duaer MedlinePlus
`,

	bioregistry: `---
name: duaer-bioregistry
description: >-
  Duaer Bioregistry. Search prefix registry entries in Bioregistry.
  One successful search uses 1 Duaer credit.
---

# Duaer Bioregistry

Search prefix registry entries in Bioregistry. Data comes from Bioregistry.

## When to use

- Find identifier prefixes and their registry entries.
- Check how to resolve a CURIE prefix.

## When not to use

- Normalize one CURIE. Use https://skills.duaer.com/node-norm.md.

## Call

\`GET https://api.duaer.com/v1/data/bioregistry?words=chebi&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as chebi.
- \`id\` — Optional. Id such as chebi.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/bioregistry?words=chebi&limit=10\` — Bioregistry entries matching chebi.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`Bioregistry\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`prefix\`, \`name\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/crossrefs.md — Duaer crossrefs
- https://skills.duaer.com/node-norm.md — Duaer NodeNorm
`,

	'bio-tools': `---
name: duaer-bio-tools
description: >-
  Duaer bio.tools. Search bioinformatics tools in bio.tools.
  One successful search uses 1 Duaer credit.
---

# Duaer bio.tools

Search bioinformatics tools in bio.tools. Data comes from bio.tools.

## When to use

- Find bioinformatics tools in bio.tools.
- Look up one tool id.

## When not to use

- Workflows. Use https://skills.duaer.com/dockstore.md.

## Call

\`GET https://api.duaer.com/v1/data/bio-tools?words=blast&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as blast.
- \`id\` — Optional. Id such as blast.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/bio-tools?words=blast&limit=10\` — tools matching blast.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`bio.tools\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`toolId\`, \`homepage\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/assays.md — Duaer assays
- https://skills.duaer.com/dockstore.md — Duaer Dockstore
`,

	dockstore: `---
name: duaer-dockstore
description: >-
  Duaer Dockstore. Search workflows in Dockstore.
  One successful search uses 1 Duaer credit.
---

# Duaer Dockstore

Search workflows in Dockstore. Data comes from Dockstore.

## When to use

- Find workflows in Dockstore.
- Look up one workflow.

## When not to use

- WorkflowHub workflows. Use https://skills.duaer.com/workflowhub.md.

## Call

\`GET https://api.duaer.com/v1/data/dockstore?words=rna&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as rna.
- \`id\` — Optional. Id such as github.com/org/tool.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/dockstore?words=rna&limit=10\` — Dockstore workflows matching rna.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`Dockstore\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`toolId\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/bio-tools.md — Duaer bio.tools
- https://skills.duaer.com/workflowhub.md — Duaer WorkflowHub
`,

	workflowhub: `---
name: duaer-workflowhub
description: >-
  Duaer WorkflowHub. Search workflows in WorkflowHub.
  One successful search uses 1 Duaer credit.
---

# Duaer WorkflowHub

Search workflows in WorkflowHub. Data comes from WorkflowHub.

## When to use

- Find workflows in WorkflowHub.
- Look up one workflow id.

## When not to use

- Dockstore workflows. Use https://skills.duaer.com/dockstore.md.

## Call

\`GET https://api.duaer.com/v1/data/workflowhub?words=proteomics&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as proteomics.
- \`id\` — Optional. Id such as workflowhub.eu/123.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/workflowhub?words=proteomics&limit=10\` — WorkflowHub workflows matching proteomics.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`WorkflowHub\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`toolId\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/dockstore.md — Duaer Dockstore
- https://skills.duaer.com/bio-tools.md — Duaer bio.tools
`,

	doaj: `---
name: duaer-doaj
description: >-
  Duaer DOAJ. Search open-access articles in DOAJ.
  One successful search uses 1 Duaer credit.
---

# Duaer DOAJ

Search open-access articles in DOAJ. Data comes from DOAJ.

## When to use

- Find open access articles in DOAJ.
- Look up one DOAJ article.

## When not to use

- Open access journals. Use https://skills.duaer.com/doaj-journals.md.

## Call

\`GET https://api.duaer.com/v1/data/doaj?words=insulin&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as insulin.
- \`id\` — Optional. Id such as 10.1234/x.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/doaj?words=insulin&limit=10\` — DOAJ articles matching insulin.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`DOAJ\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`doi\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/papers.md — Duaer papers
- https://skills.duaer.com/europe-pmc.md — Duaer Europe PMC
`,

	wikidata: `---
name: duaer-wikidata
description: >-
  Duaer Wikidata. Search entities in Wikidata.
  One successful search uses 1 Duaer credit.
---

# Duaer Wikidata

Search entities in Wikidata. Data comes from Wikidata.

## When to use

- Find Wikidata entities and Q ids.
- Look up one Q id.

## When not to use

- Biomedical name resolution. Use https://skills.duaer.com/name-resolver.md.

## Call

\`GET https://api.duaer.com/v1/data/wikidata?words=BRCA1&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as BRCA1.
- \`id\` — Optional. Id such as Q178532.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/wikidata?words=BRCA1&limit=10\` — Wikidata entities for BRCA1.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`Wikidata\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`wikidataId\`, \`description\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/crossrefs.md — Duaer crossrefs
- https://skills.duaer.com/mesh.md — Duaer MeSH
`,

	'node-norm': `---
name: duaer-node-norm
description: >-
  Duaer NodeNorm. Normalize biomedical curies from SRI NodeNorm.
  One successful search uses 1 Duaer credit.
---

# Duaer NodeNorm

Normalize biomedical curies from SRI NodeNorm. Data comes from NodeNorm.

## When to use

- Normalize a biomedical CURIE to equivalent ids.
- Map one id across vocabularies.

## When not to use

- Free-text names. Use https://skills.duaer.com/name-resolver.md.

## Call

\`GET https://api.duaer.com/v1/data/node-norm?words=NCBIGene%3A672&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as NCBIGene:672.
- \`id\` — Optional. Id such as NCBIGene:672.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/node-norm?words=NCBIGene%3A672&limit=10\` — equivalents of NCBIGene:672.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`NodeNorm\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`curie\`, \`label\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/crossrefs.md — Duaer crossrefs
- https://skills.duaer.com/name-resolver.md — Duaer NameResolver
`,

	'name-resolver': `---
name: duaer-name-resolver
description: >-
  Duaer NameResolver. Resolve biomedical names from SRI Name Resolver.
  One successful search uses 1 Duaer credit.
---

# Duaer NameResolver

Resolve biomedical names from SRI Name Resolver. Data comes from NameResolver.

## When to use

- Resolve a biomedical name to CURIEs.
- Pick an id for a free-text entity.

## When not to use

- Normalize a known CURIE. Use https://skills.duaer.com/node-norm.md.

## Call

\`GET https://api.duaer.com/v1/data/name-resolver?words=BRCA1&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as BRCA1.
- \`id\` — Optional. Id such as BRCA1.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/name-resolver?words=BRCA1&limit=10\` — CURIEs for BRCA1.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`NameResolver\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`curie\`, \`label\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/node-norm.md — Duaer NodeNorm
- https://skills.duaer.com/crossrefs.md — Duaer crossrefs
`,

	gbif: `---
name: duaer-gbif
description: >-
  Duaer GBIF. Search species in GBIF.
  One successful search uses 1 Duaer credit.
---

# Duaer GBIF

Search species in GBIF. Data comes from GBIF.

## When to use

- Find species and GBIF taxon keys.
- Look up one GBIF key.

## When not to use

- Marine species. Use https://skills.duaer.com/worms.md.

## Call

\`GET https://api.duaer.com/v1/data/gbif?words=Homo%20sapiens&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as Homo sapiens.
- \`id\` — Optional. Id such as 2436436.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/gbif?words=Homo%20sapiens&limit=10\` — GBIF species matching Homo sapiens.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`GBIF\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`usageKey\`, \`scientificName\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/organisms.md — Duaer organisms
- https://skills.duaer.com/ncbi-taxon.md — Duaer NCBI Taxonomy
`,

	itis: `---
name: duaer-itis
description: >-
  Duaer ITIS. Search taxonomy in ITIS.
  One successful search uses 1 Duaer credit.
---

# Duaer ITIS

Search taxonomy in ITIS. Data comes from ITIS.

## When to use

- Find taxonomy records in ITIS.
- Look up one TSN.

## When not to use

- GBIF species. Use https://skills.duaer.com/gbif.md.

## Call

\`GET https://api.duaer.com/v1/data/itis?words=Homo%20sapiens&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as Homo sapiens.
- \`id\` — Optional. Id such as 180092.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/itis?words=Homo%20sapiens&limit=10\` — ITIS records for Homo sapiens.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`ITIS\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`tsn\`, \`scientificName\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/organisms.md — Duaer organisms
- https://skills.duaer.com/gbif.md — Duaer GBIF
`,

	worms: `---
name: duaer-worms
description: >-
  Duaer WoRMS. Search marine species in WoRMS.
  One successful search uses 1 Duaer credit.
---

# Duaer WoRMS

Search marine species in WoRMS. Data comes from WoRMS.

## When to use

- Find marine species in WoRMS.
- Look up one AphiaID.

## When not to use

- All species. Use https://skills.duaer.com/gbif.md.

## Call

\`GET https://api.duaer.com/v1/data/worms?words=Homo%20sapiens&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as Homo sapiens.
- \`id\` — Optional. Id such as 1457844.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/worms?words=Homo%20sapiens&limit=10\` — WoRMS records for Homo sapiens.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`WoRMS\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`aphiaId\`, \`scientificName\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/organisms.md — Duaer organisms
- https://skills.duaer.com/gbif.md — Duaer GBIF
`,

	inaturalist: `---
name: duaer-inaturalist
description: >-
  Duaer iNaturalist. Search taxa in iNaturalist.
  One successful search uses 1 Duaer credit.
---

# Duaer iNaturalist

Search taxa in iNaturalist. Data comes from iNaturalist.

## When to use

- Find taxa in iNaturalist.
- Look up one iNaturalist taxon id.

## When not to use

- GBIF species. Use https://skills.duaer.com/gbif.md.

## Call

\`GET https://api.duaer.com/v1/data/inaturalist?words=Homo%20sapiens&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as Homo sapiens.
- \`id\` — Optional. Id such as 4352.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/inaturalist?words=Homo%20sapiens&limit=10\` — iNaturalist taxa matching Homo sapiens.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`iNaturalist\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`taxonId\`, \`name\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/organisms.md — Duaer organisms
- https://skills.duaer.com/gbif.md — Duaer GBIF
`,

	disprot: `---
name: duaer-disprot
description: >-
  Duaer DisProt. Search intrinsically disordered proteins in DisProt.
  One successful search uses 1 Duaer credit.
---

# Duaer DisProt

Search intrinsically disordered proteins in DisProt. Data comes from DisProt.

## When to use

- Find intrinsically disordered proteins in DisProt.
- Look up one DisProt id.

## When not to use

- UniProt proteins. Use https://skills.duaer.com/proteins.md.

## Call

\`GET https://api.duaer.com/v1/data/disprot?words=p53&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as p53.
- \`id\` — Optional. Id such as DP00086.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/disprot?words=p53&limit=10\` — DisProt entries for p53.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`DisProt\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`disprotId\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/proteins.md — Duaer proteins
`,

	lotus: `---
name: duaer-lotus
description: >-
  Duaer LOTUS. Search natural products in LOTUS.
  One successful search uses 1 Duaer credit.
---

# Duaer LOTUS

Search natural products in LOTUS. Data comes from LOTUS.

## When to use

- Find natural products in LOTUS.
- Look up one LOTUS id.

## When not to use

- PubChem compounds. Use https://skills.duaer.com/compounds.md.

## Call

\`GET https://api.duaer.com/v1/data/lotus?words=caffeine&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as caffeine.
- \`id\` — Optional. Id such as LTS0000001.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/lotus?words=caffeine&limit=10\` — natural products matching caffeine.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`LOTUS\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`lotusId\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/compounds.md — Duaer compounds
`,

	massbank: `---
name: duaer-massbank
description: >-
  Duaer MassBank spectra. Match MS/MS peaks, an exact mass, or an InChIKey against MassBank spectra.
  One successful search uses 1 Duaer credit.
---

# Duaer MassBank spectra

Match MS/MS peaks, an exact mass, or an InChIKey against MassBank spectra. Data comes from MassBank.

## When to use

- Match an MS/MS spectrum against MassBank reference spectra.
- Find reference spectra by exact mass or InChIKey.

## When not to use

- MoNA reference spectra. Use https://skills.duaer.com/mona.md.

## Call

\`GET https://api.duaer.com/v1/data/massbank?peaks=59.0138:715%2089.0251:999&ionMode=NEGATIVE&limit=10\`

${header}

## Parameters

Provide \`peaks\`, \`mass\`, or \`inchikey\` (used in that order).

- \`peaks\` — MS/MS peaks as \`mz:intensity\` pairs separated by spaces. One \`mz intensity\` pair per line also works.
- \`threshold\` — Optional. Minimum cosine similarity for \`peaks\`, from 0 to 1. Default 0.7.
- \`mass\` — neutral monoisotopic mass, such as 180.0634.
- \`tolerance\` — Optional. Mass tolerance in Da for \`mass\`. Default 0.01.
- \`inchikey\` — reference records for one compound, such as a https://skills.duaer.com/mass-candidates.md result.
- \`ionMode\` — Optional. \`POSITIVE\` or \`NEGATIVE\`.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/massbank?peaks=59.0138:715%2089.0251:999&ionMode=NEGATIVE&limit=10\` — negative mode match for two peaks.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\`, \`title\`, \`url\`, \`summary\`, \`accession\`, \`compound\`, \`formula\`, \`mass\`, \`inchikey\`, \`ionMode\`, \`instrument\`, and \`score\` (cosine, peak searches only).

To work an unannotated feature step by step, follow https://skills.duaer.com/metabolic-dark-matter.md.

Fields without a value are empty strings or left out.

${credits}

## Related

- https://skills.duaer.com/metabolic-dark-matter.md — Duaer: annotate an unknown feature (metabolic dark matter)
- https://skills.duaer.com/mona.md — Duaer MoNA spectra
- https://skills.duaer.com/mass-candidates.md — Duaer mass candidates
- https://skills.duaer.com/spectrum.md — Duaer spectrum by USI
`,

	mona: `---
name: duaer-mona
description: >-
  Duaer MoNA spectra. Find reference MS/MS spectra in MoNA by InChIKey or compound name.
  One successful search uses 1 Duaer credit.
---

# Duaer MoNA spectra

Find reference MS/MS spectra in MoNA by InChIKey or compound name. Data comes from MoNA.

## When to use

- Find reference MS/MS spectra in MoNA by InChIKey or name.
- Compare an unknown spectrum with references for a candidate.

## When not to use

- MassBank spectra. Use https://skills.duaer.com/massbank.md.

## Call

\`GET https://api.duaer.com/v1/data/mona?inchikey=WQZGKKKJIJFFOK-GASJEMHNSA-N&limit=5\`

${header}

## Parameters

Provide \`inchikey\` or \`words\`.

- \`inchikey\` — exact compound, such as a https://skills.duaer.com/mass-candidates.md result.
- \`words\` — compound name, used when \`inchikey\` is empty.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/mona?inchikey=WQZGKKKJIJFFOK-GASJEMHNSA-N&limit=5\` — MoNA spectra for one InChIKey.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\`, \`title\`, \`url\`, \`summary\`, \`monaId\`, \`compound\`, \`formula\`, \`inchikey\`, \`msLevel\`, \`ionMode\`, \`precursorType\`, \`precursorMz\`, \`instrument\`, \`peakCount\`, and \`peaks\` (\`mz:intensity\` pairs).

Compare \`peaks\` with your unknown spectrum, or pass them to https://skills.duaer.com/masst.md.
To work an unannotated feature step by step, follow https://skills.duaer.com/metabolic-dark-matter.md.

Fields without a value are empty strings or left out.

${credits}

## Related

- https://skills.duaer.com/metabolic-dark-matter.md — Duaer: annotate an unknown feature (metabolic dark matter)
- https://skills.duaer.com/massbank.md — Duaer MassBank spectra
- https://skills.duaer.com/mass-candidates.md — Duaer mass candidates
`,

	'mass-candidates': `---
name: duaer-mass-candidates
description: >-
  Duaer mass candidates. List PubChem compounds that fit an observed m/z and adduct.
  One successful search uses 1 Duaer credit.
---

# Duaer mass candidates

List PubChem compounds that fit an observed m/z and adduct. Data comes from PubChem.

## When to use

- List PubChem compounds that fit an observed m/z and adduct.
- Shortlist candidates for an unannotated feature.

## When not to use

- Spectrum matching. Use https://skills.duaer.com/massbank.md.

## Call

\`GET https://api.duaer.com/v1/data/mass-candidates?mz=181.0707&adduct=%5BM%2BH%5D%2B&ppm=5&limit=10\`

${header}

## Parameters

- \`mz\` — observed m/z of the feature.
- \`adduct\` — Optional. \`neutral\`, \`[M+H]+\`, \`[M+Na]+\`, \`[M+NH4]+\`, \`[M+K]+\`, \`[M+H-H2O]+\`, \`[M-H]-\`, \`[M+Cl]-\`, or \`[M+FA-H]-\`. Default \`[M+H]+\`.
- \`ppm\` — Optional. Mass tolerance in ppm, up to 100. Default 5.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/mass-candidates?mz=181.0707&adduct=%5BM%2BH%5D%2B&ppm=5&limit=10\` — candidates for m/z 181.0707 as [M+H]+.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\`, \`title\`, \`url\`, \`summary\`, \`cid\`, \`formula\`, \`monoisotopicMass\`, \`neutralMass\`, \`ppmError\`, \`inchikey\`, and \`iupacName\`.

\`mz\` is required.
Candidates come in PubChem relevance order. Check a candidate's reference spectra with https://skills.duaer.com/mona.md or https://skills.duaer.com/massbank.md (\`inchikey\`).
To work an unannotated feature step by step, follow https://skills.duaer.com/metabolic-dark-matter.md.

Fields without a value are empty strings or left out.

${credits}

## Related

- https://skills.duaer.com/metabolic-dark-matter.md — Duaer: annotate an unknown feature (metabolic dark matter)
- https://skills.duaer.com/mona.md — Duaer MoNA spectra
- https://skills.duaer.com/massbank.md — Duaer MassBank spectra
- https://skills.duaer.com/compounds.md — Duaer compounds
`,

	spectrum: `---
name: duaer-spectrum
description: >-
  Duaer spectrum by USI. Fetch the peaks of a public mass spectrum by its USI.
  One successful search uses 1 Duaer credit.
---

# Duaer spectrum by USI

Fetch the peaks of a public mass spectrum by its USI. Data comes from GNPS USI.

## When to use

- Fetch the peaks of a public spectrum by USI.
- Get peaks to pass to a spectrum match.

## When not to use

- Find datasets that contain a spectrum. Use https://skills.duaer.com/masst.md.

## Call

\`GET https://api.duaer.com/v1/data/spectrum?usi=mzspec:GNPS:GNPS-LIBRARY:accession:CCMSLIB00005435737\`

${header}

## Parameters

- \`usi\` — required. A USI that starts with \`mzspec:\` (GNPS, MassIVE, MetaboLights, and other public repositories).

## Examples

- \`GET https://api.duaer.com/v1/data/spectrum?usi=mzspec:GNPS:GNPS-LIBRARY:accession:CCMSLIB00005435737\` — peaks of one GNPS library spectrum.

## Result

The response is \`{ "items": [...] }\`. One item with \`source\`, \`title\`, \`url\` (spectrum viewer), \`summary\`, \`usi\`, \`precursorMz\`, \`charge\`, \`peakCount\`, \`peaks\` (\`mz:intensity\` pairs), and \`splash\`.

Pass \`peaks\` to https://skills.duaer.com/massbank.md, or the \`usi\` to https://skills.duaer.com/masst.md.
To work an unannotated feature step by step, follow https://skills.duaer.com/metabolic-dark-matter.md.

Fields without a value are empty strings or left out.

${credits}

## Related

- https://skills.duaer.com/metabolic-dark-matter.md — Duaer: annotate an unknown feature (metabolic dark matter)
- https://skills.duaer.com/massbank.md — Duaer MassBank spectra
- https://skills.duaer.com/masst.md — Duaer MASST
`,

	masst: `---
name: duaer-masst
description: >-
  Duaer MASST. Find where an MS/MS spectrum appears in public metabolomics data with GNPS2 MASST.
  One successful search uses 1 Duaer credit.
---

# Duaer MASST

Find where an MS/MS spectrum appears in public metabolomics data with GNPS2 MASST. Data comes from MASST.

## When to use

- Find public datasets that contain a spectrum.
- Check where a spectrum was seen before.

## When not to use

- Fetch the peaks of a spectrum. Use https://skills.duaer.com/spectrum.md.

## Call

\`GET https://api.duaer.com/v1/data/masst?usi=mzspec:GNPS:GNPS-LIBRARY:accession:CCMSLIB00005435737&library=public&limit=10\`

${header}

## Parameters

Provide \`usi\`, or \`peaks\` with \`precursorMz\`.

- \`usi\` — spectrum to search, such as a https://skills.duaer.com/spectrum.md result.
- \`peaks\` — MS/MS peaks as \`mz:intensity\` pairs separated by spaces, used when \`usi\` is empty.
- \`precursorMz\` — precursor m/z, required with \`peaks\`.
- \`charge\` — Optional. Precursor charge. Default 1.
- \`library\` — Optional. \`public\` (public datasets, default), \`gnpsData\` (GNPS and MassIVE data), or \`gnpsLibrary\` (GNPS reference library).
- \`cosine\` — Optional. Minimum cosine similarity from 0 to 1. Default 0.7.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/masst?usi=mzspec:GNPS:GNPS-LIBRARY:accession:CCMSLIB00005435737&library=public&limit=10\` — datasets with one GNPS library spectrum.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\`, \`title\`, \`url\` (spectrum viewer), \`summary\`, \`usi\`, \`dataset\`, \`libraryAccession\` (GNPS library matches), \`cosine\`, \`matchingPeaks\`, and \`deltaMass\`.

Datasets tell you in which studies, samples, or organisms the unknown spectrum was seen.
A search that does not finish in 45 seconds returns 503 and uses 0 credits.
To work an unannotated feature step by step, follow https://skills.duaer.com/metabolic-dark-matter.md.

Fields without a value are empty strings or left out.

${credits}

## Related

- https://skills.duaer.com/metabolic-dark-matter.md — Duaer: annotate an unknown feature (metabolic dark matter)
- https://skills.duaer.com/spectrum.md — Duaer spectrum by USI
- https://skills.duaer.com/massbank.md — Duaer MassBank spectra
`,

	lincs: `---
name: duaer-lincs
description: >-
  Duaer LINCS. Search LINCS portal datasets.
  One successful search uses 1 Duaer credit.
---

# Duaer LINCS

Search LINCS portal datasets. Data comes from LINCS.

## When to use

- Find LINCS perturbation datasets.
- Look up one LINCS dataset id.

## When not to use

- GEO series. Use https://skills.duaer.com/geo.md.

## Call

\`GET https://api.duaer.com/v1/data/lincs?words=kinase&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as kinase.
- \`id\` — Optional. Id such as LDS-1234.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/lincs?words=kinase&limit=10\` — LINCS datasets matching kinase.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`LINCS\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`lincsId\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/expression.md — Duaer expression
`,

	cellxgene: `---
name: duaer-cellxgene
description: >-
  Duaer CELLxGENE. Search CELLxGENE collections.
  One successful search uses 1 Duaer credit.
---

# Duaer CELLxGENE

Search CELLxGENE collections. Data comes from CELLxGENE.

## When to use

- Find CELLxGENE single-cell collections.
- Look up one collection id.

## When not to use

- Human Cell Atlas projects. Use https://skills.duaer.com/hca.md.

## Call

\`GET https://api.duaer.com/v1/data/cellxgene?words=lung&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as lung.
- \`id\` — Optional. Id such as abc-123.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/cellxgene?words=lung&limit=10\` — CELLxGENE collections matching lung.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`CELLxGENE\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`collectionId\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/expression.md — Duaer expression
`,

	mgrast: `---
name: duaer-mgrast
description: >-
  Duaer MG-RAST. Search MG-RAST metagenome projects.
  One successful search uses 1 Duaer credit.
---

# Duaer MG-RAST

Search MG-RAST metagenome projects. Data comes from MG-RAST.

## When to use

- Find MG-RAST metagenome projects.
- Look up one project id.

## When not to use

- MGnify studies. Use https://skills.duaer.com/mgnify.md.

## Call

\`GET https://api.duaer.com/v1/data/mgrast?words=soil&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as soil.
- \`id\` — Optional. Id such as mgp128.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/mgrast?words=soil&limit=10\` — MG-RAST projects matching soil.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`MG-RAST\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`projectId\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/expression.md — Duaer expression
`,

	galaxy: `---
name: duaer-galaxy
description: >-
  Duaer Galaxy. Search Galaxy tools and version.
  One successful search uses 1 Duaer credit.
---

# Duaer Galaxy

Search Galaxy tools and version. Data comes from Galaxy.

## When to use

- Find Galaxy tools and their versions.
- Look up one tool id.

## When not to use

- nf-core pipelines. Use https://skills.duaer.com/nf-core.md.

## Call

\`GET https://api.duaer.com/v1/data/galaxy?words=bowtie&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as bowtie.
- \`id\` — Optional. Id such as toolshed.g2.bx.psu.edu/repos/devteam/bowtie2/bowtie2/2.5.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/galaxy?words=bowtie&limit=10\` — Galaxy tools matching bowtie.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`Galaxy\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`toolId\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/bio-tools.md — Duaer bio.tools
`,

	'nf-core': `---
name: duaer-nf-core
description: >-
  Duaer nf-core. Search nf-core pipelines.
  One successful search uses 1 Duaer credit.
---

# Duaer nf-core

Search nf-core pipelines. Data comes from nf-core.

## When to use

- Find nf-core pipelines.
- Look up one pipeline.

## When not to use

- Galaxy tools. Use https://skills.duaer.com/galaxy.md.

## Call

\`GET https://api.duaer.com/v1/data/nf-core?words=rnaseq&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as rnaseq.
- \`id\` — Optional. Id such as rnaseq.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/nf-core?words=rnaseq&limit=10\` — nf-core pipelines matching rnaseq.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`nf-core\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`pipelineId\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/workflowhub.md — Duaer WorkflowHub
`,

	re3data: `---
name: duaer-re3data
description: >-
  Duaer re3data. Search research data repositories in re3data.
  One successful search uses 1 Duaer credit.
---

# Duaer re3data

Search research data repositories in re3data. Data comes from re3data.

## When to use

- Find research data repositories in re3data.
- Look up one repository id.

## When not to use

- Datasets themselves. Use https://skills.duaer.com/datacite.md.

## Call

\`GET https://api.duaer.com/v1/data/re3data?words=genomics&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as genomics.
- \`id\` — Optional. Id such as r3d100010468.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/re3data?words=genomics&limit=10\` — re3data repositories matching genomics.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`re3data\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`re3dataId\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/zenodo.md — Duaer Zenodo
`,

	arxiv: `---
name: duaer-arxiv
description: >-
  Duaer arXiv. Search preprints on arXiv.
  One successful search uses 1 Duaer credit.
---

# Duaer arXiv

Search preprints on arXiv. Data comes from arXiv.

## When to use

- Find preprints on arXiv.
- Look up one arXiv id.

## When not to use

- bioRxiv preprints. Use https://skills.duaer.com/biorxiv.md.

## Call

\`GET https://api.duaer.com/v1/data/arxiv?words=transformer&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as transformer.
- \`id\` — Optional. Id such as 1706.03762.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/arxiv?words=transformer&limit=10\` — arXiv preprints matching transformer.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`arXiv\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`arxivId\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/preprints.md — Duaer preprints
`,

	hal: `---
name: duaer-hal
description: >-
  Duaer HAL. Search open archive documents in HAL.
  One successful search uses 1 Duaer credit.
---

# Duaer HAL

Search open archive documents in HAL. Data comes from HAL.

## When to use

- Find documents in the HAL open archive.
- Look up one HAL id.

## When not to use

- OpenAlex papers. Use https://skills.duaer.com/papers.md.

## Call

\`GET https://api.duaer.com/v1/data/hal?words=biologie&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as biologie.
- \`id\` — Optional. Id such as hal-01234567.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/hal?words=biologie&limit=10\` — HAL documents matching biologie.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`HAL\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`halId\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/papers.md — Duaer papers
`,

	huggingface: `---
name: duaer-huggingface
description: >-
  Duaer Hugging Face. Search models on Hugging Face.
  One successful search uses 1 Duaer credit.
---

# Duaer Hugging Face

Search models on Hugging Face. Data comes from Hugging Face.

## When to use

- Find models on Hugging Face.
- Look up one model id.

## When not to use

- Bioinformatics tools. Use https://skills.duaer.com/bio-tools.md.

## Call

\`GET https://api.duaer.com/v1/data/huggingface?words=bert&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as bert.
- \`id\` — Optional. Id such as bert-base-uncased.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/huggingface?words=bert&limit=10\` — Hugging Face models matching bert.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`Hugging Face\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`modelId\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/bio-tools.md — Duaer bio.tools
`,

	openaire: `---
name: duaer-openaire
description: >-
  Duaer OpenAIRE. Search publications in OpenAIRE.
  One successful search uses 1 Duaer credit.
---

# Duaer OpenAIRE

Search publications in OpenAIRE. Data comes from OpenAIRE.

## When to use

- Find publications in OpenAIRE.
- Look up one OpenAIRE record.

## When not to use

- OpenAlex papers. Use https://skills.duaer.com/papers.md.

## Call

\`GET https://api.duaer.com/v1/data/openaire?words=genomics&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as genomics.
- \`id\` — Optional. Id such as 10.1234/ex.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/openaire?words=genomics&limit=10\` — OpenAIRE publications matching genomics.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`OpenAIRE\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`openaireId\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/papers.md — Duaer papers
`,

	'harvard-dataverse': `---
name: duaer-harvard-dataverse
description: >-
  Duaer Harvard Dataverse. Search datasets in Harvard Dataverse.
  One successful search uses 1 Duaer credit.
---

# Duaer Harvard Dataverse

Search datasets in Harvard Dataverse. Data comes from Harvard Dataverse.

## When to use

- Find datasets in Harvard Dataverse.
- Look up one dataset DOI.

## When not to use

- Zenodo records. Use https://skills.duaer.com/zenodo.md.

## Call

\`GET https://api.duaer.com/v1/data/harvard-dataverse?words=climate&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as climate.
- \`id\` — Optional. Id such as doi:10.7910/DVN/ABC.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/harvard-dataverse?words=climate&limit=10\` — Dataverse datasets matching climate.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`Harvard Dataverse\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`datasetId\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/zenodo.md — Duaer Zenodo
`,

	'doaj-journals': `---
name: duaer-doaj-journals
description: >-
  Duaer DOAJ Journals. Search open access journals in DOAJ.
  One successful search uses 1 Duaer credit.
---

# Duaer DOAJ Journals

Search open access journals in DOAJ. Data comes from DOAJ Journals.

## When to use

- Find open access journals in DOAJ.
- Look up one journal by ISSN or id.

## When not to use

- Articles. Use https://skills.duaer.com/doaj.md.

## Call

\`GET https://api.duaer.com/v1/data/doaj-journals?words=biology&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as biology.
- \`id\` — Optional. Id such as 1234-5678.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/doaj-journals?words=biology&limit=10\` — DOAJ journals matching biology.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`DOAJ Journals\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`journalId\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/doaj.md — Duaer DOAJ
`,

	'openalex-sources': `---
name: duaer-openalex-sources
description: >-
  Duaer OpenAlex Sources. Search sources in OpenAlex.
  One successful search uses 1 Duaer credit.
---

# Duaer OpenAlex Sources

Search sources in OpenAlex. Data comes from OpenAlex Sources.

## When to use

- Find journals and other sources in OpenAlex.
- Look up one source id.

## When not to use

- DOAJ journals. Use https://skills.duaer.com/doaj-journals.md.

## Call

\`GET https://api.duaer.com/v1/data/openalex-sources?words=biology&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as biology.
- \`id\` — Optional. Id such as S137773608.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/openalex-sources?words=biology&limit=10\` — OpenAlex sources matching biology.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`OpenAlex Sources\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`openAlexId\` — text.
- \`worksCount\` — number.

${blank}

${credits}

## Related

- https://skills.duaer.com/papers.md — Duaer papers
`,

	'openalex-funders': `---
name: duaer-openalex-funders
description: >-
  Duaer OpenAlex Funders. Search funders in OpenAlex.
  One successful search uses 1 Duaer credit.
---

# Duaer OpenAlex Funders

Search funders in OpenAlex. Data comes from OpenAlex Funders.

## When to use

- Find funders in OpenAlex.
- Look up one funder id.

## When not to use

- Crossref funders. Use https://skills.duaer.com/crossref-funders.md.

## Call

\`GET https://api.duaer.com/v1/data/openalex-funders?words=biology&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as biology.
- \`id\` — Optional. Id such as F4320332161.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/openalex-funders?words=biology&limit=10\` — OpenAlex funders matching biology.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`OpenAlex Funders\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`openAlexId\` — text.
- \`worksCount\` — number.

${blank}

${credits}

## Related

- https://skills.duaer.com/papers.md — Duaer papers
`,

	'openalex-publishers': `---
name: duaer-openalex-publishers
description: >-
  Duaer OpenAlex Publishers. Search publishers in OpenAlex.
  One successful search uses 1 Duaer credit.
---

# Duaer OpenAlex Publishers

Search publishers in OpenAlex. Data comes from OpenAlex Publishers.

## When to use

- Find publishers in OpenAlex.
- Look up one publisher id.

## When not to use

- Sources. Use https://skills.duaer.com/openalex-sources.md.

## Call

\`GET https://api.duaer.com/v1/data/openalex-publishers?words=biology&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as biology.
- \`id\` — Optional. Id such as P4310319965.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/openalex-publishers?words=biology&limit=10\` — OpenAlex publishers matching biology.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`OpenAlex Publishers\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`openAlexId\` — text.
- \`worksCount\` — number.

${blank}

${credits}

## Related

- https://skills.duaer.com/papers.md — Duaer papers
`,

	'openalex-concepts': `---
name: duaer-openalex-concepts
description: >-
  Duaer OpenAlex Concepts. Search concepts in OpenAlex.
  One successful search uses 1 Duaer credit.
---

# Duaer OpenAlex Concepts

Search concepts in OpenAlex. Data comes from OpenAlex Concepts.

## When to use

- Find concepts in OpenAlex.
- Look up one concept id.

## When not to use

- Topics. Use https://skills.duaer.com/openalex-topics.md.

## Call

\`GET https://api.duaer.com/v1/data/openalex-concepts?words=biology&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as biology.
- \`id\` — Optional. Id such as C2775406478.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/openalex-concepts?words=biology&limit=10\` — OpenAlex concepts matching biology.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`OpenAlex Concepts\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`openAlexId\` — text.
- \`worksCount\` — number.

${blank}

${credits}

## Related

- https://skills.duaer.com/papers.md — Duaer papers
`,

	'device-udi': `---
name: duaer-device-udi
description: >-
  Duaer OpenFDA Device UDI. Search FDA device UDI records.
  One successful search uses 1 Duaer credit.
---

# Duaer OpenFDA Device UDI

Search FDA device UDI records. Data comes from OpenFDA Device UDI.

## When to use

- Find FDA device UDI records.
- Look up one device identifier.

## When not to use

- Device classes. Use https://skills.duaer.com/device-classification.md.

## Call

\`GET https://api.duaer.com/v1/data/device-udi?words=catheter&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as catheter.
- \`id\` — Optional. Id such as UDI-123.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/device-udi?words=catheter&limit=10\` — UDI records matching catheter.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`OpenFDA Device UDI\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`udiId\`, \`applicant\`, \`deviceName\`, \`product\`, \`reason\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/device-events.md — Duaer Device events
`,

	'device-pma': `---
name: duaer-device-pma
description: >-
  Duaer OpenFDA Device PMA. Search FDA device PMA approvals.
  One successful search uses 1 Duaer credit.
---

# Duaer OpenFDA Device PMA

Search FDA device PMA approvals. Data comes from OpenFDA Device PMA.

## When to use

- Find FDA PMA approvals.
- Look up one PMA number.

## When not to use

- 510(k) clearances. Use https://skills.duaer.com/device-510k.md.

## Call

\`GET https://api.duaer.com/v1/data/device-pma?words=medtronic&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as medtronic.
- \`id\` — Optional. Id such as P123456.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/device-pma?words=medtronic&limit=10\` — PMA approvals for medtronic.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`OpenFDA Device PMA\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`pmaNumber\`, \`applicant\`, \`deviceName\`, \`product\`, \`reason\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/device-events.md — Duaer Device events
`,

	'device-recall': `---
name: duaer-device-recall
description: >-
  Duaer OpenFDA Device Recall. Search FDA device recalls.
  One successful search uses 1 Duaer credit.
---

# Duaer OpenFDA Device Recall

Search FDA device recalls. Data comes from OpenFDA Device Recall.

## When to use

- Find FDA device recalls.
- Look up one recall.

## When not to use

- Device adverse events. Use https://skills.duaer.com/device-events.md.

## Call

\`GET https://api.duaer.com/v1/data/device-recall?words=pump&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as pump.
- \`id\` — Optional. Id such as 12345.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/device-recall?words=pump&limit=10\` — device recalls matching pump.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`OpenFDA Device Recall\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`recallId\`, \`applicant\`, \`deviceName\`, \`product\`, \`reason\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/device-events.md — Duaer Device events
`,

	'device-classification': `---
name: duaer-device-classification
description: >-
  Duaer OpenFDA Device Class. Search FDA device classifications.
  One successful search uses 1 Duaer credit.
---

# Duaer OpenFDA Device Class

Search FDA device classifications. Data comes from OpenFDA Device Class.

## When to use

- Find FDA device classes and product codes.
- Look up one product code.

## When not to use

- UDI records. Use https://skills.duaer.com/device-udi.md.

## Call

\`GET https://api.duaer.com/v1/data/device-classification?words=monitor&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as monitor.
- \`id\` — Optional. Id such as DQA.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/device-classification?words=monitor&limit=10\` — device classes matching monitor.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`OpenFDA Device Class\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`productCode\`, \`applicant\`, \`deviceName\`, \`product\`, \`reason\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/device-events.md — Duaer Device events
`,

	'animal-events': `---
name: duaer-animal-events
description: >-
  Duaer OpenFDA Animal Events. Search FDA animal drug adverse events.
  One successful search uses 1 Duaer credit.
---

# Duaer OpenFDA Animal Events

Search FDA animal drug adverse events. Data comes from OpenFDA Animal Events.

## When to use

- Find FDA animal drug adverse event reports.
- Look up one report id.

## When not to use

- Human drug events. Use https://skills.duaer.com/adverse-events.md.

## Call

\`GET https://api.duaer.com/v1/data/animal-events?words=dog&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as dog.
- \`id\` — Optional. Id such as USA-123.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/animal-events?words=dog&limit=10\` — animal events mentioning dog.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`OpenFDA Animal Events\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`aerId\`, \`applicant\`, \`deviceName\`, \`product\`, \`reason\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/device-events.md — Duaer Device events
`,

	'food-events': `---
name: duaer-food-events
description: >-
  Duaer OpenFDA Food Events. Search FDA food adverse events.
  One successful search uses 1 Duaer credit.
---

# Duaer OpenFDA Food Events

Search FDA food adverse events. Data comes from OpenFDA Food Events.

## When to use

- Find FDA food adverse event reports.
- Look up one report id.

## When not to use

- Food recalls. Use https://skills.duaer.com/food-enforcement.md.

## Call

\`GET https://api.duaer.com/v1/data/food-events?words=allergy&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as allergy.
- \`id\` — Optional. Id such as 100000.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/food-events?words=allergy&limit=10\` — food events mentioning allergy.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`OpenFDA Food Events\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`reportNumber\`, \`applicant\`, \`deviceName\`, \`product\`, \`reason\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/device-events.md — Duaer Device events
`,

	tobacco: `---
name: duaer-tobacco
description: >-
  Duaer OpenFDA Tobacco. Search FDA tobacco problem reports.
  One successful search uses 1 Duaer credit.
---

# Duaer OpenFDA Tobacco

Search FDA tobacco problem reports. Data comes from OpenFDA Tobacco.

## When to use

- Find FDA tobacco product problem reports.
- Look up one report id.

## When not to use

- Device events. Use https://skills.duaer.com/device-events.md.

## Call

\`GET https://api.duaer.com/v1/data/tobacco?words=battery&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as battery.
- \`id\` — Optional. Id such as TOB-1.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/tobacco?words=battery&limit=10\` — tobacco reports mentioning battery.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`OpenFDA Tobacco\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`reportId\`, \`applicant\`, \`deviceName\`, \`product\`, \`reason\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/device-events.md — Duaer Device events
`,

	rxterms: `---
name: duaer-rxterms
description: >-
  Duaer RxTerms. Search drug terms in RxTerms.
  One successful search uses 1 Duaer credit.
---

# Duaer RxTerms

Search drug terms in RxTerms. Data comes from RxTerms.

## When to use

- Find drug names and strengths in RxTerms.
- Pick a prescribable drug term.

## When not to use

- RxNorm concepts. Use https://skills.duaer.com/rxnorm.md.

## Call

\`GET https://api.duaer.com/v1/data/rxterms?words=aspirin&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as aspirin.
- \`id\` — Optional. Id such as 1191.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/rxterms?words=aspirin&limit=10\` — RxTerms entries for aspirin.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`RxTerms\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`rxcui\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/rxnorm.md — Duaer RxNorm
`,

	'ncbi-assembly': `---
name: duaer-ncbi-assembly
description: >-
  Duaer NCBI Assembly. Search genome assemblies in NCBI.
  One successful search uses 1 Duaer credit.
---

# Duaer NCBI Assembly

Search genome assemblies in NCBI. Data comes from NCBI Assembly.

## When to use

- Find genome assemblies in NCBI.
- Look up one assembly accession.

## When not to use

- UCSC assemblies. Use https://skills.duaer.com/ucsc.md.

## Call

\`GET https://api.duaer.com/v1/data/ncbi-assembly?words=GRCh38&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as GRCh38.
- \`id\` — Optional. Id such as 12345.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/ncbi-assembly?words=GRCh38&limit=10\` — assemblies matching GRCh38.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`NCBI Assembly\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`assemblyId\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/genes.md — Duaer genes
`,

	'ncbi-bioproject': `---
name: duaer-ncbi-bioproject
description: >-
  Duaer NCBI BioProject. Search BioProjects in NCBI.
  One successful search uses 1 Duaer credit.
---

# Duaer NCBI BioProject

Search BioProjects in NCBI. Data comes from NCBI BioProject.

## When to use

- Find BioProjects in NCBI.
- Look up one BioProject accession.

## When not to use

- Sequencing runs. Use https://skills.duaer.com/ncbi-sra.md.

## Call

\`GET https://api.duaer.com/v1/data/ncbi-bioproject?words=human%20microbiome&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as human microbiome.
- \`id\` — Optional. Id such as 12345.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/ncbi-bioproject?words=human%20microbiome&limit=10\` — BioProjects matching human microbiome.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`NCBI BioProject\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`bioprojectId\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/genes.md — Duaer genes
`,

	'ncbi-sra': `---
name: duaer-ncbi-sra
description: >-
  Duaer NCBI SRA. Search sequencing runs in NCBI SRA.
  One successful search uses 1 Duaer credit.
---

# Duaer NCBI SRA

Search sequencing runs in NCBI SRA. Data comes from NCBI SRA.

## When to use

- Find sequencing runs in SRA.
- Look up one SRA accession.

## When not to use

- BioProjects. Use https://skills.duaer.com/ncbi-bioproject.md.

## Call

\`GET https://api.duaer.com/v1/data/ncbi-sra?words=RNA-seq&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as RNA-seq.
- \`id\` — Optional. Id such as 12345.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/ncbi-sra?words=RNA-seq&limit=10\` — SRA records matching RNA-seq.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`NCBI SRA\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`sraId\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/genes.md — Duaer genes
`,

	'ncbi-gtr': `---
name: duaer-ncbi-gtr
description: >-
  Duaer NCBI GTR. Search genetic tests in NCBI GTR.
  One successful search uses 1 Duaer credit.
---

# Duaer NCBI GTR

Search genetic tests in NCBI GTR. Data comes from NCBI GTR.

## When to use

- Find genetic tests in NCBI GTR.
- Look up one GTR test.

## When not to use

- Gene panels. Use https://skills.duaer.com/panelapp.md.

## Call

\`GET https://api.duaer.com/v1/data/ncbi-gtr?words=BRCA1&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as BRCA1.
- \`id\` — Optional. Id such as 12345.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/ncbi-gtr?words=BRCA1&limit=10\` — GTR tests for BRCA1.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`NCBI GTR\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`gtrId\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/genes.md — Duaer genes
`,

	'ncbi-medgen': `---
name: duaer-ncbi-medgen
description: >-
  Duaer NCBI MedGen. Search MedGen concepts in NCBI.
  One successful search uses 1 Duaer credit.
---

# Duaer NCBI MedGen

Search MedGen concepts in NCBI. Data comes from NCBI MedGen.

## When to use

- Find MedGen concepts for a condition.
- Look up one MedGen id.

## When not to use

- HPO phenotypes. Use https://skills.duaer.com/phenotypes.md.

## Call

\`GET https://api.duaer.com/v1/data/ncbi-medgen?words=diabetes&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as diabetes.
- \`id\` — Optional. Id such as 12345.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/ncbi-medgen?words=diabetes&limit=10\` — MedGen concepts matching diabetes.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`NCBI MedGen\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`medgenId\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/genes.md — Duaer genes
`,

	'ncbi-variation': `---
name: duaer-ncbi-variation
description: >-
  Duaer NCBI Variation. Look up RefSNP records in NCBI Variation.
  One successful search uses 1 Duaer credit.
---

# Duaer NCBI Variation

Look up RefSNP records in NCBI Variation. Data comes from NCBI Variation.

## When to use

- Look up a RefSNP record by number.
- Confirm a RefSNP record exists.

## When not to use

- Clinical significance. Use https://skills.duaer.com/clinvar.md.

## Call

\`GET https://api.duaer.com/v1/data/ncbi-variation?words=7412&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as 7412.
- \`id\` — Optional. Id such as 7412.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/ncbi-variation?words=7412&limit=10\` — RefSNP 7412.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`NCBI Variation\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`refsnpId\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/variants.md — Duaer variants
`,

	dbvar: `---
name: duaer-dbvar
description: >-
  Duaer dbVar. Search structural variants in dbVar.
  One successful search uses 1 Duaer credit.
---

# Duaer dbVar

Search structural variants in dbVar. Data comes from dbVar.

## When to use

- Find structural variants in dbVar.
- Look up one dbVar id.

## When not to use

- Small variants. Use https://skills.duaer.com/variants.md.

## Call

\`GET https://api.duaer.com/v1/data/dbvar?words=deletion&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as deletion.
- \`id\` — Optional. Id such as 12345.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/dbvar?words=deletion&limit=10\` — dbVar records matching deletion.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`dbVar\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`dbvarId\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/genes.md — Duaer genes
`,

	homologene: `---
name: duaer-homologene
description: >-
  Duaer HomoloGene. Search gene homologs in HomoloGene.
  One successful search uses 1 Duaer credit.
---

# Duaer HomoloGene

Search gene homologs in HomoloGene. Data comes from HomoloGene.

## When to use

- Find homolog groups in HomoloGene.
- Look up one HomoloGene id.

## When not to use

- Orthologs by species. Use https://skills.duaer.com/orthologs.md.

## Call

\`GET https://api.duaer.com/v1/data/homologene?words=BRCA1&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as BRCA1.
- \`id\` — Optional. Id such as 12345.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/homologene?words=BRCA1&limit=10\` — HomoloGene groups for BRCA1.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`HomoloGene\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`homologeneId\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/genes.md — Duaer genes
`,

	'gtex-eqtl': `---
name: duaer-gtex-eqtl
description: >-
  Duaer GTEx eQTL. Search single-tissue eQTLs in GTEx.
  One successful search uses 1 Duaer credit.
---

# Duaer GTEx eQTL

Search single-tissue eQTLs in GTEx. Data comes from GTEx eQTL.

## When to use

- Find single-tissue eQTLs for a gene in GTEx.
- Check which variants affect expression of a gene.

## When not to use

- Tissue expression. Use https://skills.duaer.com/gtex-expression.md.

## Call

\`GET https://api.duaer.com/v1/data/gtex-eqtl?words=BRCA1&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as BRCA1.
- \`id\` — Optional. Id such as ENSG00000012048.20.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/gtex-eqtl?words=BRCA1&limit=10\` — GTEx eQTLs for BRCA1.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`GTEx eQTL\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`snpId\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/expression.md — Duaer expression
`,

	scop: `---
name: duaer-scop
description: >-
  Duaer SCOP. Search SCOP domain mappings from PDBe.
  One successful search uses 1 Duaer credit.
---

# Duaer SCOP

Search SCOP domain mappings from PDBe. Data comes from SCOP.

## When to use

- Find SCOP domain mappings for a PDB entry.
- Look up one SCOP id.

## When not to use

- InterPro domains. Use https://skills.duaer.com/interpro.md.

## Call

\`GET https://api.duaer.com/v1/data/scop?words=1cbs&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as 1cbs.
- \`id\` — Optional. Id such as 1cbs.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/scop?words=1cbs&limit=10\` — SCOP domains of PDB 1cbs.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`SCOP\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`scopId\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/structures.md — Duaer structures
`,

	pombase: `---
name: duaer-pombase
description: >-
  Duaer PomBase. Look up fission yeast genes in PomBase.
  One successful search uses 1 Duaer credit.
---

# Duaer PomBase

Look up fission yeast genes in PomBase. Data comes from PomBase.

## When to use

- Look up fission yeast genes in PomBase.
- Find a gene by PomBase id.

## When not to use

- Budding yeast genes. Use https://skills.duaer.com/sgd.md.

## Call

\`GET https://api.duaer.com/v1/data/pombase?words=cdc2&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as cdc2.
- \`id\` — Optional. Id such as SPBC11B10.09.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/pombase?words=cdc2&limit=10\` — PomBase genes matching cdc2.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`PomBase\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`geneId\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/genes.md — Duaer genes
`,

	mgi: `---
name: duaer-mgi
description: >-
  Duaer MGI. Search mouse genes in MGI.
  One successful search uses 1 Duaer credit.
---

# Duaer MGI

Search mouse genes in MGI. Data comes from MGI.

## When to use

- Find mouse genes in MGI.
- Look up one MGI id.

## When not to use

- Rat genes. Use https://skills.duaer.com/rgd.md.

## Call

\`GET https://api.duaer.com/v1/data/mgi?words=Pax6&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as Pax6.
- \`id\` — Optional. Id such as MGI:97490.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/mgi?words=Pax6&limit=10\` — MGI genes matching Pax6.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`MGI\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`mgiId\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/genes.md — Duaer genes
`,

	clo: `---
name: duaer-clo
description: >-
  Duaer CLO. Search cell line ontology terms from CLO.
  One successful search uses 1 Duaer credit.
---

# Duaer CLO

Search cell line ontology terms from CLO. Data comes from CLO.

## When to use

- Find cell line ontology terms and CLO ids.
- Look up one CLO id.

## When not to use

- Cell line records. Use https://skills.duaer.com/cell-lines.md.

## Call

\`GET https://api.duaer.com/v1/data/clo?words=cell&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as cell.
- \`id\` — Optional. Id such as CLO:0000001.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/clo?words=cell&limit=10\` — CLO terms matching cell.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`CLO\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`cloId\`, \`description\`, \`synonyms\`, \`iri\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/phenotypes.md — Duaer phenotypes
`,

	ecto: `---
name: duaer-ecto
description: >-
  Duaer ECTO. Search environmental exposure terms from ECTO.
  One successful search uses 1 Duaer credit.
---

# Duaer ECTO

Search environmental exposure terms from ECTO. Data comes from ECTO.

## When to use

- Find environmental exposure terms and ECTO ids.
- Look up one ECTO id.

## When not to use

- Environment terms. Use https://skills.duaer.com/envo.md.

## Call

\`GET https://api.duaer.com/v1/data/ecto?words=exposure&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as exposure.
- \`id\` — Optional. Id such as ECTO:0000001.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/ecto?words=exposure&limit=10\` — ECTO terms matching exposure.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`ECTO\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`ectoId\`, \`description\`, \`synonyms\`, \`iri\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/phenotypes.md — Duaer phenotypes
`,

	ro: `---
name: duaer-ro
description: >-
  Duaer RO. Search relation ontology terms from RO.
  One successful search uses 1 Duaer credit.
---

# Duaer RO

Search relation ontology terms from RO. Data comes from RO.

## When to use

- Find relation terms and RO ids.
- Look up one RO id.

## When not to use

- Other ontology terms. Use https://skills.duaer.com/ols.md.

## Call

\`GET https://api.duaer.com/v1/data/ro?words=part%20of&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as part of.
- \`id\` — Optional. Id such as RO:0000052.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/ro?words=part%20of&limit=10\` — RO terms matching part of.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`RO\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`roId\`, \`description\`, \`synonyms\`, \`iri\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/phenotypes.md — Duaer phenotypes
`,

	fbbt: `---
name: duaer-fbbt
description: >-
  Duaer FBbt. Search Drosophila anatomy from FBbt.
  One successful search uses 1 Duaer credit.
---

# Duaer FBbt

Search Drosophila anatomy from FBbt. Data comes from FBbt.

## When to use

- Find Drosophila anatomy terms and FBbt ids.
- Look up one FBbt id.

## When not to use

- Drosophila genes. Use https://skills.duaer.com/flybase.md.

## Call

\`GET https://api.duaer.com/v1/data/fbbt?words=neuron&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as neuron.
- \`id\` — Optional. Id such as FBbt:00005106.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/fbbt?words=neuron&limit=10\` — FBbt terms matching neuron.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`FBbt\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`fbbtId\`, \`description\`, \`synonyms\`, \`iri\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/phenotypes.md — Duaer phenotypes
`,

	zfa: `---
name: duaer-zfa
description: >-
  Duaer ZFA. Search zebrafish anatomy from ZFA.
  One successful search uses 1 Duaer credit.
---

# Duaer ZFA

Search zebrafish anatomy from ZFA. Data comes from ZFA.

## When to use

- Find zebrafish anatomy terms and ZFA ids.
- Look up one ZFA id.

## When not to use

- Zebrafish genes. Use https://skills.duaer.com/zfin.md.

## Call

\`GET https://api.duaer.com/v1/data/zfa?words=fin&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as fin.
- \`id\` — Optional. Id such as ZFA:0000108.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/zfa?words=fin&limit=10\` — ZFA terms matching fin.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`ZFA\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`zfaId\`, \`description\`, \`synonyms\`, \`iri\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/phenotypes.md — Duaer phenotypes
`,

	wbbt: `---
name: duaer-wbbt
description: >-
  Duaer WBbt. Search C. elegans anatomy from WBbt.
  One successful search uses 1 Duaer credit.
---

# Duaer WBbt

Search C. elegans anatomy from WBbt. Data comes from WBbt.

## When to use

- Find C. elegans anatomy terms and WBbt ids.
- Look up one WBbt id.

## When not to use

- C. elegans genes. Use https://skills.duaer.com/wormbase.md.

## Call

\`GET https://api.duaer.com/v1/data/wbbt?words=neuron&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as neuron.
- \`id\` — Optional. Id such as WBbt:0005759.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/wbbt?words=neuron&limit=10\` — WBbt terms matching neuron.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`WBbt\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`wbbtId\`, \`description\`, \`synonyms\`, \`iri\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/phenotypes.md — Duaer phenotypes
`,

	xao: `---
name: duaer-xao
description: >-
  Duaer XAO. Search Xenopus anatomy from XAO.
  One successful search uses 1 Duaer credit.
---

# Duaer XAO

Search Xenopus anatomy from XAO. Data comes from XAO.

## When to use

- Find Xenopus anatomy terms and XAO ids.
- Look up one XAO id.

## When not to use

- Cross-species anatomy. Use https://skills.duaer.com/uberon.md.

## Call

\`GET https://api.duaer.com/v1/data/xao?words=heart&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as heart.
- \`id\` — Optional. Id such as XAO:0000001.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/xao?words=heart&limit=10\` — XAO terms matching heart.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`XAO\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`xaoId\`, \`description\`, \`synonyms\`, \`iri\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/phenotypes.md — Duaer phenotypes
`,

	envo: `---
name: duaer-envo
description: >-
  Duaer ENVO. Search environment terms from ENVO.
  One successful search uses 1 Duaer credit.
---

# Duaer ENVO

Search environment terms from ENVO. Data comes from ENVO.

## When to use

- Find environment terms and ENVO ids.
- Look up one ENVO id.

## When not to use

- Exposure terms. Use https://skills.duaer.com/ecto.md.

## Call

\`GET https://api.duaer.com/v1/data/envo?words=soil&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as soil.
- \`id\` — Optional. Id such as ENVO:00001998.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/envo?words=soil&limit=10\` — ENVO terms matching soil.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`ENVO\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`envoId\`, \`description\`, \`synonyms\`, \`iri\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/phenotypes.md — Duaer phenotypes
`,

	foodon: `---
name: duaer-foodon
description: >-
  Duaer FOODON. Search food ontology terms from FOODON.
  One successful search uses 1 Duaer credit.
---

# Duaer FOODON

Search food ontology terms from FOODON. Data comes from FOODON.

## When to use

- Find food terms and FOODON ids.
- Look up one FOODON id.

## When not to use

- Food products and nutrients. Use https://skills.duaer.com/usda-fdc.md.

## Call

\`GET https://api.duaer.com/v1/data/foodon?words=bread&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as bread.
- \`id\` — Optional. Id such as FOODON:00002403.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/foodon?words=bread&limit=10\` — FOODON terms matching bread.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`FOODON\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`foodonId\`, \`description\`, \`synonyms\`, \`iri\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/phenotypes.md — Duaer phenotypes
`,

	oae: `---
name: duaer-oae
description: >-
  Duaer OAE. Search adverse event terms from OAE.
  One successful search uses 1 Duaer credit.
---

# Duaer OAE

Search adverse event terms from OAE. Data comes from OAE.

## When to use

- Find adverse event terms and OAE ids.
- Look up one OAE id.

## When not to use

- Drug adverse event reports. Use https://skills.duaer.com/adverse-events.md.

## Call

\`GET https://api.duaer.com/v1/data/oae?words=fever&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as fever.
- \`id\` — Optional. Id such as OAE:0000001.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/oae?words=fever&limit=10\` — OAE terms matching fever.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`OAE\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`oaeId\`, \`description\`, \`synonyms\`, \`iri\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/phenotypes.md — Duaer phenotypes
`,

	ido: `---
name: duaer-ido
description: >-
  Duaer IDO. Search infectious disease terms from IDO.
  One successful search uses 1 Duaer credit.
---

# Duaer IDO

Search infectious disease terms from IDO. Data comes from IDO.

## When to use

- Find infectious disease terms and IDO ids.
- Look up one IDO id.

## When not to use

- Coronavirus terms. Use https://skills.duaer.com/cido.md.

## Call

\`GET https://api.duaer.com/v1/data/ido?words=infection&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as infection.
- \`id\` — Optional. Id such as IDO:0000001.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/ido?words=infection&limit=10\` — IDO terms matching infection.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`IDO\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`idoId\`, \`description\`, \`synonyms\`, \`iri\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/phenotypes.md — Duaer phenotypes
`,

	cido: `---
name: duaer-cido
description: >-
  Duaer CIDO. Search coronavirus terms from CIDO.
  One successful search uses 1 Duaer credit.
---

# Duaer CIDO

Search coronavirus terms from CIDO. Data comes from CIDO.

## When to use

- Find coronavirus terms and CIDO ids.
- Look up one CIDO id.

## When not to use

- General infectious disease terms. Use https://skills.duaer.com/ido.md.

## Call

\`GET https://api.duaer.com/v1/data/cido?words=coronavirus&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as coronavirus.
- \`id\` — Optional. Id such as CIDO:0000001.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/cido?words=coronavirus&limit=10\` — CIDO terms matching coronavirus.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`CIDO\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`cidoId\`, \`description\`, \`synonyms\`, \`iri\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/phenotypes.md — Duaer phenotypes
`,

	agro: `---
name: duaer-agro
description: >-
  Duaer AGRO. Search agronomy terms from AGRO.
  One successful search uses 1 Duaer credit.
---

# Duaer AGRO

Search agronomy terms from AGRO. Data comes from AGRO.

## When to use

- Find agronomy terms and AGRO ids.
- Look up one AGRO id.

## When not to use

- Plant traits. Use https://skills.duaer.com/to.md.

## Call

\`GET https://api.duaer.com/v1/data/agro?words=fertilizer&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as fertilizer.
- \`id\` — Optional. Id such as AGRO:0000001.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/agro?words=fertilizer&limit=10\` — AGRO terms matching fertilizer.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`AGRO\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`agroId\`, \`description\`, \`synonyms\`, \`iri\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/phenotypes.md — Duaer phenotypes
`,

	po: `---
name: duaer-po
description: >-
  Duaer PO. Search plant ontology terms from PO.
  One successful search uses 1 Duaer credit.
---

# Duaer PO

Search plant ontology terms from PO. Data comes from PO.

## When to use

- Find plant anatomy and stage terms and PO ids.
- Look up one PO id.

## When not to use

- Plant traits. Use https://skills.duaer.com/to.md.

## Call

\`GET https://api.duaer.com/v1/data/po?words=leaf&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as leaf.
- \`id\` — Optional. Id such as PO:0009025.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/po?words=leaf&limit=10\` — PO terms matching leaf.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`PO\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`poId\`, \`description\`, \`synonyms\`, \`iri\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/phenotypes.md — Duaer phenotypes
`,

	to: `---
name: duaer-to
description: >-
  Duaer TO. Search plant trait terms from TO.
  One successful search uses 1 Duaer credit.
---

# Duaer TO

Search plant trait terms from TO. Data comes from TO.

## When to use

- Find plant trait terms and TO ids.
- Look up one TO id.

## When not to use

- Plant anatomy. Use https://skills.duaer.com/po.md.

## Call

\`GET https://api.duaer.com/v1/data/to?words=yield&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as yield.
- \`id\` — Optional. Id such as TO:0000371.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/to?words=yield&limit=10\` — TO terms matching yield.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`TO\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`toId\`, \`description\`, \`synonyms\`, \`iri\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/phenotypes.md — Duaer phenotypes
`,

	chmo: `---
name: duaer-chmo
description: >-
  Duaer CHMO. Search chemical methods from CHMO.
  One successful search uses 1 Duaer credit.
---

# Duaer CHMO

Search chemical methods from CHMO. Data comes from CHMO.

## When to use

- Find chemical method terms and CHMO ids.
- Look up one CHMO id.

## When not to use

- Mass spectrometry terms. Use https://skills.duaer.com/ms.md.

## Call

\`GET https://api.duaer.com/v1/data/chmo?words=chromatography&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as chromatography.
- \`id\` — Optional. Id such as CHMO:0001000.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/chmo?words=chromatography&limit=10\` — CHMO terms matching chromatography.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`CHMO\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`chmoId\`, \`description\`, \`synonyms\`, \`iri\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/phenotypes.md — Duaer phenotypes
`,

	ms: `---
name: duaer-ms
description: >-
  Duaer MS. Search mass spectrometry terms from MS.
  One successful search uses 1 Duaer credit.
---

# Duaer MS

Search mass spectrometry terms from MS. Data comes from MS.

## When to use

- Find mass spectrometry terms and MS ids.
- Look up one MS id.

## When not to use

- Chemical methods. Use https://skills.duaer.com/chmo.md.

## Call

\`GET https://api.duaer.com/v1/data/ms?words=spectrum&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as spectrum.
- \`id\` — Optional. Id such as MS:1000073.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/ms?words=spectrum&limit=10\` — MS terms matching spectrum.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`MS\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`msId\`, \`description\`, \`synonyms\`, \`iri\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/phenotypes.md — Duaer phenotypes
`,

	stato: `---
name: duaer-stato
description: >-
  Duaer STATO. Search statistics terms from STATO.
  One successful search uses 1 Duaer credit.
---

# Duaer STATO

Search statistics terms from STATO. Data comes from STATO.

## When to use

- Find statistics terms and STATO ids.
- Look up one STATO id.

## When not to use

- Other ontology terms. Use https://skills.duaer.com/ols.md.

## Call

\`GET https://api.duaer.com/v1/data/stato?words=p-value&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as p-value.
- \`id\` — Optional. Id such as STATO:0000001.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/stato?words=p-value&limit=10\` — STATO terms matching p-value.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`STATO\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`statoId\`, \`description\`, \`synonyms\`, \`iri\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/phenotypes.md — Duaer phenotypes
`,

	duo: `---
name: duaer-duo
description: >-
  Duaer DUO. Search data use ontology terms from DUO.
  One successful search uses 1 Duaer credit.
---

# Duaer DUO

Search data use ontology terms from DUO. Data comes from DUO.

## When to use

- Find data use terms and DUO ids.
- Look up one DUO id.

## When not to use

- Information artifact terms. Use https://skills.duaer.com/iao.md.

## Call

\`GET https://api.duaer.com/v1/data/duo?words=consent&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as consent.
- \`id\` — Optional. Id such as DUO:0000001.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/duo?words=consent&limit=10\` — DUO terms matching consent.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`DUO\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`duoId\`, \`description\`, \`synonyms\`, \`iri\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/phenotypes.md — Duaer phenotypes
`,

	iao: `---
name: duaer-iao
description: >-
  Duaer IAO. Search information artifact terms from IAO.
  One successful search uses 1 Duaer credit.
---

# Duaer IAO

Search information artifact terms from IAO. Data comes from IAO.

## When to use

- Find information artifact terms and IAO ids.
- Look up one IAO id.

## When not to use

- Data use terms. Use https://skills.duaer.com/duo.md.

## Call

\`GET https://api.duaer.com/v1/data/iao?words=document&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as document.
- \`id\` — Optional. Id such as IAO:0000001.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/iao?words=document&limit=10\` — IAO terms matching document.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`IAO\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`iaoId\`, \`description\`, \`synonyms\`, \`iri\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/phenotypes.md — Duaer phenotypes
`,

	sio: `---
name: duaer-sio
description: >-
  Duaer SIO. Search semantics science terms from SIO.
  One successful search uses 1 Duaer credit.
---

# Duaer SIO

Search semantics science terms from SIO. Data comes from SIO.

## When to use

- Find semantic science terms and SIO ids.
- Look up one SIO id.

## When not to use

- Other ontology terms. Use https://skills.duaer.com/ols.md.

## Call

\`GET https://api.duaer.com/v1/data/sio?words=process&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as process.
- \`id\` — Optional. Id such as SIO:0000001.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/sio?words=process&limit=10\` — SIO terms matching process.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`SIO\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`sioId\`, \`description\`, \`synonyms\`, \`iri\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/phenotypes.md — Duaer phenotypes
`,

	cheminf: `---
name: duaer-cheminf
description: >-
  Duaer CHEMINF. Search chemical information terms from CHEMINF.
  One successful search uses 1 Duaer credit.
---

# Duaer CHEMINF

Search chemical information terms from CHEMINF. Data comes from CHEMINF.

## When to use

- Find chemical information terms and CHEMINF ids.
- Look up one CHEMINF id.

## When not to use

- Chemical entities. Use https://skills.duaer.com/chebi.md.

## Call

\`GET https://api.duaer.com/v1/data/cheminf?words=descriptor&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as descriptor.
- \`id\` — Optional. Id such as CHEMINF:000000.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/cheminf?words=descriptor&limit=10\` — CHEMINF terms matching descriptor.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`CHEMINF\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`cheminfId\`, \`description\`, \`synonyms\`, \`iri\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/phenotypes.md — Duaer phenotypes
`,

	maxo: `---
name: duaer-maxo
description: >-
  Duaer MAXO. Search Medical Action Ontology terms in OLS.
  One successful search uses 1 Duaer credit.
---

# Duaer MAXO

Search Medical Action Ontology terms in OLS. Data comes from MAXO.

## When to use

- Find medical action terms and MAXO ids.
- Look up one MAXO id.

## When not to use

- Clinical terms. Use https://skills.duaer.com/ncit.md.

## Call

\`GET https://api.duaer.com/v1/data/maxo?words=chemotherapy&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as chemotherapy.
- \`id\` — Optional. Id such as MAXO:0000647.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/maxo?words=chemotherapy&limit=10\` — MAXO terms matching chemotherapy.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`MAXO\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`maxoId\`, \`description\`, \`synonyms\`, \`iri\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/phenotypes.md — Duaer phenotypes
- https://skills.duaer.com/mpath.md — Duaer MPATH
- https://skills.duaer.com/obi.md — Duaer OBI
`,

	eco: `---
name: duaer-eco
description: >-
  Duaer ECO. Search Evidence and Conclusion Ontology terms in OLS.
  One successful search uses 1 Duaer credit.
---

# Duaer ECO

Search Evidence and Conclusion Ontology terms in OLS. Data comes from ECO.

## When to use

- Find evidence terms and ECO ids.
- Look up one ECO id.

## When not to use

- Other ontology terms. Use https://skills.duaer.com/ols.md.

## Call

\`GET https://api.duaer.com/v1/data/eco?words=electrophysiology&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as electrophysiology.
- \`id\` — Optional. Id such as ECO:0000164.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/eco?words=electrophysiology&limit=10\` — ECO terms matching electrophysiology.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`ECO\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`ecoId\`, \`description\`, \`synonyms\`, \`iri\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/gene-ontology.md — Duaer Gene Ontology
- https://skills.duaer.com/obi.md — Duaer OBI
`,

	peco: `---
name: duaer-peco
description: >-
  Duaer PECO. Search Plant Experimental Conditions Ontology terms in OLS.
  One successful search uses 1 Duaer credit.
---

# Duaer PECO

Search Plant Experimental Conditions Ontology terms in OLS. Data comes from PECO.

## When to use

- Find plant experimental condition terms and PECO ids.
- Look up one PECO id.

## When not to use

- Plant traits. Use https://skills.duaer.com/to.md.

## Call

\`GET https://api.duaer.com/v1/data/peco?words=drought&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as drought.
- \`id\` — Optional. Id such as PECO:0007008.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/peco?words=drought&limit=10\` — PECO terms matching drought.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`PECO\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`pecoId\`, \`description\`, \`synonyms\`, \`iri\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/envo.md — Duaer ENVO
- https://skills.duaer.com/po.md — Duaer PO
- https://skills.duaer.com/to.md — Duaer TO
`,

	nbo: `---
name: duaer-nbo
description: >-
  Duaer NBO. Search Neuro Behavior Ontology terms in OLS.
  One successful search uses 1 Duaer credit.
---

# Duaer NBO

Search Neuro Behavior Ontology terms in OLS. Data comes from NBO.

## When to use

- Find behavior terms and NBO ids.
- Look up one NBO id.

## When not to use

- Mammalian phenotypes. Use https://skills.duaer.com/mp.md.

## Call

\`GET https://api.duaer.com/v1/data/nbo?words=anxiety&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as anxiety.
- \`id\` — Optional. Id such as NBO:0000010.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/nbo?words=anxiety&limit=10\` — NBO terms matching anxiety.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`NBO\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`nboId\`, \`description\`, \`synonyms\`, \`iri\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/phenotypes.md — Duaer phenotypes
- https://skills.duaer.com/mp.md — Duaer MP
`,

	geno: `---
name: duaer-geno
description: >-
  Duaer GENO. Search Genotype Ontology terms in OLS.
  One successful search uses 1 Duaer credit.
---

# Duaer GENO

Search Genotype Ontology terms in OLS. Data comes from GENO.

## When to use

- Find genotype terms and GENO ids.
- Look up one GENO id.

## When not to use

- Sequence features. Use https://skills.duaer.com/sequence-ontology.md.

## Call

\`GET https://api.duaer.com/v1/data/geno?words=genotype&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as genotype.
- \`id\` — Optional. Id such as GENO:0000000.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/geno?words=genotype&limit=10\` — GENO terms matching genotype.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`GENO\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`genoId\`, \`description\`, \`synonyms\`, \`iri\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/sequence-ontology.md — Duaer Sequence Ontology
- https://skills.duaer.com/variants.md — Duaer variants
`,

	symp: `---
name: duaer-symp
description: >-
  Duaer SYMP. Search Symptom Ontology terms in OLS.
  One successful search uses 1 Duaer credit.
---

# Duaer SYMP

Search Symptom Ontology terms in OLS. Data comes from SYMP.

## When to use

- Find symptom terms and SYMP ids.
- Look up one SYMP id.

## When not to use

- Clinical phenotypes. Use https://skills.duaer.com/phenotypes.md.

## Call

\`GET https://api.duaer.com/v1/data/symp?words=fever&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as fever.
- \`id\` — Optional. Id such as SYMP:0000001.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/symp?words=fever&limit=10\` — SYMP terms matching fever.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`SYMP\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`sympId\`, \`description\`, \`synonyms\`, \`iri\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/phenotypes.md — Duaer phenotypes
- https://skills.duaer.com/diseases.md — Duaer diseases
`,

	upheno: `---
name: duaer-upheno
description: >-
  Duaer uPheno. Search Unified Phenotype Ontology terms in OLS.
  One successful search uses 1 Duaer credit.
---

# Duaer uPheno

Search Unified Phenotype Ontology terms in OLS. Data comes from uPheno.

## When to use

- Find cross-species phenotype terms and uPheno ids.
- Look up one uPheno id.

## When not to use

- Human phenotypes. Use https://skills.duaer.com/phenotypes.md.

## Call

\`GET https://api.duaer.com/v1/data/upheno?words=abnormal&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as abnormal.
- \`id\` — Optional. Id such as UPHENO:0001001.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/upheno?words=abnormal&limit=10\` — uPheno terms matching abnormal.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`uPheno\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`uphenoId\`, \`description\`, \`synonyms\`, \`iri\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/phenotypes.md — Duaer phenotypes
- https://skills.duaer.com/mondo.md — Duaer Mondo
`,

	fma: `---
name: duaer-fma
description: >-
  Duaer FMA. Search Foundational Model of Anatomy terms in OLS.
  One successful search uses 1 Duaer credit.
---

# Duaer FMA

Search Foundational Model of Anatomy terms in OLS. Data comes from FMA.

## When to use

- Find human anatomy terms and FMA ids.
- Look up one FMA id.

## When not to use

- Cross-species anatomy. Use https://skills.duaer.com/uberon.md.

## Call

\`GET https://api.duaer.com/v1/data/fma?words=heart&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as heart.
- \`id\` — Optional. Id such as FMA:7088.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/fma?words=heart&limit=10\` — FMA terms matching heart.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`FMA\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`fmaId\`, \`description\`, \`synonyms\`, \`iri\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/uberon.md — Duaer Uberon
- https://skills.duaer.com/cell-ontology.md — Duaer Cell Ontology
`,

	loinc: `---
name: duaer-loinc
description: >-
  Duaer LOINC. Search LOINC laboratory and clinical terms in OLS.
  One successful search uses 1 Duaer credit.
---

# Duaer LOINC

Search LOINC laboratory and clinical terms in OLS. Data comes from LOINC.

## When to use

- Find laboratory and clinical observation terms and LOINC ids.
- Look up one LOINC id.

## When not to use

- Clinical concepts. Use https://skills.duaer.com/ncit.md.

## Call

\`GET https://api.duaer.com/v1/data/loinc?words=glucose&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as glucose.
- \`id\` — Optional. Id such as LOINC:2345-7.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/loinc?words=glucose&limit=10\` — LOINC terms matching glucose.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`LOINC\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`loincId\`, \`description\`, \`synonyms\`, \`iri\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/rxnorm.md — Duaer RxNorm
- https://skills.duaer.com/icd10.md — Duaer ICD-10
`,

	enrichr: `---
name: duaer-enrichr
description: >-
  Duaer Enrichr. Search Enrichr gene-set libraries by gene symbol or library name.
  One successful search uses 1 Duaer credit.
---

# Duaer Enrichr

Search Enrichr gene-set libraries by gene symbol or library name. Data comes from Enrichr.

## When to use

- Find Enrichr gene-set libraries that contain a gene.
- Look up one library by name.

## When not to use

- Run enrichment on a gene list. Use https://skills.duaer.com/string-enrichment.md.

## Call

\`GET https://api.duaer.com/v1/data/enrichr?words=TP53&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as TP53.
- \`id\` — Optional. Id such as TP53.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/enrichr?words=TP53&limit=10\` — libraries with TP53.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`Enrichr\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`library\`, \`term\`, \`gene\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/genes.md — Duaer genes
- https://skills.duaer.com/pathways.md — Duaer pathways
`,

	unpaywall: `---
name: duaer-unpaywall
description: >-
  Duaer Unpaywall. Look up open-access status for a DOI in Unpaywall.
  One successful search uses 1 Duaer credit.
---

# Duaer Unpaywall

Look up open-access status for a DOI in Unpaywall. Data comes from Unpaywall.

## When to use

- Check if a DOI has a free legal copy.
- Check whether a known paper is open access.

## When not to use

- Search papers by topic. Use https://skills.duaer.com/papers.md.

## Call

\`GET https://api.duaer.com/v1/data/unpaywall?words=10.1038%2Fnature12373&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as 10.1038/nature12373.
- \`id\` — Optional. Id such as 10.1038/nature12373.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/unpaywall?words=10.1038%2Fnature12373&limit=10\` — open access status of one DOI.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`Unpaywall\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`doi\`, \`isOa\`, \`oaStatus\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/papers.md — Duaer papers
- https://skills.duaer.com/europe-pmc.md — Duaer Europe PMC
`,

	datacite: `---
name: duaer-datacite
description: >-
  Duaer DataCite. Search DataCite DOI metadata for datasets and works.
  One successful search uses 1 Duaer credit.
---

# Duaer DataCite

Search DataCite DOI metadata for datasets and works. Data comes from DataCite.

## When to use

- Find DOI metadata for datasets and other works in DataCite.
- Look up one DataCite DOI.

## When not to use

- Journal articles in Crossref. Use https://skills.duaer.com/crossref.md.

## Call

\`GET https://api.duaer.com/v1/data/datacite?words=crispr&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as crispr.
- \`id\` — Optional. Id such as 10.5281/zenodo.22963915.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/datacite?words=crispr&limit=10\` — DataCite records matching crispr.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`DataCite\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`doi\`, \`publisher\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/zenodo.md — Duaer Zenodo
- https://skills.duaer.com/crossref.md — Duaer Crossref
`,

	cpic: `---
name: duaer-cpic
description: >-
  Duaer CPIC. Search CPIC pharmacogenomic genes and drugs.
  One successful search uses 1 Duaer credit.
---

# Duaer CPIC

Search CPIC pharmacogenomic genes and drugs. Data comes from CPIC.

## When to use

- Find CPIC pharmacogenomic genes and drugs.
- Look up one CPIC gene or drug.

## When not to use

- ClinPGx records. Use https://skills.duaer.com/clinpgx.md.

## Call

\`GET https://api.duaer.com/v1/data/cpic?words=CYP2C19&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as CYP2C19.
- \`id\` — Optional. Id such as CYP2C19.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/cpic?words=CYP2C19&limit=10\` — CPIC records for CYP2C19.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`CPIC\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`kind\`, \`cpicId\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/clinpgx.md — Duaer ClinPGx
- https://skills.duaer.com/drug-gene.md — Duaer drug–gene
`,

	osf: `---
name: duaer-osf
description: >-
  Duaer OSF. Search Open Science Framework project nodes.
  One successful search uses 1 Duaer credit.
---

# Duaer OSF

Search Open Science Framework project nodes. Data comes from OSF.

## When to use

- Find Open Science Framework projects.
- Look up one OSF node id.

## When not to use

- Zenodo records. Use https://skills.duaer.com/zenodo.md.

## Call

\`GET https://api.duaer.com/v1/data/osf?words=crispr&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as crispr.
- \`id\` — Optional. Id such as bdwxr.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/osf?words=crispr&limit=10\` — OSF projects matching crispr.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`OSF\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`osfId\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/zenodo.md — Duaer Zenodo
- https://skills.duaer.com/dryad.md — Duaer Dryad
`,

	ukri: `---
name: duaer-ukri
description: >-
  Duaer UKRI. Search UK Research and Innovation Gateway to Research projects.
  One successful search uses 1 Duaer credit.
---

# Duaer UKRI

Search UK Research and Innovation Gateway to Research projects. Data comes from UKRI.

## When to use

- Find UKRI-funded research projects.
- Look up one project id.

## When not to use

- NIH grants. Use https://skills.duaer.com/grants.md.

## Call

\`GET https://api.duaer.com/v1/data/ukri?words=crispr&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as crispr.
- \`id\` — Optional. Id such as F71A563C-4DDC-4ED3-AAE2-A9D1D19618BE.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/ukri?words=crispr&limit=10\` — UKRI projects matching crispr.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`UKRI\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`projectId\`, \`status\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/nsf-awards.md — Duaer NSF Awards
- https://skills.duaer.com/grants.md — Duaer grants
`,

	cellosaurus: `---
name: duaer-cellosaurus
description: >-
  Duaer Cellosaurus. Search the Cellosaurus cell line encyclopedia.
  One successful search uses 1 Duaer credit.
---

# Duaer Cellosaurus

Search the Cellosaurus cell line encyclopedia. Data comes from Cellosaurus.

## When to use

- Find cell lines in Cellosaurus.
- Look up one Cellosaurus accession.

## When not to use

- Cell line search with species and category filters. Use https://skills.duaer.com/cell-lines.md.

## Call

\`GET https://api.duaer.com/v1/data/cellosaurus?words=HeLa&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as HeLa.
- \`id\` — Optional. Id such as CVCL_0030.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/cellosaurus?words=HeLa&limit=10\` — Cellosaurus entries matching HeLa.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`Cellosaurus\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`accession\`, \`category\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/cell-lines.md — Duaer cell lines
- https://skills.duaer.com/clo.md — Duaer CLO
`,

	bindingdb: `---
name: duaer-bindingdb
description: >-
  Duaer BindingDB. Search BindingDB ligand affinities by UniProt accession.
  One successful search uses 1 Duaer credit.
---

# Duaer BindingDB

Search BindingDB ligand affinities by UniProt accession. Data comes from BindingDB.

## When to use

- Find ligand binding affinities for a UniProt accession.
- Compare binders of one target.

## When not to use

- ChEMBL bioactivities. Use https://skills.duaer.com/activities.md.

## Call

\`GET https://api.duaer.com/v1/data/bindingdb?words=P00533&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as P00533.
- \`id\` — Optional. Id such as P00533.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/bindingdb?words=P00533&limit=10\` — BindingDB affinities for P00533.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`BindingDB\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`uniprot\`, \`monomerId\`, \`affinityType\`, \`affinity\`, \`smiles\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/compounds.md — Duaer compounds
- https://skills.duaer.com/targets.md — Duaer targets
- https://skills.duaer.com/ligands.md — Duaer ligands
`,

	iedb: `---
name: duaer-iedb
description: >-
  Duaer IEDB. Search IEDB immune epitopes by peptide sequence.
  One successful search uses 1 Duaer credit.
---

# Duaer IEDB

Search IEDB immune epitopes by peptide sequence. Data comes from IEDB.

## When to use

- Find immune epitopes by peptide sequence in IEDB.
- Look up one epitope id.

## When not to use

- Protein records. Use https://skills.duaer.com/proteins.md.

## Call

\`GET https://api.duaer.com/v1/data/iedb?words=SIINFEKL&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as SIINFEKL.
- \`id\` — Optional. Id such as 58560.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/iedb?words=SIINFEKL&limit=10\` — IEDB epitopes for SIINFEKL.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`IEDB\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`structureId\`, \`sequence\`, \`antigen\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/proteins.md — Duaer proteins
- https://skills.duaer.com/assays.md — Duaer assays
`,

	rfam: `---
name: duaer-rfam
description: >-
  Duaer Rfam. Search Rfam RNA families by name or accession.
  One successful search uses 1 Duaer credit.
---

# Duaer Rfam

Search Rfam RNA families by name or accession. Data comes from Rfam.

## When to use

- Find RNA families in Rfam by name or accession.
- Look up one Rfam accession.

## When not to use

- Single RNA sequences. Use https://skills.duaer.com/rnacentral.md.

## Call

\`GET https://api.duaer.com/v1/data/rfam?words=tRNA&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as tRNA.
- \`id\` — Optional. Id such as RF00005.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/rfam?words=tRNA&limit=10\` — Rfam families matching tRNA.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`Rfam\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`rfamId\`, \`description\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/rnacentral.md — Duaer RNAcentral
- https://skills.duaer.com/genes.md — Duaer genes
`,

	checklistbank: `---
name: duaer-checklistbank
description: >-
  Duaer ChecklistBank. Search Catalogue of Life names in ChecklistBank.
  One successful search uses 1 Duaer credit.
---

# Duaer ChecklistBank

Search Catalogue of Life names in ChecklistBank. Data comes from ChecklistBank.

## When to use

- Find Catalogue of Life names in ChecklistBank.
- Look up one name id.

## When not to use

- GBIF species. Use https://skills.duaer.com/gbif.md.

## Call

\`GET https://api.duaer.com/v1/data/checklistbank?words=Homo%20sapiens&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as Homo sapiens.
- \`id\` — Optional. Id such as 636X2.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/checklistbank?words=Homo%20sapiens&limit=10\` — ChecklistBank names for Homo sapiens.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`ChecklistBank\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`usageId\`, \`rank\`, \`status\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/organisms.md — Duaer organisms
- https://skills.duaer.com/ncbi-taxon.md — Duaer NCBI Taxonomy
- https://skills.duaer.com/gbif.md — Duaer GBIF
`,

	togovar: `---
name: duaer-togovar
description: >-
  Duaer TogoVar. Search TogoVar Japanese genome variants by rsID or gene.
  One successful search uses 1 Duaer credit.
---

# Duaer TogoVar

Search TogoVar Japanese genome variants by rsID or gene. Data comes from TogoVar.

## When to use

- Find Japanese genome variants in TogoVar by rs id or gene.
- Look up one TogoVar id.

## When not to use

- Global allele frequencies. Use https://skills.duaer.com/gnomad.md.

## Call

\`GET https://api.duaer.com/v1/data/togovar?words=rs671&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as rs671.
- \`id\` — Optional. Id such as tgv47264307.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/togovar?words=rs671&limit=10\` — TogoVar records for rs671.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`TogoVar\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`togovarId\`, \`rsid\`, \`gene\`, \`chromosome\`, \`position\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/variants.md — Duaer variants
- https://skills.duaer.com/dbsnp.md — Duaer dbSNP
- https://skills.duaer.com/clinvar.md — Duaer ClinVar
`,

	pubmed: `---
name: duaer-pubmed
description: >-
  Duaer PubMed. Search PubMed literature from NCBI E-utilities.
  One successful search uses 1 Duaer credit.
---

# Duaer PubMed

Search PubMed literature from NCBI E-utilities. Data comes from PubMed.

## When to use

- Find PubMed articles.
- Look up one PMID.

## When not to use

- Citation counts and open access filters. Use https://skills.duaer.com/papers.md.

## Call

\`GET https://api.duaer.com/v1/data/pubmed?words=BRCA1%20breast%20cancer&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as BRCA1 breast cancer.
- \`id\` — Optional. Id such as 23193287.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/pubmed?words=BRCA1%20breast%20cancer&limit=10\` — PubMed articles on BRCA1 in breast cancer.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`PubMed\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`pmid\`, \`journal\`, \`pubDate\`, \`authors\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/papers.md — Duaer papers
- https://skills.duaer.com/europe-pmc.md — Duaer Europe PMC
- https://skills.duaer.com/preprints.md — Duaer preprints
`,

	core: `---
name: duaer-core
description: >-
  Duaer CORE. Search open-access research works in CORE.
  One successful search uses 1 Duaer credit.
---

# Duaer CORE

Search open-access research works in CORE. Data comes from CORE.

## When to use

- Find open access research works in CORE.
- Look up one CORE id.

## When not to use

- OpenAlex papers. Use https://skills.duaer.com/papers.md.

## Call

\`GET https://api.duaer.com/v1/data/core?words=crispr&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as crispr.
- \`id\` — Optional. Id such as 13120640.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/core?words=crispr&limit=10\` — CORE works matching crispr.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`CORE\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`coreId\`, \`doi\`, \`year\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/papers.md — Duaer papers
- https://skills.duaer.com/pubmed.md — Duaer PubMed
- https://skills.duaer.com/europe-pmc.md — Duaer Europe PMC
`,

	opentree: `---
name: duaer-opentree
description: >-
  Duaer Open Tree. Match scientific names in Open Tree of Life.
  One successful search uses 1 Duaer credit.
---

# Duaer Open Tree

Match scientific names in Open Tree of Life. Data comes from Open Tree.

## When to use

- Match scientific names in the Open Tree of Life.
- Look up one OTT id.

## When not to use

- GBIF species. Use https://skills.duaer.com/gbif.md.

## Call

\`GET https://api.duaer.com/v1/data/opentree?words=Homo%20sapiens&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as Homo sapiens.
- \`id\` — Optional. Id such as 770315.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/opentree?words=Homo%20sapiens&limit=10\` — Open Tree matches for Homo sapiens.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`Open Tree\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`ottId\`, \`rank\`, \`matchedName\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/organisms.md — Duaer organisms
- https://skills.duaer.com/ncbi-taxon.md — Duaer NCBI Taxonomy
- https://skills.duaer.com/checklistbank.md — Duaer ChecklistBank
`,

	'europe-pmc-annotations': `---
name: duaer-europe-pmc-annotations
description: >-
  Duaer Europe PMC Annotations. Fetch Europe PMC text-mined annotations for a PubMed or PMC article.
  One successful search uses 1 Duaer credit.
---

# Duaer Europe PMC Annotations

Fetch Europe PMC text-mined annotations for a PubMed or PMC article. Data comes from Europe PMC Annotations.

## When to use

- Get text-mined genes, diseases, and chemicals for one article.
- Extract entities from a PMID or PMCID.

## When not to use

- Search articles. Use https://skills.duaer.com/europe-pmc.md.

## Call

\`GET https://api.duaer.com/v1/data/europe-pmc-annotations?words=23193287&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as 23193287.
- \`id\` — Optional. Id such as PMC3531190.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/europe-pmc-annotations?words=23193287&limit=10\` — annotations for PMID 23193287.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`Europe PMC Annotations\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`articleId\`, \`annotationType\`, \`exact\`, \`tag\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/europe-pmc.md — Duaer Europe PMC
- https://skills.duaer.com/pubmed.md — Duaer PubMed
- https://skills.duaer.com/papers.md — Duaer papers
`,

	bigg: `---
name: duaer-bigg
description: >-
  Duaer BiGG. Search BiGG Models metabolites, genes, and genome-scale models.
  One successful search uses 1 Duaer credit.
---

# Duaer BiGG

Search BiGG Models metabolites, genes, and genome-scale models. Data comes from BiGG.

## When to use

- Find BiGG metabolites, genes, and genome-scale models.
- Look up one BiGG id.

## When not to use

- ModelSEED reactions. Use https://skills.duaer.com/modelseed.md.

## Call

\`GET https://api.duaer.com/v1/data/bigg?words=glucose&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`.

- \`words\` — search words, such as glucose.
- \`id\` — Optional. Id such as glc__D.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/bigg?words=glucose&limit=10\` — BiGG entries matching glucose.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`BiGG\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`biggId\`, \`kind\`, \`organism\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/metabolites.md — Duaer metabolites
- https://skills.duaer.com/reactions.md — Duaer reactions
- https://skills.duaer.com/kegg.md — Duaer KEGG
`,

	gnomad: `---
name: duaer-gnomad
description: >-
  Duaer gnomAD. Look up a gene symbol in gnomAD (GRCh38).
  One successful search uses 1 Duaer credit.
---

# Duaer gnomAD

Look up a gene symbol in gnomAD (GRCh38). Data comes from gnomAD.

## When to use

- Look up a gene in gnomAD (GRCh38).
- Check gnomAD gene records before variant work.

## When not to use

- Clinical variants. Use https://skills.duaer.com/clinvar.md.

## Call

\`GET https://api.duaer.com/v1/data/gnomad?words=PCSK9&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as PCSK9.
- \`id\` — Optional. Id such as BRCA1.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/gnomad?words=PCSK9&limit=10\` — gnomAD record for PCSK9.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`gnomAD\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`geneId\`, \`symbol\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/variants.md — Duaer variants
- https://skills.duaer.com/clinvar.md — Duaer ClinVar
- https://skills.duaer.com/dbsnp.md — Duaer dbSNP
`,

	mirna: `---
name: duaer-mirna
description: >-
  Duaer miRNA. Search microRNA entries in RNAcentral.
  One successful search uses 1 Duaer credit.
---

# Duaer miRNA

Search microRNA entries in RNAcentral. Data comes from miRNA.

## When to use

- Find microRNA entries in RNAcentral.
- Look up one microRNA id.

## When not to use

- All non-coding RNA. Use https://skills.duaer.com/rnacentral.md.

## Call

\`GET https://api.duaer.com/v1/data/mirna?words=hsa-miR-21&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as hsa-miR-21.
- \`id\` — Optional. Id such as URS000075C808.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/mirna?words=hsa-miR-21&limit=10\` — microRNA entries for hsa-miR-21.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`miRNA\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`rnacentralId\`, \`description\`, \`length\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/rnacentral.md — Duaer RNAcentral
- https://skills.duaer.com/rfam.md — Duaer Rfam
- https://skills.duaer.com/genes.md — Duaer genes
`,

	humanmine: `---
name: duaer-humanmine
description: >-
  Duaer HumanMine. Search human genes and related entities in HumanMine.
  One successful search uses 1 Duaer credit.
---

# Duaer HumanMine

Search human genes and related entities in HumanMine. Data comes from HumanMine.

## When to use

- Find human genes and related entities in HumanMine.
- Look up one HumanMine id.

## When not to use

- MyGene search. Use https://skills.duaer.com/genes.md.

## Call

\`GET https://api.duaer.com/v1/data/humanmine?words=BRCA1&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as BRCA1.
- \`id\` — Optional. Id such as 1205471.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/humanmine?words=BRCA1&limit=10\` — HumanMine records for BRCA1.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`HumanMine\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`mineId\`, \`symbol\`, \`entityType\`, \`organism\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/genes.md — Duaer genes
- https://skills.duaer.com/proteins.md — Duaer proteins
- https://skills.duaer.com/monarch.md — Duaer Monarch
`,

	regulomedb: `---
name: duaer-regulomedb
description: >-
  Duaer RegulomeDB. Score regulatory evidence for a variant in RegulomeDB.
  One successful search uses 1 Duaer credit.
---

# Duaer RegulomeDB

Score regulatory evidence for a variant in RegulomeDB. Data comes from RegulomeDB.

## When to use

- Score regulatory evidence for a variant in RegulomeDB.
- Rank noncoding variants by regulatory evidence.

## When not to use

- Variant consequences. Use https://skills.duaer.com/ensembl-vep.md.

## Call

\`GET https://api.duaer.com/v1/data/regulomedb?words=rs33980857&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as rs33980857.
- \`id\` — Optional. Id such as chr1:1000205-1000205.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/regulomedb?words=rs33980857&limit=10\` — RegulomeDB score for rs33980857.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`RegulomeDB\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`rsid\`, \`chrom\`, \`position\`, \`ranking\`, \`probability\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/variants.md — Duaer variants
- https://skills.duaer.com/dbsnp.md — Duaer dbSNP
- https://skills.duaer.com/encode.md — Duaer ENCODE
`,

	civic: `---
name: duaer-civic
description: >-
  Duaer CIViC. Search clinical interpretation features in CIViC.
  One successful search uses 1 Duaer credit.
---

# Duaer CIViC

Search clinical interpretation features in CIViC. Data comes from CIViC.

## When to use

- Find clinical interpretation features in CIViC.
- Look up one CIViC id.

## When not to use

- ClinVar records. Use https://skills.duaer.com/clinvar.md.

## Call

\`GET https://api.duaer.com/v1/data/civic?words=BRAF&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as BRAF.
- \`id\` — Optional. Feature name such as BRAF.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/civic?words=BRAF&limit=10\` — CIViC features for BRAF.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`CIViC\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`civicId\`, \`resultType\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/variants.md — Duaer variants
- https://skills.duaer.com/clinvar.md — Duaer ClinVar
- https://skills.duaer.com/gwas.md — Duaer GWAS
`,

	omicsdi: `---
name: duaer-omicsdi
description: >-
  Duaer OmicsDI. Search multi-omics datasets in OmicsDI.
  One successful search uses 1 Duaer credit.
---

# Duaer OmicsDI

Search multi-omics datasets in OmicsDI. Data comes from OmicsDI.

## When to use

- Find multi-omics datasets in OmicsDI.
- Look up one dataset id.

## When not to use

- BioStudies studies. Use https://skills.duaer.com/biostudies.md.

## Call

\`GET https://api.duaer.com/v1/data/omicsdi?words=BRCA1&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as BRCA1.
- \`id\` — Optional. Dataset id such as MTBLS12109.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/omicsdi?words=BRCA1&limit=10\` — OmicsDI datasets for BRCA1.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`OmicsDI\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`datasetId\`, \`omicsSource\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/geo.md — Duaer GEO
- https://skills.duaer.com/pride.md — Duaer PRIDE
- https://skills.duaer.com/expression-atlas.md — Duaer Expression Atlas
`,

	'gtex-expression': `---
name: duaer-gtex-expression
description: >-
  Duaer GTEx expression. Look up GTEx median tissue expression for a gene.
  One successful search uses 1 Duaer credit.
---

# Duaer GTEx expression

Look up GTEx median tissue expression for a gene. Data comes from GTEx expression.

## When to use

- Look up GTEx median tissue expression for a gene.
- Compare tissues for one gene.

## When not to use

- eQTLs. Use https://skills.duaer.com/gtex-eqtl.md.

## Call

\`GET https://api.duaer.com/v1/data/gtex-expression?words=BRCA1&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`.

- \`words\` — gene symbol, such as BRCA1.
- \`id\` — Optional. Gencode id such as ENSG00000012048.20.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/gtex-expression?words=BRCA1&limit=10\` — GTEx expression of BRCA1.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`GTEx expression\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`geneSymbol\`, \`gencodeId\`, \`tissue\` — text.
- \`median\` — number.

${blank}

## Credits

A successful search uses 1 credit, even when it finds nothing.
If you send a gene that GTEx does not know, Duaer returns no items and uses 0.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/gtex-eqtl.md — Duaer GTEx eQTL
- https://skills.duaer.com/expression.md — Duaer expression
- https://skills.duaer.com/atlas.md — Duaer tissue atlas
`,

	biomodels: `---
name: duaer-biomodels
description: >-
  Duaer BioModels. Search systems biology models in EBI BioModels.
  One successful search uses 1 Duaer credit.
---

# Duaer BioModels

Search systems biology models in EBI BioModels. Data comes from BioModels.

## When to use

- Find systems biology models in BioModels.
- Look up one BioModels id.

## When not to use

- Pathways. Use https://skills.duaer.com/pathways.md.

## Call

\`GET https://api.duaer.com/v1/data/biomodels?words=apoptosis&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as apoptosis.
- \`id\` — Optional. Model id such as BIOMD0000000001.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/biomodels?words=apoptosis&limit=10\` — BioModels matching apoptosis.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`BioModels\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`modelId\`, \`format\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/pathways.md — Duaer pathways
- https://skills.duaer.com/reactions.md — Duaer reactions
- https://skills.duaer.com/bigg.md — Duaer BiGG
`,

	'ot-drugs': `---
name: duaer-ot-drugs
description: >-
  Duaer Open Targets drugs. Search drug entities in Open Targets.
  One successful search uses 1 Duaer credit.
---

# Duaer Open Targets drugs

Search drug entities in Open Targets. Data comes from Open Targets drugs.

## When to use

- Find drug entities in Open Targets.
- Look up one ChEMBL drug id in Open Targets.

## When not to use

- Gene–disease associations. Use https://skills.duaer.com/targets.md.

## Call

\`GET https://api.duaer.com/v1/data/ot-drugs?words=imatinib&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as imatinib.
- \`id\` — Optional. ChEMBL id such as CHEMBL941.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/ot-drugs?words=imatinib&limit=10\` — Open Targets drugs matching imatinib.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`Open Targets drugs\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`drugId\`, \`entity\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/targets.md — Duaer targets
- https://skills.duaer.com/chembl.md — Duaer ChEMBL
- https://skills.duaer.com/drug-gene.md — Duaer drug–gene
`,

	wikipathways: `---
name: duaer-wikipathways
description: >-
  Duaer WikiPathways. Search community pathways in WikiPathways.
  One successful search uses 1 Duaer credit.
---

# Duaer WikiPathways

Search community pathways in WikiPathways. Data comes from WikiPathways.

## When to use

- Find community pathways in WikiPathways.
- Look up one WP id.

## When not to use

- Reactome pathways. Use https://skills.duaer.com/pathways.md.

## Call

\`GET https://api.duaer.com/v1/data/wikipathways?words=apoptosis&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as apoptosis.
- \`id\` — Optional. Pathway id such as WP254.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/wikipathways?words=apoptosis&limit=10\` — WikiPathways matching apoptosis.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`WikiPathways\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`pathwayId\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/pathways.md — Duaer pathways
- https://skills.duaer.com/kegg.md — Duaer KEGG
`,

	panelapp: `---
name: duaer-panelapp
description: >-
  Duaer PanelApp. Search gene panels in Genomics England PanelApp.
  One successful search uses 1 Duaer credit.
---

# Duaer PanelApp

Search gene panels in Genomics England PanelApp. Data comes from PanelApp.

## When to use

- Find Genomics England gene panels.
- Check panels that include a gene.

## When not to use

- Genetic tests. Use https://skills.duaer.com/ncbi-gtr.md.

## Call

\`GET https://api.duaer.com/v1/data/panelapp?words=BRCA1&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — gene symbol, such as BRCA1.
- \`id\` — Optional. Gene symbol such as BRCA1.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/panelapp?words=BRCA1&limit=10\` — PanelApp panels for BRCA1.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`PanelApp\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`geneSymbol\`, \`panelName\`, \`confidenceLevel\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/genes.md — Duaer genes
- https://skills.duaer.com/clinvar.md — Duaer ClinVar
- https://skills.duaer.com/civic.md — Duaer CIViC
`,

	goa: `---
name: duaer-goa
description: >-
  Duaer GO annotations. Look up GO annotations for a gene product.
  One successful search uses 1 Duaer credit.
---

# Duaer GO annotations

Look up GO annotations for a gene product. Data comes from GO annotations.

## When to use

- Look up GO annotations for a gene product.
- List the processes and functions of a protein.

## When not to use

- GO term search. Use https://skills.duaer.com/gene-ontology.md.

## Call

\`GET https://api.duaer.com/v1/data/goa?words=BRCA1&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`.

- \`words\` — gene symbol or UniProt accession, such as BRCA1.
- \`id\` — Optional. UniProt accession such as P38398.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/goa?words=BRCA1&limit=10\` — GO annotations of BRCA1.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`GO annotations\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`goId\`, \`geneProductId\`, \`symbol\`, \`qualifier\` — text.

${blank}

## Credits

A successful search uses 1 credit, even when it finds nothing.
If you send a gene that UniProt does not resolve, Duaer returns no items and uses 0.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/gene-ontology.md — Duaer Gene Ontology
- https://skills.duaer.com/proteins.md — Duaer proteins
- https://skills.duaer.com/genes.md — Duaer genes
`,

	'pubchem-assay': `---
name: duaer-pubchem-assay
description: >-
  Duaer PubChem Assay. List PubChem BioAssays for a gene.
  One successful search uses 1 Duaer credit.
---

# Duaer PubChem Assay

List PubChem BioAssays for a gene. Data comes from PubChem Assay.

## When to use

- List PubChem BioAssays for a gene.
- Find screening data for a target.

## When not to use

- ChEMBL assays. Use https://skills.duaer.com/assays.md.

## Call

\`GET https://api.duaer.com/v1/data/pubchem-assay?words=BRCA1&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`.

- \`words\` — gene symbol, such as BRCA1.
- \`id\` — Optional. NCBI Gene id such as 672.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/pubchem-assay?words=BRCA1&limit=10\` — PubChem assays for BRCA1.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`PubChem Assay\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`aid\`, \`sourceName\` — text.

${blank}

## Credits

A successful search uses 1 credit, even when it finds nothing.
If you send a gene that NCBI does not resolve, or a gene with no assays, Duaer returns no items and uses 0.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/assays.md — Duaer assays
- https://skills.duaer.com/compounds.md — Duaer compounds
- https://skills.duaer.com/chembl.md — Duaer ChEMBL
`,

	massive: `---
name: duaer-massive
description: >-
  Duaer MassIVE. Search proteomics datasets in MassIVE.
  One successful search uses 1 Duaer credit.
---

# Duaer MassIVE

Search proteomics datasets in MassIVE. Data comes from MassIVE.

## When to use

- Find proteomics datasets in MassIVE.
- Look up one MSV id.

## When not to use

- PRIDE projects. Use https://skills.duaer.com/pride.md.

## Call

\`GET https://api.duaer.com/v1/data/massive?words=BRCA1&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as BRCA1.
- \`id\` — Optional. Accession such as MSV000065795.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/massive?words=BRCA1&limit=10\` — MassIVE datasets for BRCA1.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`MassIVE\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`accession\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/pride.md — Duaer PRIDE
- https://skills.duaer.com/proteomexchange.md — Duaer ProteomeXchange
- https://skills.duaer.com/proteins.md — Duaer proteins
`,

	interpro: `---
name: duaer-interpro
description: >-
  Duaer InterPro. Search protein domains in InterPro.
  One successful search uses 1 Duaer credit.
---

# Duaer InterPro

Search protein domains in InterPro. Data comes from InterPro.

## When to use

- Find protein domains and families in InterPro.
- Look up one InterPro accession.

## When not to use

- Pfam only. Use https://skills.duaer.com/pfam.md.

## Call

\`GET https://api.duaer.com/v1/data/interpro?words=kinase&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`.

- \`words\` — search words or UniProt accession, such as kinase or P04637.
- \`id\` — Optional. InterPro id such as IPR000023, or UniProt accession.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/interpro?words=kinase&limit=10\` — InterPro entries matching kinase.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`InterPro\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`accession\`, \`type\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/pfam.md — Duaer Pfam
- https://skills.duaer.com/proteins.md — Duaer proteins
- https://skills.duaer.com/domains.md — Duaer domains
`,

	rhea: `---
name: duaer-rhea
description: >-
  Duaer Rhea. Search biochemical reactions in Rhea.
  One successful search uses 1 Duaer credit.
---

# Duaer Rhea

Search biochemical reactions in Rhea. Data comes from Rhea.

## When to use

- Find biochemical reactions in Rhea.
- Look up one Rhea id.

## When not to use

- Search reactions by EC number. Use https://skills.duaer.com/reactions.md.

## Call

\`GET https://api.duaer.com/v1/data/rhea?words=kinase&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as kinase.
- \`id\` — Optional. Rhea id such as 15465.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/rhea?words=kinase&limit=10\` — Rhea reactions matching kinase.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`Rhea\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`rheaId\`, \`equation\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/reactions.md — Duaer reactions
- https://skills.duaer.com/bigg.md — Duaer BiGG
- https://skills.duaer.com/kegg.md — Duaer KEGG
`,

	prosite: `---
name: duaer-prosite
description: >-
  Duaer PROSITE. Scan PROSITE motifs for a UniProt accession.
  One successful search uses 1 Duaer credit.
---

# Duaer PROSITE

Scan PROSITE motifs for a UniProt accession. Data comes from PROSITE.

## When to use

- Scan PROSITE motifs for a UniProt accession.
- Find motifs in one protein.

## When not to use

- InterPro domains. Use https://skills.duaer.com/interpro.md.

## Call

\`GET https://api.duaer.com/v1/data/prosite?words=P04637&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`.

- \`words\` — UniProt accession, such as P04637.
- \`id\` — Optional. UniProt accession such as P04637.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/prosite?words=P04637&limit=10\` — PROSITE motifs in P04637.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`PROSITE\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`signatureAc\`, \`signatureId\`, \`sequenceAc\`, \`start\`, \`stop\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/proteins.md — Duaer proteins
- https://skills.duaer.com/pfam.md — Duaer Pfam
- https://skills.duaer.com/interpro.md — Duaer InterPro
`,

	dgidb: `---
name: duaer-dgidb
description: >-
  Duaer DGIdb. Look up gene–drug interactions in DGIdb.
  One successful search uses 1 Duaer credit.
---

# Duaer DGIdb

Look up gene–drug interactions in DGIdb. Data comes from DGIdb.

## When to use

- Look up gene–drug interactions in DGIdb.
- List drugs for one gene.

## When not to use

- Filter by approved drugs. Use https://skills.duaer.com/drug-gene.md.

## Call

\`GET https://api.duaer.com/v1/data/dgidb?words=BRCA1&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`.

- \`words\` — gene symbol, such as BRCA1.
- \`id\` — Optional. Gene symbol such as BRCA1.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/dgidb?words=BRCA1&limit=10\` — DGIdb interactions for BRCA1.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`DGIdb\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`gene\`, \`drug\`, \`conceptId\`, \`score\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/ot-drugs.md — Duaer Open Targets drugs
- https://skills.duaer.com/drug-gene.md — Duaer drug–gene
- https://skills.duaer.com/chembl.md — Duaer ChEMBL
`,

	mutalyzer: `---
name: duaer-mutalyzer
description: >-
  Duaer Mutalyzer. Normalize an HGVS description with Mutalyzer.
  One successful search uses 1 Duaer credit.
---

# Duaer Mutalyzer

Normalize an HGVS description with Mutalyzer. Data comes from Mutalyzer.

## When to use

- Normalize an HGVS description with Mutalyzer.
- Check HGVS syntax before sharing a variant.

## When not to use

- Validate against transcripts. Use https://skills.duaer.com/variant-validator.md.

## Call

\`GET https://api.duaer.com/v1/data/mutalyzer?words=NM_007294.4:c.68_69del\`

${header}

## Parameters

Provide \`words\` or \`id\`.

- \`words\` — HGVS description, such as NM_007294.4:c.68_69del.
- \`id\` — Optional. HGVS description.

## Examples

- \`GET https://api.duaer.com/v1/data/mutalyzer?words=NM_007294.4:c.68_69del\` — Mutalyzer check of one BRCA1 HGVS.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`Mutalyzer\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`inputDescription\`, \`normalizedDescription\`, \`proteinDescription\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/variants.md — Duaer variants
- https://skills.duaer.com/clinvar.md — Duaer ClinVar
- https://skills.duaer.com/dbsnp.md — Duaer dbSNP
`,

	'variant-validator': `---
name: duaer-variant-validator
description: >-
  Duaer VariantValidator. Validate an HGVS description with VariantValidator.
  One successful search uses 1 Duaer credit.
---

# Duaer VariantValidator

Validate an HGVS description with VariantValidator. Data comes from VariantValidator.

## When to use

- Validate an HGVS description with VariantValidator.
- Map a variant between transcript and genome.

## When not to use

- Normalize HGVS syntax. Use https://skills.duaer.com/mutalyzer.md.

## Call

\`GET https://api.duaer.com/v1/data/variant-validator?words=NM_007294.4:c.68_69del\`

${header}

## Parameters

Provide \`words\` or \`id\`.

- \`words\` — HGVS description, such as NM_007294.4:c.68_69del.
- \`id\` — Optional. HGVS description.

## Examples

- \`GET https://api.duaer.com/v1/data/variant-validator?words=NM_007294.4:c.68_69del\` — VariantValidator check of one BRCA1 HGVS.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`VariantValidator\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`variantId\`, \`gene\`, \`genomicHgvs\`, \`maneSelect\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/variants.md — Duaer variants
- https://skills.duaer.com/mutalyzer.md — Duaer Mutalyzer
- https://skills.duaer.com/clinvar.md — Duaer ClinVar
`,

	metabolights: `---
name: duaer-metabolights
description: >-
  Duaer MetaboLights. Search metabolomics studies in MetaboLights.
  One successful search uses 1 Duaer credit.
---

# Duaer MetaboLights

Search metabolomics studies in MetaboLights. Data comes from MetaboLights.

## When to use

- Find metabolomics studies in MetaboLights.
- Look up one MTBLS id.

## When not to use

- Metabolomics Workbench studies. Use https://skills.duaer.com/metabolomics.md.

## Call

\`GET https://api.duaer.com/v1/data/metabolights?words=cancer&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`.

- \`words\` — search words, such as cancer.
- \`id\` — Optional. Study id such as MTBLS1.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/metabolights?words=cancer&limit=10\` — MetaboLights studies matching cancer.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`MetaboLights\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`studyId\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/metabolomics.md — Duaer Metabolomics
- https://skills.duaer.com/metabolites.md — Duaer metabolites
- https://skills.duaer.com/omicsdi.md — Duaer OmicsDI
`,

	modelseed: `---
name: duaer-modelseed
description: >-
  Duaer ModelSEED. Search reactions in ModelSEED.
  One successful search uses 1 Duaer credit.
---

# Duaer ModelSEED

Search reactions in ModelSEED. Data comes from ModelSEED.

## When to use

- Find ModelSEED reactions and compounds.
- Look up one ModelSEED id.

## When not to use

- Rhea reactions. Use https://skills.duaer.com/rhea.md.

## Call

\`GET https://api.duaer.com/v1/data/modelseed?words=ATP&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as ATP.
- \`id\` — Optional. Reaction id such as rxn00001.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/modelseed?words=ATP&limit=10\` — ModelSEED entries matching ATP.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`ModelSEED\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`reactionId\`, \`equation\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/bigg.md — Duaer BiGG
- https://skills.duaer.com/reactions.md — Duaer reactions
- https://skills.duaer.com/rhea.md — Duaer Rhea
`,

	'usda-fdc': `---
name: duaer-usda-fdc
description: >-
  Duaer USDA FoodData Central. Search foods in USDA FoodData Central.
  One successful search uses 1 Duaer credit.
---

# Duaer USDA FoodData Central

Search foods in USDA FoodData Central. Data comes from USDA FoodData Central.

## When to use

- Find foods and nutrients in USDA FoodData Central.
- Look up one FDC id.

## When not to use

- Packaged products. Use https://skills.duaer.com/open-food-facts.md.

## Call

\`GET https://api.duaer.com/v1/data/usda-fdc?words=apple&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`.

- \`words\` — food name, such as apple.
- \`id\` — Optional. FDC id such as 1750340.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/usda-fdc?words=apple&limit=10\` — foods matching apple.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`USDA FoodData Central\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`fdcId\`, \`dataType\`, \`brandOwner\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/metabolites.md — Duaer metabolites
- https://skills.duaer.com/lipid-maps.md — Duaer Lipid Maps
- https://skills.duaer.com/compounds.md — Duaer compounds
`,

	alphafill: `---
name: duaer-alphafill
description: >-
  Duaer AlphaFill. List AlphaFill ligand transplants for a UniProt accession.
  One successful search uses 1 Duaer credit.
---

# Duaer AlphaFill

List AlphaFill ligand transplants for a UniProt accession. Data comes from AlphaFill.

## When to use

- List AlphaFill ligand transplants for a UniProt accession.
- See which ligands fit an AlphaFold model.

## When not to use

- AlphaFold models. Use https://skills.duaer.com/alphafold.md.

## Call

\`GET https://api.duaer.com/v1/data/alphafill?words=P04637&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`.

- \`words\` — UniProt accession, such as P04637.
- \`id\` — Optional. UniProt accession such as P04637.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/alphafill?words=P04637&limit=10\` — AlphaFill ligands for P04637.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`AlphaFill\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`uniprotAcc\`, \`analogueId\`, \`pdbId\`, \`rmsd\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/alphafold.md — Duaer AlphaFold
- https://skills.duaer.com/structures.md — Duaer structures
- https://skills.duaer.com/proteins.md — Duaer proteins
`,

	pdbe: `---
name: duaer-pdbe
description: >-
  Duaer PDBe. Search structures in PDBe.
  One successful search uses 1 Duaer credit.
---

# Duaer PDBe

Search structures in PDBe. Data comes from PDBe.

## When to use

- Find structures in PDBe.
- Look up one PDB id.

## When not to use

- Filter structures by method and resolution. Use https://skills.duaer.com/structures.md.

## Call

\`GET https://api.duaer.com/v1/data/pdbe?words=BRCA1&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — search words, such as BRCA1.
- \`id\` — Optional. PDB id such as 1tup.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/pdbe?words=BRCA1&limit=10\` — PDBe structures for BRCA1.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`PDBe\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`pdbId\`, \`method\`, \`resolution\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/structures.md — Duaer structures
- https://skills.duaer.com/alphafold.md — Duaer AlphaFold
- https://skills.duaer.com/emdb.md — Duaer EMDB
`,

	metacyc: `---
name: duaer-metacyc
description: >-
  Duaer MetaCyc. Search pathways in MetaCyc.
  One successful search uses 1 Duaer credit.
---

# Duaer MetaCyc

Search pathways in MetaCyc. Data comes from MetaCyc.

## When to use

- Find MetaCyc pathways for a protein or term.
- Look up one MetaCyc pathway.

## When not to use

- Reactome pathways. Use https://skills.duaer.com/pathways.md.

## Call

\`GET https://api.duaer.com/v1/data/metacyc?words=P04637&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`.

- \`words\` — UniProt accession or pathway id, such as P04637 or META:GLYCOLYSIS.
- \`id\` — Optional. Pathway id such as META:GLYCOLYSIS.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/metacyc?words=P04637&limit=10\` — MetaCyc pathways for P04637.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`MetaCyc\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`pathwayId\`, \`orgId\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/pathways.md — Duaer pathways
- https://skills.duaer.com/wikipathways.md — Duaer WikiPathways
`,

	'string-enrichment': `---
name: duaer-string-enrichment
description: >-
  Duaer STRING enrichment. Run STRING functional enrichment for gene symbols.
  One successful search uses 1 Duaer credit.
---

# Duaer STRING enrichment

Run STRING functional enrichment for gene symbols. Data comes from STRING enrichment.

## When to use

- Run STRING functional enrichment for gene symbols.
- Find shared processes in a gene list.

## When not to use

- Interaction partners. Use https://skills.duaer.com/interactions.md.

## Call

\`GET https://api.duaer.com/v1/data/string-enrichment?words=BRCA1%20TP53&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`.

- \`words\` — gene symbols separated by space, such as BRCA1 TP53.
- \`id\` — Optional. Gene symbols separated by space.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/string-enrichment?words=BRCA1%20TP53&limit=10\` — enrichment for BRCA1 and TP53.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`STRING enrichment\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`term\`, \`category\`, \`fdr\`, \`description\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/interactions.md — Duaer interactions
- https://skills.duaer.com/genes.md — Duaer genes
- https://skills.duaer.com/gene-ontology.md — Duaer Gene Ontology
`,

	foldseek: `---
name: duaer-foldseek
description: >-
  Duaer Foldseek. List Foldseek searchable structure databases.
  One successful search uses 1 Duaer credit.
---

# Duaer Foldseek

List Foldseek searchable structure databases. Data comes from Foldseek.

## When to use

- List Foldseek structure databases.
- Pick a database for a structure search.

## When not to use

- Experimental structures. Use https://skills.duaer.com/structures.md.

## Call

\`GET https://api.duaer.com/v1/data/foldseek?words=AlphaFold&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — database name filter, such as AlphaFold.
- \`id\` — Optional. Database name such as ESM30.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/foldseek?words=AlphaFold&limit=10\` — Foldseek databases matching AlphaFold.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`Foldseek\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`name\`, \`version\`, \`status\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/structures.md — Duaer structures
- https://skills.duaer.com/alphafold.md — Duaer AlphaFold
- https://skills.duaer.com/pdbe.md — Duaer PDBe
`,

	'ensembl-homology': `---
name: duaer-ensembl-homology
description: >-
  Duaer Ensembl homology. List Ensembl compara orthologues for a gene symbol.
  One successful search uses 1 Duaer credit.
---

# Duaer Ensembl homology

List Ensembl compara orthologues for a gene symbol. Data comes from Ensembl homology.

## When to use

- List Ensembl Compara orthologues for a gene symbol.
- Map a gene across many species.

## When not to use

- MyGene orthologs. Use https://skills.duaer.com/orthologs.md.

## Call

\`GET https://api.duaer.com/v1/data/ensembl-homology?words=BRCA1&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`.

- \`words\` — gene symbol, such as BRCA1.
- \`id\` — Optional. Gene symbol such as BRCA1.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/ensembl-homology?words=BRCA1&limit=10\` — Ensembl orthologues of BRCA1.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`Ensembl homology\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`geneId\`, \`species\`, \`type\`, \`proteinId\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/orthologs.md — Duaer orthologs
- https://skills.duaer.com/ensembl.md — Duaer Ensembl
- https://skills.duaer.com/genes.md — Duaer genes
`,

	ols: `---
name: duaer-ols
description: >-
  Duaer EBI OLS. Search ontology terms in EBI OLS.
  One successful search uses 1 Duaer credit.
---

# Duaer EBI OLS

Search ontology terms in EBI OLS. Data comes from EBI OLS.

## When to use

- Search terms across ontologies in EBI OLS.
- Find a term when you do not know the ontology.

## When not to use

- Disease terms. Use https://skills.duaer.com/mondo.md.

## Call

\`GET https://api.duaer.com/v1/data/ols?words=apoptosis&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — such as apoptosis.
- \`id\` — optional.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/ols?words=apoptosis&limit=10\` — OLS terms matching apoptosis.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`EBI OLS\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`oboId\`, \`ontology\`, \`iri\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/gene-ontology.md — Duaer Gene Ontology
- https://skills.duaer.com/mesh.md — Duaer MeSH
- https://skills.duaer.com/mondo.md — Duaer Mondo
`,

	refmet: `---
name: duaer-refmet
description: >-
  Duaer RefMet. Search metabolites in Metabolomics Workbench RefMet.
  One successful search uses 1 Duaer credit.
---

# Duaer RefMet

Search metabolites in Metabolomics Workbench RefMet. Data comes from RefMet.

## When to use

- Find standardized metabolite names in RefMet.
- Look up one RefMet name.

## When not to use

- ChEBI metabolites. Use https://skills.duaer.com/metabolites.md.

## Call

\`GET https://api.duaer.com/v1/data/refmet?words=glucose&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`.

- \`words\` — such as glucose.
- \`id\` — optional.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/refmet?words=glucose&limit=10\` — RefMet names matching glucose.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`RefMet\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`refmetId\`, \`formula\`, \`pubchemCid\`, \`hmdbId\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/metabolites.md — Duaer metabolites
- https://skills.duaer.com/metabolights.md — Duaer MetaboLights
- https://skills.duaer.com/chebi.md — Duaer ChEBI
- https://skills.duaer.com/metabolic-dark-matter.md — Duaer: annotate an unknown feature (metabolic dark matter)
`,

	wormbase: `---
name: duaer-wormbase
description: >-
  Duaer WormBase. Search C. elegans genes from Alliance / WormBase.
  One successful search uses 1 Duaer credit.
---

# Duaer WormBase

Search C. elegans genes from Alliance / WormBase. Data comes from WormBase.

## When to use

- Find C. elegans genes.
- Look up one WormBase gene id.

## When not to use

- Fly genes. Use https://skills.duaer.com/flybase.md.

## Call

\`GET https://api.duaer.com/v1/data/wormbase?words=unc-26&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — such as unc-26.
- \`id\` — optional.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/wormbase?words=unc-26&limit=10\` — WormBase genes matching unc-26.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`WormBase\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`geneId\`, \`symbol\`, \`species\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/alliance.md — Duaer Alliance
- https://skills.duaer.com/genes.md — Duaer genes
- https://skills.duaer.com/orthologs.md — Duaer orthologs
`,

	flybase: `---
name: duaer-flybase
description: >-
  Duaer FlyBase. Search Drosophila genes from Alliance / FlyBase.
  One successful search uses 1 Duaer credit.
---

# Duaer FlyBase

Search Drosophila genes from Alliance / FlyBase. Data comes from FlyBase.

## When to use

- Find Drosophila genes.
- Look up one FlyBase gene id.

## When not to use

- Worm genes. Use https://skills.duaer.com/wormbase.md.

## Call

\`GET https://api.duaer.com/v1/data/flybase?words=Adh&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — such as Adh.
- \`id\` — optional.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/flybase?words=Adh&limit=10\` — FlyBase genes matching Adh.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`FlyBase\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`geneId\`, \`symbol\`, \`species\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/alliance.md — Duaer Alliance
- https://skills.duaer.com/genes.md — Duaer genes
- https://skills.duaer.com/orthologs.md — Duaer orthologs
`,

	zfin: `---
name: duaer-zfin
description: >-
  Duaer ZFIN. Search zebrafish genes from Alliance / ZFIN.
  One successful search uses 1 Duaer credit.
---

# Duaer ZFIN

Search zebrafish genes from Alliance / ZFIN. Data comes from ZFIN.

## When to use

- Find zebrafish genes.
- Look up one ZFIN gene id.

## When not to use

- Mouse genes. Use https://skills.duaer.com/mgi.md.

## Call

\`GET https://api.duaer.com/v1/data/zfin?words=pax2a&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — such as pax2a.
- \`id\` — optional.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/zfin?words=pax2a&limit=10\` — ZFIN genes matching pax2a.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`ZFIN\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`geneId\`, \`symbol\`, \`species\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/alliance.md — Duaer Alliance
- https://skills.duaer.com/genes.md — Duaer genes
- https://skills.duaer.com/orthologs.md — Duaer orthologs
`,

	biorxiv: `---
name: duaer-biorxiv
description: >-
  Duaer bioRxiv. Search bioRxiv preprints.
  One successful search uses 1 Duaer credit.
---

# Duaer bioRxiv

Search bioRxiv preprints. Data comes from bioRxiv.

## When to use

- Find bioRxiv preprints.
- Look up one bioRxiv DOI.

## When not to use

- medRxiv preprints. Use https://skills.duaer.com/medrxiv.md.

## Call

\`GET https://api.duaer.com/v1/data/biorxiv?words=BRCA1&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — such as BRCA1.
- \`id\` — optional.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/biorxiv?words=BRCA1&limit=10\` — bioRxiv preprints on BRCA1.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`bioRxiv\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`preprintId\`, \`doi\`, \`authors\`, \`published\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/preprints.md — Duaer preprints
- https://skills.duaer.com/papers.md — Duaer papers
- https://skills.duaer.com/europe-pmc.md — Duaer Europe PMC
`,

	medrxiv: `---
name: duaer-medrxiv
description: >-
  Duaer medRxiv. Search medRxiv preprints.
  One successful search uses 1 Duaer credit.
---

# Duaer medRxiv

Search medRxiv preprints. Data comes from medRxiv.

## When to use

- Find medRxiv preprints.
- Look up one medRxiv DOI.

## When not to use

- bioRxiv preprints. Use https://skills.duaer.com/biorxiv.md.

## Call

\`GET https://api.duaer.com/v1/data/medrxiv?words=covid&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — such as covid.
- \`id\` — optional.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/medrxiv?words=covid&limit=10\` — medRxiv preprints on covid.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`medRxiv\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`preprintId\`, \`doi\`, \`authors\`, \`published\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/preprints.md — Duaer preprints
- https://skills.duaer.com/papers.md — Duaer papers
- https://skills.duaer.com/europe-pmc.md — Duaer Europe PMC
`,

	mirbase: `---
name: duaer-mirbase
description: >-
  Duaer miRBase. Search miRNA entries from RNAcentral.
  One successful search uses 1 Duaer credit.
---

# Duaer miRBase

Search miRNA entries from RNAcentral. Data comes from miRBase via RNAcentral.

## When to use

- Find miRNA entries from miRBase via RNAcentral.
- Look up one miRNA id.

## When not to use

- All non-coding RNA. Use https://skills.duaer.com/rnacentral.md.

## Call

\`GET https://api.duaer.com/v1/data/mirbase?words=hsa-let-7a&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — such as hsa-let-7a.
- \`id\` — optional.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/mirbase?words=hsa-let-7a&limit=10\` — miRNA entries for hsa-let-7a.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`miRBase via RNAcentral\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`ursId\`, \`description\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/rnacentral.md — Duaer RNAcentral
- https://skills.duaer.com/mirna.md — Duaer miRNA
- https://skills.duaer.com/genes.md — Duaer genes
`,

	'open-food-facts': `---
name: duaer-open-food-facts
description: >-
  Duaer Open Food Facts. Search products in Open Food Facts.
  One successful search uses 1 Duaer credit.
---

# Duaer Open Food Facts

Search products in Open Food Facts. Data comes from Open Food Facts.

## When to use

- Find packaged food products in Open Food Facts.
- Look up one product barcode.

## When not to use

- Nutrient data for foods. Use https://skills.duaer.com/usda-fdc.md.

## Call

\`GET https://api.duaer.com/v1/data/open-food-facts?words=yogurt&limit=10\`

${header}

## Parameters

Provide \`words\` or \`id\`. If you send both, Duaer uses \`id\`.

- \`words\` — product name, such as yogurt.
- \`id\` — Optional. Barcode such as 3017620422003.
- \`limit\` — Optional. From 1 to 20. Default 10.

## Examples

- \`GET https://api.duaer.com/v1/data/open-food-facts?words=yogurt&limit=10\` — products matching yogurt.

## Result

The response is \`{ "items": [...] }\`. Each item has \`source\` (\`Open Food Facts\`), \`title\`, \`url\`, and \`summary\`, plus:

- \`code\`, \`brands\` — text.

${blank}

${credits}

## Related

- https://skills.duaer.com/metabolites.md — Duaer metabolites
- https://skills.duaer.com/usda-fdc.md — Duaer USDA FoodData Central
- https://skills.duaer.com/compounds.md — Duaer compounds
`,
};

/** Skill catalog for https://skills.duaer.com. Add a row, then run `node scripts/render.mjs`. */

export const KEY_URL = 'https://skills.duaer.com/keys.md';

const keyLine = `Get a Duaer key: ${KEY_URL}`;

const credits = `## Credits

One successful search uses 1 credit.
An empty search, a failed search, a compound that matches nothing, or no remaining credits uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.
`;

function skill({ name, description, title, call, fields }) {
	const fieldList = fields.map((field) => `- ${field}`).join('\n');
	return `---
name: ${name}
description: >-
  ${description}
---

# ${title}

${description}

## Call

\`${call}\`

Header: \`Authorization: Bearer <Duaer key>\`

Use an account key or a model API key.

${keyLine}

${fieldList}

## Result

Each item includes \`source\`, \`title\`, \`url\`, and \`summary\`, plus the fields named on this skill.

${credits}`;
}

export const skills = [
	{
		slug: 'papers',
		related: ['proteins', 'trials', 'diseases', 'preprints', 'grants', 'patents'],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search papers in Duaer', zh: '在 Duaer 里检索论文' },
		lede: {
			en: 'In Duaer, search published papers. One successful search uses 1 credit.',
			zh: '在 Duaer 里检索已发表论文。一次成功查询用 1 额度。',
		},
		returns: {
			en: 'Each paper has a title, link, and summary. Search by words, title, abstract, author, year, type, open access, citations, language, DOI, journal, institution, or topic.',
			zh: '每篇论文有标题、链接和摘要。可按词语、标题、摘要、作者、年份、类型、开放获取、被引次数、语言、DOI、期刊、机构或主题检索。',
		},
		skill: skill({
			name: 'duaer-papers',
			description: 'Search published papers through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer papers',
			call: 'GET https://api.duaer.com/v1/data/papers?title=lithium&author=Zhang&yearFrom=2020&yearTo=2024&limit=10',
			fields: [
				'`q` — words in the title, abstract, or full text.',
				'`title` — words in the title.',
				'`abstract` — words in the abstract.',
				'`author` — author name.',
				'`yearFrom`, `yearTo` — publication year. Leave a year out, or send `0`, for any year. A set year is from 1000 to 2100.',
				'`type` — work type, such as `article`, `preprint`, or `review`.',
				'`openAccess` — `yes` or `no`.',
				'`citationsFrom`, `citationsTo` — citation count. `0` means no bound.',
				'`language` — code such as `en` or `zh`.',
				'`doi` — digital object identifier.',
				'`journal`, `institution`, `topic` — names. Duaer uses the closest match.',
				'`sort` — `citations` orders by most cited. Omit it for relevance.',
				'`limit` — optional. From 1 to 20. Default 10.',
			],
		}),
	},
	{
		slug: 'proteins',
		related: ['genes', 'structures', 'pathways', 'diseases', 'interactions', 'atlas', 'alphafold', 'complexes'],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search proteins in Duaer', zh: '在 Duaer 里检索基因和蛋白' },
		lede: {
			en: 'In Duaer, search genes and proteins. One successful search uses 1 credit.',
			zh: '在 Duaer 里检索基因和蛋白。一次成功查询用 1 额度。',
		},
		returns: {
			en: 'Each protein has a name, accession, gene, organism, length, review status, function, disease, and location.',
			zh: '每条蛋白有名称、编号、基因、物种、长度、是否审核、功能、疾病和定位。',
		},
		skill: skill({
			name: 'duaer-proteins',
			description: 'Search genes and proteins through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer proteins',
			call: 'GET https://api.duaer.com/v1/data/proteins?gene=INS&organism=Homo%20sapiens&reviewed=yes&limit=10',
			fields: [
				'At least one search field is required. Fields combine.',
				'`q` — words in the protein record.',
				'`gene` — gene symbol. Look up symbols with https://skills.duaer.com/genes.md.',
				'`name` — protein name.',
				'`organism` — organism name. Look up formal names with https://skills.duaer.com/organisms.md.',
				'`accession` — accession.',
				'`reviewed` — `yes` or `no`.',
				'`lengthFrom`, `lengthTo` — sequence length. `0` means no bound.',
				'`disease` — disease name. Look up formal names with https://skills.duaer.com/diseases.md.',
				'`keyword` — UniProt keyword. Look up formal names with https://skills.duaer.com/keywords.md.',
				'`location` — subcellular location. Look up formal names with https://skills.duaer.com/locations.md.',
				'`function` — words in the function text.',
				'`go` — Gene Ontology term. Look up terms with https://skills.duaer.com/gene-ontology.md.',
				'`pathway` — Reactome pathway id or words. Look up pathways with https://skills.duaer.com/pathways.md.',
				'`domain` — InterPro domain id or words. Look up domains with https://skills.duaer.com/domains.md.',
				'`taxonomyId` — NCBI taxonomy id. Look up ids with https://skills.duaer.com/organisms.md.',
				'`limit` — optional. From 1 to 20. Default 10.',
			],
		}),
	},
	{
		slug: 'trials',
		related: ['compounds', 'diseases', 'papers'],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search clinical trials in Duaer', zh: '在 Duaer 里检索临床试验' },
		lede: {
			en: 'In Duaer, search clinical trials. One successful search uses 1 credit.',
			zh: '在 Duaer 里检索临床试验。一次成功查询用 1 额度。',
		},
		returns: {
			en: 'Each study has a title, NCT id, status, phase, conditions, interventions, sponsor, and summary.',
			zh: '每项研究有标题、NCT 编号、状态、分期、疾病、干预、申办方和摘要。',
		},
		skill: skill({
			name: 'duaer-trials',
			description: 'Search clinical trials through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer trials',
			call: 'GET https://api.duaer.com/v1/data/trials?condition=diabetes&intervention=insulin&status=RECRUITING&limit=10',
			fields: [
				'At least one search field is required. Sort alone is not a search. Fields combine.',
				'`condition` — disease or condition.',
				'`term` — other words.',
				'`intervention` — drug, device, or other intervention.',
				'`location` — where the study runs.',
				'`title` — words in the title.',
				'`outcome` — words in the outcome.',
				'`sponsor` — sponsor name.',
				'`lead` — lead sponsor name.',
				'`nctId` — study id.',
				'`status` — recruitment status, such as `RECRUITING` or `COMPLETED`.',
				'`phase` — `EARLY_PHASE1`, `PHASE1`, `PHASE2`, `PHASE3`, `PHASE4`, or `NA`.',
				'`sort` — `recent` orders by last update. Omit it for relevance.',
				'`limit` — optional. From 1 to 20. Default 10.',
			],
		}),
	},
	{
		slug: 'compounds',
		related: ['trials', 'structures', 'proteins', 'activities', 'indications', 'mechanisms', 'assays', 'patents', 'drug-gene', 'reactions', 'metabolites', 'drug-labels', 'adverse-events'],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search compounds in Duaer', zh: '在 Duaer 里检索化合物和药物' },
		lede: {
			en: 'In Duaer, search compounds and drugs. One successful search uses 1 credit.',
			zh: '在 Duaer 里检索化合物和药物。一次成功查询用 1 额度。',
		},
		returns: {
			en: 'Each compound has a name, CID, formula, weight, SMILES, InChIKey, and related properties.',
			zh: '每条化合物有名称、CID、分子式、分子量、SMILES、InChIKey 和相关性质。',
		},
		skill: skill({
			name: 'duaer-compounds',
			description: 'Search compounds and drugs through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer compounds',
			call: 'GET https://api.duaer.com/v1/data/compounds?name=aspirin&limit=10',
			fields: [
				'Send one identifier: `name`, `cid`, `formula`, `smiles`, or `inchikey`.',
				'`limit` — optional. From 1 to 20. Default 10. A name can return several compounds up to this limit.',
			],
		}),
	},
	{
		slug: 'structures',
		related: ['proteins', 'compounds', 'genes', 'alphafold'],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search protein structures in Duaer', zh: '在 Duaer 里检索蛋白结构' },
		lede: {
			en: 'In Duaer, search protein structures. One successful search uses 1 credit.',
			zh: '在 Duaer 里检索蛋白结构。一次成功查询用 1 额度。',
		},
		returns: {
			en: 'Each structure has a PDB id, title, method, resolution, organism, release date, and ligand.',
			zh: '每条结构有 PDB 编号、标题、实验方法、分辨率、物种、发布日期和配体。',
		},
		skill: skill({
			name: 'duaer-structures',
			description: 'Search protein structures through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer structures',
			call: 'GET https://api.duaer.com/v1/data/structures?q=insulin&organism=Homo%20sapiens&method=X-RAY%20DIFFRACTION&resolutionTo=2.5&limit=10',
			fields: [
				'At least one search field is required. Fields combine.',
				'`q` — words in the structure record.',
				'`pdbId` — structure id, such as `4HHB`.',
				'`organism` — scientific name. Look up formal names with https://skills.duaer.com/organisms.md.',
				'`method` — experimental method, such as `X-RAY DIFFRACTION`, `SOLUTION NMR`, or `ELECTRON MICROSCOPY`.',
				'`resolutionFrom`, `resolutionTo` — resolution in angstroms. `0` means no bound.',
				'`releasedFrom`, `releasedTo` — release date as `YYYY-MM-DD`.',
				'`polymer` — `protein`, `dna`, or `rna`.',
				'`ligand` — bound chemical name.',
				'`limit` — optional. From 1 to 20. Default 10.',
			],
		}),
	},
	{
		slug: 'diseases',
		related: ['genes', 'proteins', 'variants', 'trials', 'indications', 'cell-lines'],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search diseases in Duaer', zh: '在 Duaer 里检索疾病' },
		lede: {
			en: 'In Duaer, search UniProt disease names. One successful search uses 1 credit.',
			zh: '在 Duaer 里检索 UniProt 疾病名称。一次成功查询用 1 额度。',
		},
		returns: {
			en: 'Each disease has a formal name, id, acronym, definition, alternative names, and reviewed protein count. Use the name with proteins.disease.',
			zh: '每条疾病有正式名、编号、缩写、定义、别名和已审核蛋白数。正式名可用于蛋白检索的 disease。',
		},
		skill: skill({
			name: 'duaer-diseases',
			description:
				'Search disease names through Duaer. Use the formal name with proteins.disease. One successful search uses 1 Duaer credit.',
			title: 'Duaer diseases',
			call: 'GET https://api.duaer.com/v1/data/diseases?q=diabetes&limit=10',
			fields: [
				'At least one search field is required. Fields combine.',
				'Search with `q` first; use `id` or `acronym` only when you already have them from a result.',
				'`q` — words in the disease name or definition.',
				'`id` — optional. UniProt disease id from a result (`diseaseId`), such as `DI-02060`.',
				'`name` — optional. Disease name.',
				'`acronym` — optional. Disease acronym from a result, such as `T2D`.',
				'`limit` — optional. From 1 to 20. Default 10.',
				'Use `title` as `disease` when searching proteins. Reuse `diseaseId` in `id` for an exact lookup.',
			],
		}),
	},
	{
		slug: 'organisms',
		related: ['proteins', 'genes', 'geo', 'cell-lines'],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search organisms in Duaer', zh: '在 Duaer 里检索物种' },
		lede: {
			en: 'In Duaer, search UniProt taxonomy. One successful search uses 1 credit.',
			zh: '在 Duaer 里检索 UniProt 物种分类。一次成功查询用 1 额度。',
		},
		returns: {
			en: 'Each organism has a scientific name, taxon id, common name, mnemonic, and rank. Use the scientific name with proteins.organism and structures.organism.',
			zh: '每条物种有学名、分类编号、俗名、助记符和等级。学名可用于蛋白与结构检索的 organism。',
		},
		skill: skill({
			name: 'duaer-organisms',
			description:
				'Search organism names through Duaer. Use the scientific name with proteins.organism and structures.organism. One successful search uses 1 Duaer credit.',
			title: 'Duaer organisms',
			call: 'GET https://api.duaer.com/v1/data/organisms?q=human&limit=10',
			fields: [
				'At least one search field is required. Fields combine.',
				'Search with `q` first; use `taxonId` only when you already have it from a result.',
				'`q` — words in the scientific or common name.',
				'`taxonId` — optional. NCBI / UniProt taxon id from a result (`taxonId`), such as `9606`.',
				'`scientific` — optional. Scientific name, such as `Homo sapiens`.',
				'`common` — optional. Common name, such as `human`.',
				'`limit` — optional. From 1 to 20. Default 10.',
				'Use `title` (scientific name) as `organism` when searching proteins or structures. Reuse `taxonId` as `taxonomyId` on proteins.',
			],
		}),
	},
	{
		slug: 'keywords',
		related: ['proteins', 'gene-ontology'],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search keywords in Duaer', zh: '在 Duaer 里检索关键词' },
		lede: {
			en: 'In Duaer, search UniProt keywords. One successful search uses 1 credit.',
			zh: '在 Duaer 里检索 UniProt 关键词。一次成功查询用 1 额度。',
		},
		returns: {
			en: 'Each keyword has a name, id, definition, category, synonyms, and reviewed protein count. Use the name with proteins.keyword.',
			zh: '每条关键词有名称、编号、定义、类别、同义词和已审核蛋白数。名称可用于蛋白 keyword。',
		},
		skill: skill({
			name: 'duaer-keywords',
			description: 'Search UniProt keywords through Duaer. Use the name with proteins.keyword. One successful search uses 1 Duaer credit.',
			title: 'Duaer keywords',
			call: 'GET https://api.duaer.com/v1/data/keywords?q=kinase&limit=10',
			fields: [
							"At least one search field is required. Fields combine.",
							"Search with `q` first; use `id` only when you already have it from a result.",
							"`q` — words in the keyword name or definition.",
							"`id` — optional. UniProt keyword id from a result (`keywordId`), such as `KW-0418`.",
							"`name` — optional. Keyword name.",
							"`limit` — optional. From 1 to 20. Default 10.",
							"Use `title` as `keyword` when searching proteins. Reuse `keywordId` in `id` for an exact lookup."
			],
		}),
	},
	{
		slug: 'locations',
		related: ['proteins', 'genes'],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search locations in Duaer', zh: '在 Duaer 里检索亚细胞定位' },
		lede: {
			en: 'In Duaer, search UniProt subcellular locations. One successful search uses 1 credit.',
			zh: '在 Duaer 里检索 UniProt 亚细胞定位。一次成功查询用 1 额度。',
		},
		returns: {
			en: 'Each location has a name, id, definition, category, synonyms, and reviewed protein count. Use the name with proteins.location.',
			zh: '每条定位有名称、编号、定义、类别、同义词和已审核蛋白数。名称可用于蛋白 location。',
		},
		skill: skill({
			name: 'duaer-locations',
			description: 'Search UniProt subcellular locations through Duaer. Use the name with proteins.location. One successful search uses 1 Duaer credit.',
			title: 'Duaer locations',
			call: 'GET https://api.duaer.com/v1/data/locations?q=nucleus&limit=10',
			fields: [
							"At least one search field is required. Fields combine.",
							"Search with `q` first; use `id` only when you already have it from a result.",
							"`q` — words in the location name or definition.",
							"`id` — optional. UniProt location id from a result (`locationId`), such as `SL-0191`.",
							"`name` — optional. Location name.",
							"`limit` — optional. From 1 to 20. Default 10.",
							"Use `title` as `location` when searching proteins. Reuse `locationId` in `id` for an exact lookup."
			],
		}),
	},
	{
		slug: 'gene-ontology',
		related: ['genes', 'proteins', 'pathways'],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search Gene Ontology in Duaer', zh: '在 Duaer 里检索基因本体' },
		lede: {
			en: 'In Duaer, search Gene Ontology terms. One successful search uses 1 credit.',
			zh: '在 Duaer 里检索 Gene Ontology 术语。一次成功查询用 1 额度。',
		},
		returns: {
			en: 'Each term has a name, goId, aspect, definition, and obsolete flag. Use the name or goId with proteins.go.',
			zh: '每条术语有名称、goId、方面、定义和是否废弃。名称或 goId 可用于蛋白 go。',
		},
		skill: skill({
			name: 'duaer-gene-ontology',
			description: 'Search Gene Ontology terms through Duaer. Use the name or id with proteins.go. One successful search uses 1 Duaer credit.',
			title: 'Duaer Gene Ontology',
			call: 'GET https://api.duaer.com/v1/data/gene-ontology?q=apoptosis&limit=10',
			fields: [
							"At least one search field is required. Fields combine.",
							"Search with `q` first; use `id` only when you already have it from a result.",
							"`q` — words in the term name or definition.",
							"`id` — optional. Gene Ontology id from a result (`goId`), such as `GO:0006915`.",
							"`name` — optional. Term name.",
							"`limit` — optional. From 1 to 20. Default 10.",
							"Use `title` or `goId` as `go` when searching proteins. Reuse `goId` in `id` for an exact lookup."
			],
		}),
	},
	{
		slug: 'pathways',
		related: ['genes', 'proteins', 'compounds', 'reactions'],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search pathways in Duaer', zh: '在 Duaer 里检索通路' },
		lede: {
			en: 'In Duaer, search Reactome pathways. One successful search uses 1 credit.',
			zh: '在 Duaer 里检索 Reactome 通路。一次成功查询用 1 额度。',
		},
		returns: {
			en: 'Each pathway returns pathwayId, species, summary, diagram links, compartments, GO, doi, dates, and flags. Use pathwayId with proteins.pathway. Words and name searches are enriched with the same detail as an id lookup.',
			zh: '每条通路返回 pathwayId、物种、摘要、图链、区室、GO、doi、日期和标志。pathwayId 可用于蛋白 pathway。词语与名称检索会补全与精确 id 相同的详情字段。',
		},
		skill: skill({
			name: 'duaer-pathways',
			description: 'Search Reactome pathways through Duaer. Use the pathwayId with proteins.pathway. One successful search uses 1 Duaer credit.',
			title: 'Duaer pathways',
			call: 'GET https://api.duaer.com/v1/data/pathways?q=insulin&limit=10',
			fields: [
							"At least one search field is required. Fields combine.",
							"Search with `q` first; use `id` only when you already have it from a result.",
							"Word searches default to Homo sapiens pathways.",
							"`q` — words in the pathway name or summary.",
							"`id` — optional. Reactome pathway id from a result (`pathwayId`), such as `R-HSA-264876`.",
							"`name` — optional. Pathway name.",
							"`limit` — optional. From 1 to 20. Default 10.",
							"Use `pathwayId` as `pathway` when searching proteins. Reuse `pathwayId` in `id` for an exact lookup.",
							"Open `browserUrl` for the interactive Reactome diagram, or `diagramUrl` for a PNG export.",
								"Result fields: source, title, url, summary, pathwayId, dbId, stIdVersion, species, browserUrl, diagramUrl, figureUrl, hasDiagram, hasEHLD, isDisease, doi, releaseDate, lastUpdatedDate, compartments, compartmentAccessions, goId, goName, schemaClass. Words and name searches are enriched with Reactome detail, same as an id lookup."
			],
		}),
	},
	{
		slug: 'genes',
		related: ['proteins', 'variants', 'pathways', 'gene-ontology', 'expression', 'atlas', 'geo', 'drug-gene'],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search genes in Duaer', zh: '在 Duaer 里检索基因' },
		lede: {
			en: 'In Duaer, search genes. One successful search uses 1 credit.',
			zh: '在 Duaer 里检索基因。一次成功查询用 1 额度。',
		},
		returns: {
			en: 'Each gene has a symbol, geneId, name, aliases, Ensembl id, map location, and summary. Use the symbol with proteins.gene.',
			zh: '每个基因有符号、geneId、名称、别名、Ensembl 编号、定位和摘要。符号可用于蛋白 gene。',
		},
		skill: skill({
			name: 'duaer-genes',
			description: 'Search genes through Duaer. Use the symbol with proteins.gene. One successful search uses 1 Duaer credit.',
			title: 'Duaer genes',
			call: 'GET https://api.duaer.com/v1/data/genes?q=INS&limit=10',
			fields: [
								"At least one search field is required. Fields combine.",
								"Search with `q` or `symbol` first; use `id` only when you already have an NCBI Gene id.",
								"`q` — words in the gene symbol, name, or summary.",
								"`symbol` — optional. Official gene symbol, such as `INS`.",
								"`id` — optional. NCBI Gene id from a result (`geneId`), such as `3630`.",
								"`species` — optional. Species for words/symbol search. Default `human`.",
								"`limit` — optional. From 1 to 20. Default 10.",
								"Use `symbol` as `gene` when searching proteins. Reuse `geneId` in `id` for an exact lookup."
			],
		}),
	},
	{
		slug: 'variants',
		related: ['genes', 'diseases', 'proteins'],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search variants in Duaer', zh: '在 Duaer 里检索变异' },
		lede: {
			en: 'In Duaer, search variants (ClinVar / dbSNP). One successful search uses 1 credit.',
			zh: '在 Duaer 里检索变异（ClinVar / dbSNP）。一次成功查询用 1 额度。',
		},
		returns: {
			en: 'Each variant has a variantId, rsid, gene, protein HGVS, clinical significance, chrom, ref, and alt.',
			zh: '每个变异有 variantId、rsid、基因、蛋白 HGVS、临床意义、染色体、ref 与 alt。',
		},
		skill: skill({
			name: 'duaer-variants',
			description: 'Search variants through Duaer (ClinVar / dbSNP via MyVariant.info). One successful search uses 1 Duaer credit.',
			title: 'Duaer variants',
			call: 'GET https://api.duaer.com/v1/data/variants?q=rs113488022&limit=10',
			fields: [
								"At least one search field is required. Fields combine.",
								"Search with `q`, `rsid`, or `gene` first; use `id` only when you already have an HGVS genomic id from a result.",
								"`q` — words such as an rs id (`rs113488022`).",
								"`rsid` — optional. dbSNP rs id, such as `rs113488022`.",
								"`gene` — optional. Gene symbol with ClinVar annotations, such as `BRAF`. Look up symbols with https://skills.duaer.com/genes.md.",
								"`id` — optional. HGVS genomic id from a result (`variantId`), such as `chr7:g.140453136A>T`.",
								"`limit` — optional. From 1 to 20. Default 10.",
								"Reuse `variantId` in `id` for an exact lookup."
			],
		}),
	},
	{
		slug: 'domains',
		related: ['proteins', 'gene-ontology', 'pathways'],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search domains in Duaer', zh: '在 Duaer 里检索结构域' },
		lede: {
			en: 'In Duaer, search InterPro domains. One successful search uses 1 credit.',
			zh: '在 Duaer 里检索 InterPro 结构域。一次成功查询用 1 额度。',
		},
		returns: {
			en: 'Each domain has a domainId, name, type, short name, GO ids, and member databases. Use domainId with proteins.domain.',
			zh: '每个结构域有 domainId、名称、类型、短名、GO 编号与成员库。domainId 可用于蛋白 domain。',
		},
		skill: skill({
			name: 'duaer-domains',
			description: 'Search InterPro domains through Duaer. Use the domainId with proteins.domain. One successful search uses 1 Duaer credit.',
			title: 'Duaer domains',
			call: 'GET https://api.duaer.com/v1/data/domains?q=kinase&limit=10',
			fields: [
								"At least one search field is required. Fields combine.",
								"Search with `q` first; use `id` only when you already have an InterPro id from a result.",
								"`q` — words in the domain name or description.",
								"`id` — optional. InterPro id from a result (`domainId`), such as `IPR000719`.",
								"`name` — optional. Domain name.",
								"`limit` — optional. From 1 to 20. Default 10.",
								"Use `domainId` as `domain` when searching proteins. Reuse `domainId` in `id` for an exact lookup."
			],
		}),
	},
	{
		slug: 'preprints',
		related: ['papers', 'genes'],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search preprints in Duaer', zh: '在 Duaer 里检索预印本' },
		lede: {
			en: 'In Duaer, search bioRxiv and medRxiv preprints via Europe PMC. One successful search uses 1 credit.',
			zh: '在 Duaer 里经 Europe PMC 检索 bioRxiv / medRxiv 预印本。一次成功查询用 1 额度。',
		},
		returns: {
			en: 'Each preprint has a title, doi, server, authors, published date, year, and summary.',
			zh: '每条预印本有标题、doi、服务器、作者、发表日期、年份与摘要。',
		},
		skill: skill({
			name: 'duaer-preprints',
			description: 'Search bioRxiv and medRxiv preprints through Duaer (Europe PMC). One successful search uses 1 Duaer credit.',
			title: 'Duaer preprints',
			call: 'GET https://api.duaer.com/v1/data/preprints?q=insulin&limit=10',
			fields: [
								"At least one search field is required (not `server` alone). Fields combine.",
								"`q` — words in the title or abstract.",
								"`title` — optional. Words in the title.",
								"`author` — optional. Author name.",
								"`doi` — optional. Digital object identifier.",
								"`server` — optional. `bioRxiv` or `medRxiv`. Omit for both.",
								"`yearFrom` — optional. First publication year (1000–2100).",
								"`yearTo` — optional. Last publication year (1000–2100).",
								"`limit` — optional. From 1 to 20. Default 10."
			],
		}),
	},
	{
		slug: 'grants',
		related: ['papers', 'preprints'],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search grants in Duaer', zh: '在 Duaer 里检索基金' },
		lede: {
			en: 'In Duaer, search NIH grants via RePORTER. One successful search uses 1 credit.',
			zh: '在 Duaer 里经 NIH RePORTER 检索基金与项目。一次成功查询用 1 额度。',
		},
		returns: {
			en: 'Each grant has a title, project number, PI, organization, agency, fiscal year, award amount, and dates.',
			zh: '每条基金有标题、项目编号、PI、机构、资助机构、财年、金额与起止日期。',
		},
		skill: skill({
			name: 'duaer-grants',
			description: 'Search NIH grants through Duaer (NIH RePORTER). One successful search uses 1 Duaer credit.',
			title: 'Duaer grants',
			call: 'GET https://api.duaer.com/v1/data/grants?q=insulin&limit=10',
			fields: [
								"At least one search field is required. Fields combine.",
								"`q` — words in the project title, terms, or abstract.",
								"`pi` — optional. Principal investigator name.",
								"`organization` — optional. Awardee organization name.",
								"`projectNum` — optional. NIH project number, such as `5P20GM152335-03`.",
								"`yearFrom` — optional. First fiscal year (1000–2100).",
								"`yearTo` — optional. Last fiscal year (1000–2100).",
								"`limit` — optional. From 1 to 20. Default 10."
			],
		}),
	},
	{
		slug: 'interactions',
		related: ['proteins', 'genes', 'organisms', 'expression', 'complexes'],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search interactions in Duaer', zh: '在 Duaer 里检索互作' },
		lede: {
			en: 'In Duaer, search STRING protein interaction partners. One successful search uses 1 credit.',
			zh: '在 Duaer 里经 STRING 检索蛋白互作伙伴。一次成功查询用 1 额度。',
		},
		returns: {
			en: 'Each interaction has partner names, STRING ids, a combined score, and evidence channel scores.',
			zh: '每条互作有伙伴名称、STRING id、综合分与证据通道分。',
		},
		skill: skill({
			name: 'duaer-interactions',
			description: 'Search STRING protein interaction partners through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer interactions',
			call: 'GET https://api.duaer.com/v1/data/interactions?protein=INS&species=9606&limit=10',
			fields: [
				'`protein` is required. Other fields are optional.',
				'`protein` — gene symbol, UniProt accession, or STRING id. Look up symbols with https://skills.duaer.com/genes.md or proteins with https://skills.duaer.com/proteins.md.',
				'`species` — optional. NCBI taxonomy id. Default `9606` (human). Look up ids with https://skills.duaer.com/organisms.md.',
				'`requiredScore` — optional. STRING threshold from 0 to 1000. Omit for the STRING default.',
				'`limit` — optional. From 1 to 20. Default 10.',
			],
		}),
	},
	{
		slug: 'expression',
		related: ['genes', 'proteins', 'interactions', 'targets', 'atlas', 'geo'],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search expression in Duaer', zh: '在 Duaer 里检索表达' },
		lede: {
			en: 'In Duaer, search GTEx median tissue expression. One successful search uses 1 credit.',
			zh: '在 Duaer 里经 GTEx 检索组织中位表达。一次成功查询用 1 额度。',
		},
		returns: {
			en: 'Each row has a tissue, median TPM, Gencode id, and ontology id.',
			zh: '每条结果有组织、中位 TPM、Gencode id 与本体 id。',
		},
		skill: skill({
			name: 'duaer-expression',
			description:
				'Search GTEx median tissue expression through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer expression',
			call: 'GET https://api.duaer.com/v1/data/expression?gene=INS&limit=10',
			fields: [
				'At least `gene` or `gencodeId` is required.',
				'`gene` — gene symbol. Look up symbols with https://skills.duaer.com/genes.md.',
				'`gencodeId` — optional. Ensembl/Gencode id from a result, such as `ENSG00000254647.6`.',
				'`tissue` — optional. GTEx tissue id, such as `Pancreas` or `Adipose_Subcutaneous`.',
				'`limit` — optional. From 1 to 20. Default 10. Results are sorted by median TPM descending.',
			],
		}),
	},
	{
		slug: 'targets',
		related: ['genes', 'diseases', 'proteins', 'expression', 'orthologs', 'activities', 'assays', 'drug-gene'],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search targets in Duaer', zh: '在 Duaer 里检索靶点关联' },
		lede: {
			en: 'In Duaer, search Open Targets gene–disease associations. One successful search uses 1 credit.',
			zh: '在 Duaer 里经 Open Targets 检索基因–疾病关联。一次成功查询用 1 额度。',
		},
		returns: {
			en: 'Each row has a gene, Ensembl id, disease, ontology id, and association score.',
			zh: '每条结果有基因、Ensembl id、疾病、本体 id 与关联分。',
		},
		skill: skill({
			name: 'duaer-targets',
			description:
				'Search Open Targets gene–disease associations through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer targets',
			call: 'GET https://api.duaer.com/v1/data/targets?gene=INS&limit=10',
			fields: [
				'At least `gene` or `disease` is required.',
				'`gene` — gene symbol or Ensembl id. Look up symbols with https://skills.duaer.com/genes.md.',
				'`disease` — optional. Disease name or ontology id (`EFO_` / `MONDO_`). Alone, returns associated targets. With `gene`, filters that gene’s associations. Look up names with https://skills.duaer.com/diseases.md.',
				'`limit` — optional. From 1 to 20. Default 10. Results are sorted by association score descending.',
			],
		}),
	},

	{
		slug: 'orthologs',
		related: ['genes', 'organisms', 'proteins', 'targets'],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search orthologs in Duaer', zh: '在 Duaer 里检索同源基因' },
		lede: {
			en: 'In Duaer, search cross-species orthologs (MyGene HomoloGene). One successful search uses 1 credit.',
			zh: '在 Duaer 里经 MyGene HomoloGene 检索跨物种同源基因。一次成功查询用 1 额度。',
		},
		returns: {
			en: 'Each row has a gene symbol, taxonomy id, organism name, Ensembl id, and HomoloGene id.',
			zh: '每条结果有基因符号、分类编号、物种名、Ensembl id 与 HomoloGene id。',
		},
		skill: skill({
			name: 'duaer-orthologs',
			description:
				'Search cross-species orthologs through Duaer (MyGene HomoloGene). One successful search uses 1 Duaer credit.',
			title: 'Duaer orthologs',
			call: 'GET https://api.duaer.com/v1/data/orthologs?gene=INS&species=9606&limit=10',
			fields: [
				'`gene` is required.',
				'`gene` — gene symbol or NCBI Gene id. Look up symbols with https://skills.duaer.com/genes.md.',
				'`species` — optional. NCBI taxonomy id for the query gene. Default `9606` (human). Look up ids with https://skills.duaer.com/organisms.md.',
				'`orthologSpecies` — optional. Keep only orthologs for this taxonomy id (for example `10090` for mouse).',
				'`limit` — optional. From 1 to 20. Default 10.',
			],
		}),
	},


	{
		slug: 'activities',
		related: ['compounds', 'targets', 'genes', 'indications', 'mechanisms', 'assays'],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search activities in Duaer', zh: '在 Duaer 里检索生物活性' },
		lede: {
			en: 'In Duaer, search ChEMBL bioactivities by molecule or target. One successful search uses 1 credit.',
			zh: '在 Duaer 里经 ChEMBL 按分子或靶点检索生物活性。一次成功查询用 1 额度。',
		},
		returns: {
			en: 'Each row has molecule and target ChEMBL ids, standard type/value, assay, and pChEMBL when present.',
			zh: '每条结果有分子与靶点 ChEMBL id、标准类型/数值、assay，以及可用的 pChEMBL。',
		},
		skill: skill({
			name: 'duaer-activities',
			description:
				'Search ChEMBL bioactivities through Duaer by molecule or target. One successful search uses 1 Duaer credit.',
			title: 'Duaer activities',
			call: 'GET https://api.duaer.com/v1/data/activities?molecule=aspirin&limit=10',
			fields: [
				'At least `molecule` or `target` is required.',
				'`molecule` — molecule name or ChEMBL id (`CHEMBL25`). Names resolve via ChEMBL search. Look up PubChem names with https://skills.duaer.com/compounds.md.',
				'`target` — optional. Target name, gene symbol, or ChEMBL id. Alone, returns activities for that target. With `molecule`, filters both. Look up gene–disease targets with https://skills.duaer.com/targets.md.',
				'`limit` — optional. From 1 to 20. Default 10. Results prefer higher pChEMBL values.',
			],
		}),
	},


	{
		slug: 'atlas',
		related: ['expression', 'genes', 'proteins'],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search tissue atlas in Duaer', zh: '在 Duaer 里检索组织图谱' },
		lede: {
			en: 'In Duaer, search Human Protein Atlas tissue-enriched expression. One successful search uses 1 credit.',
			zh: '在 Duaer 里经 Human Protein Atlas 检索组织富集表达。一次成功查询用 1 额度。',
		},
		returns: {
			en: 'Each row has a gene, Ensembl id, enriched tissue, nTPM, specificity, and secretome location when present.',
			zh: '每条结果有基因、Ensembl id、富集组织、nTPM、特异性，以及可用的分泌位置。',
		},
		skill: skill({
			name: 'duaer-atlas',
			description:
				'Search Human Protein Atlas tissue-enriched expression through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer tissue atlas',
			call: 'GET https://api.duaer.com/v1/data/atlas?gene=INS&limit=10',
			fields: [
				'`gene` is required.',
				'`gene` — gene symbol or Ensembl id. Look up symbols with https://skills.duaer.com/genes.md.',
				'`tissue` — optional. Keep only enriched tissues whose name contains this text (for example `pancreas`).',
				'`limit` — optional. From 1 to 20. Default 10. Results sort by nTPM descending.',
			],
		}),
	},


	{
		slug: 'indications',
		related: ['compounds', 'activities', 'diseases', 'mechanisms'],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search indications in Duaer', zh: '在 Duaer 里检索适应症' },
		lede: {
			en: 'In Duaer, search ChEMBL drug indications by molecule. One successful search uses 1 credit.',
			zh: '在 Duaer 里经 ChEMBL 按分子检索药物适应症。一次成功查询用 1 额度。',
		},
		returns: {
			en: 'Each row has an indication label, EFO/MeSH ids, and max phase for that indication.',
			zh: '每条结果有适应症名称、EFO/MeSH 编号，以及该适应症的最高阶段。',
		},
		skill: skill({
			name: 'duaer-indications',
			description:
				'Search ChEMBL drug indications through Duaer by molecule. One successful search uses 1 Duaer credit.',
			title: 'Duaer indications',
			call: 'GET https://api.duaer.com/v1/data/indications?molecule=aspirin&limit=10',
			fields: [
				'`molecule` is required.',
				'`molecule` — molecule name or ChEMBL id (`CHEMBL25`). Names resolve via ChEMBL search. Look up PubChem names with https://skills.duaer.com/compounds.md.',
				'`limit` — optional. From 1 to 20. Default 10. Results prefer higher max phase.',
			],
		}),
	},


	{
		slug: 'mechanisms',
		related: ['compounds', 'activities', 'indications'],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search mechanisms in Duaer', zh: '在 Duaer 里检索作用机制' },
		lede: {
			en: 'In Duaer, search ChEMBL mechanisms of action by molecule. One successful search uses 1 credit.',
			zh: '在 Duaer 里经 ChEMBL 按分子检索作用机制。一次成功查询用 1 额度。',
		},
		returns: {
			en: 'Each row has a mechanism of action, action type, target ChEMBL id, and max phase.',
			zh: '每条结果有作用机制描述、作用类型、靶点 ChEMBL id，以及最高阶段。',
		},
		skill: skill({
			name: 'duaer-mechanisms',
			description:
				'Search ChEMBL mechanisms of action through Duaer by molecule. One successful search uses 1 Duaer credit.',
			title: 'Duaer mechanisms',
			call: 'GET https://api.duaer.com/v1/data/mechanisms?molecule=aspirin&limit=10',
			fields: [
				'`molecule` is required.',
				'`molecule` — molecule name or ChEMBL id (`CHEMBL25`). Names resolve via ChEMBL search. Look up PubChem names with https://skills.duaer.com/compounds.md.',
				'`limit` — optional. From 1 to 20. Default 10. Results prefer higher max phase.',
			],
		}),
	},


	{
		slug: 'geo',
		related: ['expression', 'organisms', 'genes'],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search GEO in Duaer', zh: '在 Duaer 里检索 GEO' },
		lede: {
			en: 'In Duaer, search NCBI GEO series and datasets. One successful search uses 1 credit.',
			zh: '在 Duaer 里检索 NCBI GEO 系列与数据集。一次成功查询用 1 额度。',
		},
		returns: {
			en: 'Each row has an accession, title, organism, dataset type, and sample count when present.',
			zh: '每条结果有登录号、标题、物种、数据类型，以及可用的样本数。',
		},
		skill: skill({
			name: 'duaer-geo',
			description:
				'Search NCBI GEO series and datasets through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer GEO',
			call: 'GET https://api.duaer.com/v1/data/geo?words=insulin&organism=Homo%20sapiens&entryType=gse&limit=10',
			fields: [
				'`words` is required.',
				'`words` — words in the GEO record, or an accession such as `GSE10072`.',
				'`organism` — optional. Scientific name (`Homo sapiens`). Look up names with https://skills.duaer.com/organisms.md.',
				'`entryType` — optional. `gse` (default), `gds`, `gpl`, `gsm`, or `any`.',
				'`limit` — optional. From 1 to 20. Default 10.',
			],
		}),
	},


	{
		slug: 'assays',
		related: ['activities', 'targets', 'compounds', 'patents'],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search assays in Duaer', zh: '在 Duaer 里检索实验测定' },
		lede: {
			en: 'In Duaer, search ChEMBL assays by words or assay id. One successful search uses 1 credit.',
			zh: '在 Duaer 里按关键词或 id 检索 ChEMBL 实验测定。一次成功查询用 1 额度。',
		},
		returns: {
			en: 'Each row has an assay id, description, type, organism, target id, and confidence when present.',
			zh: '每条结果有 assay id、描述、类型、物种、靶点 id，以及可用的置信度。',
		},
		skill: skill({
			name: 'duaer-assays',
			description:
				'Search ChEMBL assays through Duaer by words or assay id. One successful search uses 1 Duaer credit.',
			title: 'Duaer assays',
			call: 'GET https://api.duaer.com/v1/data/assays?words=EGFR&organism=Homo%20sapiens&assayType=B&limit=10',
			fields: [
				'`words` is required.',
				'`words` — words in the assay description, or a ChEMBL assay id (`CHEMBL5344031`).',
				'`organism` — optional. Keep assays whose organism contains this text.',
				'`assayType` — optional. Letter code (`B`/`F`/`A`/…) or words from the type description.',
				'`limit` — optional. From 1 to 20. Default 10. Results prefer higher confidence.',
			],
		}),
	},


	{
		slug: 'patents',
		related: ['papers', 'compounds', 'assays'],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search patents in Duaer', zh: '在 Duaer 里检索专利' },
		lede: {
			en: 'In Duaer, search patents via Europe PMC. One successful search uses 1 credit.',
			zh: '在 Duaer 里经 Europe PMC 检索专利。一次成功查询用 1 额度。',
		},
		returns: {
			en: 'Each row has a patent id, title, country, year, and assignee when present.',
			zh: '每条结果有专利编号、标题、国家、年份，以及可用的申请人。',
		},
		skill: skill({
			name: 'duaer-patents',
			description:
				'Search patents through Duaer via Europe PMC. One successful search uses 1 Duaer credit.',
			title: 'Duaer patents',
			call: 'GET https://api.duaer.com/v1/data/patents?words=insulin&yearFrom=2010&yearTo=2020&country=US&limit=10',
			fields: [
				'`words` is required.',
				'`words` — words in the patent title or abstract.',
				'`yearFrom` / `yearTo` — optional. Publication year range (YYYY).',
				'`country` — optional. Country code on the patent id (`US`, `EP`, `WO`, …).',
				'`limit` — optional. From 1 to 20. Default 10.',
			],
		}),
	},


	{
		slug: 'alphafold',
		related: ['structures', 'proteins', 'genes'],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Look up AlphaFold structures in Duaer', zh: '在 Duaer 里查询 AlphaFold 预测结构' },
		lede: {
			en: 'In Duaer, look up AlphaFold predicted structures by gene or UniProt accession. One successful search uses 1 credit.',
			zh: '在 Duaer 里按基因或 UniProt 编号查询 AlphaFold 预测结构。一次成功查询用 1 额度。',
		},
		returns: {
			en: 'Each row has accession, gene, pLDDT, model version, and PDB/CIF download urls when present.',
			zh: '每条结果有 accession、基因、pLDDT、模型版本，以及可用的 PDB/CIF 下载链接。',
		},
		skill: skill({
			name: 'duaer-alphafold',
			description:
				'Look up AlphaFold predicted structures through Duaer by gene or UniProt accession. One successful search uses 1 Duaer credit.',
			title: 'Duaer AlphaFold',
			call: 'GET https://api.duaer.com/v1/data/alphafold?gene=INS&organism=Homo%20sapiens&limit=10',
			fields: [
				'Provide `gene` or `accession` (or both; accession wins).',
				'`gene` — gene symbol resolved via UniProt (default organism Homo sapiens).',
				'`accession` — optional. UniProt accession (`P01308`). Overrides gene when set.',
				'`organism` — optional. Used when resolving gene (default `Homo sapiens`).',
				'`limit` — optional. From 1 to 20. Default 10.',
			],
		}),
	},

	{
		slug: 'cell-lines',
		related: ['organisms', 'diseases', 'assays'],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search cell lines in Duaer', zh: '在 Duaer 里检索细胞系' },
		lede: {
			en: 'In Duaer, search cell lines via Cellosaurus. One successful search uses 1 credit.',
			zh: '在 Duaer 里经 Cellosaurus 检索细胞系。一次成功查询用 1 额度。',
		},
		returns: {
			en: 'Each row has a Cellosaurus accession, name, species, category, and disease when present.',
			zh: '每条结果有 Cellosaurus 编号、名称、物种、类别，以及可用的疾病。',
		},
		skill: skill({
			name: 'duaer-cell-lines',
			description:
				'Search cell lines through Duaer via Cellosaurus. One successful search uses 1 Duaer credit.',
			title: 'Duaer cell lines',
			call: 'GET https://api.duaer.com/v1/data/cell-lines?words=HeLa&species=Homo%20sapiens&category=Cancer&limit=10',
			fields: [
				'`words` is required.',
				'`words` — cell line name, synonym, or Cellosaurus accession (`CVCL_0030`).',
				'`species` — optional. Keep lines whose species contains this text.',
				'`category` — optional. Keep lines whose category contains this text.',
				'`limit` — optional. From 1 to 20. Default 10.',
			],
		}),
	},

	{
		slug: 'drug-gene',
		related: ['genes', 'compounds', 'targets'],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search drug–gene interactions in Duaer', zh: '在 Duaer 里检索药–基因互作' },
		lede: {
			en: 'In Duaer, search drug–gene interactions via DGIdb. One successful search uses 1 credit.',
			zh: '在 Duaer 里经 DGIdb 检索药–基因互作。一次成功查询用 1 额度。',
		},
		returns: {
			en: 'Each row has a gene, drug, interaction type, score, and approval flag when present.',
			zh: '每条结果有基因、药物、互作类型、评分，以及可用的批准标记。',
		},
		skill: skill({
			name: 'duaer-drug-gene',
			description:
				'Search drug–gene interactions through Duaer via DGIdb. One successful search uses 1 Duaer credit.',
			title: 'Duaer drug–gene',
			call: 'GET https://api.duaer.com/v1/data/drug-gene?gene=EGFR&approved=yes&limit=10',
			fields: [
				'Provide `gene` or `drug` (or both).',
				'`gene` — gene symbol (e.g. `EGFR`).',
				'`drug` — drug name (e.g. `imatinib`).',
				'`approved` — optional. `yes` or `no` to keep only approved or unapproved drugs.',
				'`limit` — optional. From 1 to 20. Default 10. Results prefer higher interaction score.',
			],
		}),
	},

	{
		slug: 'reactions',
		related: ['pathways', 'compounds', 'proteins', 'metabolites'],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search reactions in Duaer', zh: '在 Duaer 里检索生化反应' },
		lede: {
			en: 'In Duaer, search biochemical reactions via Rhea. One successful search uses 1 credit.',
			zh: '在 Duaer 里经 Rhea 检索生化反应。一次成功查询用 1 额度。',
		},
		returns: {
			en: 'Each row has a Rhea id, equation, EC number, and status when present.',
			zh: '每条结果有 Rhea 编号、方程式、EC 号，以及可用的状态。',
		},
		skill: skill({
			name: 'duaer-reactions',
			description:
				'Search biochemical reactions through Duaer via Rhea. One successful search uses 1 Duaer credit.',
			title: 'Duaer reactions',
			call: 'GET https://api.duaer.com/v1/data/reactions?words=kinase&ec=2.7.10.1&limit=10',
			fields: [
				'Provide `words` or `ec` (or both).',
				'`words` — words in the equation, or a Rhea id (`RHEA:10596`).',
				'`ec` — optional. Enzyme Commission number (`2.7.10.1` or `ec:2.7.10.1`). Alone is enough.',
				'`limit` — optional. From 1 to 20. Default 10.',
			],
		}),
	},

	{
		slug: 'complexes',
		related: ['interactions', 'proteins', 'organisms'],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search complexes in Duaer', zh: '在 Duaer 里检索蛋白复合物' },
		lede: {
			en: 'In Duaer, search protein complexes via Complex Portal. One successful search uses 1 credit.',
			zh: '在 Duaer 里经 Complex Portal 检索蛋白复合物。一次成功查询用 1 额度。',
		},
		returns: {
			en: 'Each row has a Complex Portal accession, name, organism, and member gene or protein names when present.',
			zh: '每条结果有 Complex Portal 编号、名称、物种，以及可用的成员基因或蛋白名。',
		},
		skill: skill({
			name: 'duaer-complexes',
			description:
				'Search protein complexes through Duaer via Complex Portal. One successful search uses 1 Duaer credit.',
			title: 'Duaer complexes',
			call: 'GET https://api.duaer.com/v1/data/complexes?words=insulin&organism=Homo%20sapiens&limit=10',
			fields: [
				'`words` is required.',
				'`words` — words in the complex name or description, or a Complex Portal id (`CPX-4305`).',
				'`organism` — optional. Keep complexes whose organism contains this text, or an NCBI taxonomy id (`9606`).',
				'`limit` — optional. From 1 to 20. Default 10.',
			],
		}),
	},

	{
		slug: 'metabolites',
		related: ['compounds', 'reactions', 'pathways', 'drug-labels'],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search metabolites in Duaer', zh: '在 Duaer 里检索代谢物' },
		lede: {
			en: 'In Duaer, search metabolites via ChEBI. One successful search uses 1 credit.',
			zh: '在 Duaer 里经 ChEBI 检索代谢物。一次成功查询用 1 额度。',
		},
		returns: {
			en: 'Each row has a ChEBI id, name, description, and synonyms when present.',
			zh: '每条结果有 ChEBI 编号、名称、描述，以及可用的同义词。',
		},
		skill: skill({
			name: 'duaer-metabolites',
			description:
				'Search metabolites through Duaer via ChEBI. One successful search uses 1 Duaer credit.',
			title: 'Duaer metabolites',
			call: 'GET https://api.duaer.com/v1/data/metabolites?words=glucose&limit=10',
			fields: [
				'Provide `words` or `id` (or both; id wins).',
				'`words` — metabolite or small-molecule name.',
				'`id` — optional. ChEBI id (`CHEBI:17234` or `17234`). Overrides words when set.',
				'`limit` — optional. From 1 to 20. Default 10.',
			],
		}),
	},

	{
		slug: 'drug-labels',
		related: ['compounds', 'indications', 'drug-gene', 'metabolites', 'adverse-events'],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search drug labels in Duaer', zh: '在 Duaer 里检索药品标签' },
		lede: {
			en: 'In Duaer, search FDA drug labels via OpenFDA. One successful search uses 1 credit.',
			zh: '在 Duaer 里经 OpenFDA 检索 FDA 药品标签。一次成功查询用 1 额度。',
		},
		returns: {
			en: 'Each row has brand and generic names, manufacturer, set id, and indications when present.',
			zh: '每条结果有商品名、通用名、厂家、set id，以及可用的适应症摘要。',
		},
		skill: skill({
			name: 'duaer-drug-labels',
			description:
				'Search FDA drug labels through Duaer via OpenFDA. One successful search uses 1 Duaer credit.',
			title: 'Duaer drug labels',
			call: 'GET https://api.duaer.com/v1/data/drug-labels?words=aspirin&limit=10',
			fields: [
				'Provide `words`, `brand`, or `generic` (or combine; brand/generic narrow when set).',
				'`words` — brand, generic, or substance name.',
				'`brand` — optional. OpenFDA brand name.',
				'`generic` — optional. OpenFDA generic name.',
				'`limit` — optional. From 1 to 20. Default 10.',
			],
		}),
	},

	{
		slug: 'adverse-events',
		related: ['drug-labels', 'trials', 'indications', 'compounds', 'gwas'],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search adverse events in Duaer', zh: '在 Duaer 里检索不良反应' },
		lede: {
			en: 'In Duaer, search FDA adverse event reports via OpenFDA FAERS. One successful search uses 1 credit.',
			zh: '在 Duaer 里经 OpenFDA FAERS 检索 FDA 不良反应报告。一次成功查询用 1 额度。',
		},
		returns: {
			en: 'Each row has reactions, drugs, seriousness, receipt date, and country when present.',
			zh: '每条结果有反应、药物、是否严重、接收日期，以及可用的国家。',
		},
		skill: skill({
			name: 'duaer-adverse-events',
			description:
				'Search FDA adverse event reports through Duaer via OpenFDA FAERS. One successful search uses 1 Duaer credit.',
			title: 'Duaer adverse events',
			call: 'GET https://api.duaer.com/v1/data/adverse-events?words=aspirin&limit=10',
			fields: [
				'Provide `words`, `brand`, or `generic` (or combine; brand/generic narrow when set).',
				'`words` — brand, generic, substance, or medicinal product.',
				'`brand` — optional. OpenFDA brand name.',
				'`generic` — optional. OpenFDA generic name.',
				'`limit` — optional. From 1 to 20. Default 10.',
			],
		}),
	},

	{
		slug: 'gwas',
		related: ['variants', 'genes', 'diseases', 'adverse-events'],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search GWAS associations in Duaer', zh: '在 Duaer 里检索 GWAS' },
		lede: {
			en: 'In Duaer, search GWAS Catalog associations via REST API v2. One successful search uses 1 credit.',
			zh: '在 Duaer 里经 GWAS Catalog REST API v2 检索关联。一次成功查询用 1 额度。',
		},
		returns: {
			en: 'Each row has rs id, mapped genes, EFO traits, p-value, and study accession when present.',
			zh: '每条结果有 rs 编号、定位基因、EFO 性状、p 值，以及可用的研究编号。',
		},
		skill: skill({
			name: 'duaer-gwas',
			description:
				'Search GWAS Catalog associations through Duaer (REST API v2). One successful search uses 1 Duaer credit.',
			title: 'Duaer GWAS',
			call: 'GET https://api.duaer.com/v1/data/gwas?words=TCF7L2&limit=10',
			fields: [
				'Provide `words`, `gene`, `rsId`, or `trait` (or combine).',
				'`words` — gene symbol or rs id (`rs…`).',
				'`gene` — optional. Mapped gene symbol.',
				'`rsId` — optional. Variant rs id (`rs7903146`).',
				'`trait` — optional. EFO trait text.',
				'`limit` — optional. From 1 to 20. Default 10.',
			],
		}),
	},

	{
		slug: 'rxnorm',
		related: ['compounds', 'drug-labels', 'indications', 'gwas'],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search RxNorm in Duaer', zh: '在 Duaer 里检索 RxNorm' },
		lede: {
			en: 'In Duaer, look up drug names via RxNorm (NLM RxNav). One successful search uses 1 credit.',
			zh: '在 Duaer 里经 RxNorm（NLM RxNav）检索药名。一次成功查询用 1 额度。',
		},
		returns: {
			en: 'Each row has an RxCUI, name, and term type when present.',
			zh: '每条结果有 RxCUI、名称，以及可用的术语类型。',
		},
		skill: skill({
			name: 'duaer-rxnorm',
			description:
				'Look up drug names through Duaer via RxNorm (NLM RxNav). One successful search uses 1 Duaer credit.',
			title: 'Duaer RxNorm',
			call: 'GET https://api.duaer.com/v1/data/rxnorm?words=aspirin&limit=10',
			fields: [
				'Provide `words` or `id` (or both; id wins).',
				'`words` — drug or ingredient name.',
				'`id` — optional. RxNorm concept id (RxCUI). Overrides words when set.',
				'`limit` — optional. From 1 to 20. Default 10.',
			],
		}),
	},

	{
		slug: 'mesh',
		related: ['keywords', 'rxnorm', 'diseases', 'trials'],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search MeSH in Duaer', zh: '在 Duaer 里检索 MeSH' },
		lede: {
			en: 'In Duaer, look up MeSH subject headings (NLM MeSH). One successful search uses 1 credit.',
			zh: '在 Duaer 里经 MeSH（NLM）检索主题词。一次成功查询用 1 额度。',
		},
		returns: {
			en: 'Each row has a MeSH unique id, preferred label, and synonyms when present.',
			zh: '每条结果有 MeSH UI、优选标签，以及可用的同义词。',
		},
		skill: skill({
			name: 'duaer-mesh',
			description:
				'Look up MeSH subject headings through Duaer (NLM MeSH). One successful search uses 1 Duaer credit.',
			title: 'Duaer MeSH',
			call: 'GET https://api.duaer.com/v1/data/mesh?words=aspirin&limit=10',
			fields: [
				'Provide `words` or `id` (or both; id wins).',
				'`words` — MeSH descriptor label.',
				'`id` — optional. MeSH unique id (D001241). Overrides words when set.',
				'`limit` — optional. From 1 to 20. Default 10.',
			],
		}),
	},

	{
		slug: 'phenotypes',
		related: ['diseases', 'mesh', 'trials', 'adverse-events'],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search phenotypes in Duaer', zh: '在 Duaer 里检索表型' },
		lede: {
			en: 'In Duaer, look up HPO phenotype terms (EBI OLS). One successful search uses 1 credit.',
			zh: '在 Duaer 里经 HPO（EBI OLS）检索表型术语。一次成功查询用 1 额度。',
		},
		returns: {
			en: 'Each row has an HPO id, preferred label, and synonyms when present.',
			zh: '每条结果有 HPO id、优选标签，以及可用的同义词。',
		},
		skill: skill({
			name: 'duaer-phenotypes',
			description:
				'Look up HPO phenotype terms through Duaer (EBI OLS). One successful search uses 1 Duaer credit.',
			title: 'Duaer phenotypes',
			call: 'GET https://api.duaer.com/v1/data/phenotypes?words=diabetes&limit=10',
			fields: [
				'Provide `words` or `id` (or both; id wins).',
				'`words` — HPO phenotype label.',
				'`id` — optional. HPO id (HP:0000819). Overrides words when set.',
				'`limit` — optional. From 1 to 20. Default 10.',
			],
		}),
	},

	{
		slug: 'crossrefs',
		related: ['compounds', 'metabolites', 'drug-labels', 'indications'],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search crossrefs in Duaer', zh: '在 Duaer 里检索交叉引用' },
		lede: {
			en: 'In Duaer, look up UniChem compound cross-references by InChIKey. One successful search uses 1 credit.',
			zh: '在 Duaer 里经 UniChem 按 InChIKey 检索化合物交叉引用。一次成功查询用 1 额度。',
		},
		returns: {
			en: 'Each row has a database name, compound id, and link when present.',
			zh: '每条结果有数据库名、化合物 id，以及可用的链接。',
		},
		skill: skill({
			name: 'duaer-crossrefs',
			description:
				'Look up UniChem compound cross-references through Duaer by InChIKey. One successful search uses 1 Duaer credit.',
			title: 'Duaer crossrefs',
			call: 'GET https://api.duaer.com/v1/data/crossrefs?inchikey=BSYNRYMUTXBXSQ-UHFFFAOYSA-N&limit=10',
			fields: [
				'Provide `inchikey`.',
				'`inchikey` — compound InChIKey (for example aspirin: BSYNRYMUTXBXSQ-UHFFFAOYSA-N).',
				'`limit` — optional. From 1 to 20. Default 10.',
			],
		}),
	},

	{
		slug: 'drug-recalls',
		related: ['adverse-events', 'drug-labels', 'rxnorm', 'compounds'],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search drug recalls in Duaer', zh: '在 Duaer 里检索药品召回' },
		lede: {
			en: 'In Duaer, search FDA drug recall enforcement reports via OpenFDA. One successful search uses 1 credit.',
			zh: '在 Duaer 里经 OpenFDA 检索药品召回执法报告。一次成功查询用 1 额度。',
		},
		returns: {
			en: 'Each row has a recall number, class, status, reason, and firm when present.',
			zh: '每条结果有召回编号、分类、状态、原因，以及可用的企业名。',
		},
		skill: skill({
			name: 'duaer-drug-recalls',
			description:
				'Search FDA drug recall enforcement reports through Duaer via OpenFDA. One successful search uses 1 Duaer credit.',
			title: 'Duaer drug recalls',
			call: 'GET https://api.duaer.com/v1/data/drug-recalls?words=aspirin&limit=10',
			fields: [
				'Provide `words`, `brand`, or `generic` (or combine brand and generic).',
				'`words` — brand, generic, substance, or product text.',
				'`brand` — optional. OpenFDA brand name.',
				'`generic` — optional. OpenFDA generic name.',
				'`limit` — optional. From 1 to 20. Default 10.',
			],
		}),
	},

	{
		slug: 'ligands',
		related: ['structures', 'compounds', 'crossrefs', 'metabolites'],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search ligands in Duaer', zh: '在 Duaer 里检索配体' },
		lede: {
			en: 'In Duaer, look up PDBe chemical component (CCD) ligands. One successful search uses 1 credit.',
			zh: '在 Duaer 里经 PDBe 查阅化学组分（CCD）配体。一次成功查询用 1 额度。',
		},
		returns: {
			en: 'Each row has a CCD id, name, formula, weight, and InChIKey when present.',
			zh: '每条结果有 CCD 编号、名称、分子式、分子量，以及可用的 InChIKey。',
		},
		skill: skill({
			name: 'duaer-ligands',
			description:
				'Look up PDBe chemical component (CCD) ligands through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer ligands',
			call: 'GET https://api.duaer.com/v1/data/ligands?words=ATP&limit=10',
			fields: [
				'Provide `words` or `id` as a CCD chemical component id (1–3 characters). Comma-separate several ids.',
				'`words` — CCD id such as ATP or HEM.',
				'`id` — optional. Same as words; combine for a batch.',
				'`limit` — optional. From 1 to 20. Default 10.',
			],
		}),
	},

];

export const home = {
	title: { en: 'Duaer skills', zh: 'Duaer 技能目录' },
	lede: {
		en: 'Call skills for Duaer data. Copy one into an agent. Opening this catalog does not search and does not use credits.',
		zh: 'Duaer 数据的调用技能。复制一条给智能体即可。打开这个目录不会检索，也不扣额度。',
	},
};

export const keys = {
	title: { en: 'Get a Duaer key', zh: '在 Duaer 里获取调用密钥' },
	lede: {
		en: 'A Duaer key authorizes calls to the Duaer data API. Create it after you sign in. The full value is shown once.',
		zh: 'Duaer 密钥用来调用 Duaer 数据接口。登录后创建。完整密钥只显示一次。',
	},
};


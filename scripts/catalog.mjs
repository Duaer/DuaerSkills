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
		slug: 'life-research-brief',
		related: ['papers', 'genes', 'variants'],
		type: { en: 'Employee', zh: '员工' },
		title: {
			en: 'Life research brief employee in Duaer',
			zh: 'Duaer 生命科学文献简报员工',
		},
		lede: {
			en: 'In Duaer, hire the Life research brief digital employee: papers, genes, and variants into one acceptable brief.',
			zh: '在 Duaer 里雇佣生命科学文献简报数字员工：论文、基因与变异合成一份可验收简报。',
		},
		returns: {
			en: 'A structured brief (papers, genes, variants, open questions). Production calls land in the Duaer data pool as pending until you accept or reject.',
			zh: '结构化简报（论文、基因、变异、未决问题）。正式调用写入 Duaer 数据池待验收，直到你通过或打回。',
		},
		skill: `---
name: duaer-life-research-brief
description: >-
  Operate the Duaer Life research brief digital employee. Use when hiring or
  calling that employee for papers + genes/variants briefs, or accepting the
  deliverable in the Duaer data pool.
---

# Digital employee: Life research brief

You are driving **this** Duaer digital employee (template slug \`duaer-life-research\`), not a generic API catalog.

## Role

1. Search **Duaer Data papers** for the topic.
2. Search **Duaer Data genes** for candidate symbols / targets.
3. Optionally search **Duaer Data variants** for rs ids or gene-linked hits.
4. Return a structured brief with \`kind: "delivery"\`, topic, papers, genes, variants, and open_questions.
5. Cite tool results only. Do not invent DOIs, gene ids, or rs ids.

## How to call

1. In Duaer Templates, open **Life research brief** and publish.
2. Prefer the **production chat URL** from Skill when published; use test URLs / Open chat while editing.
3. Optional: webhook or MCP surfaces from the same Skill panel.
4. Copy the live Skill.md for agents.

Each successful Duaer Data search uses **1 credit**.

## Accept

After a production chat succeeds, open **Data pool** in Duaer. The brief is **pending**. Accept it, or reject with a short note.

How-to: https://doc.duaer.com/getting-started/life-research-brief/
Acceptance: https://doc.duaer.com/getting-started/accept-deliverables/

## Related data skills

- https://skills.duaer.com/papers.md
- https://skills.duaer.com/genes.md
- https://skills.duaer.com/variants.md
`,
	},
	{
		slug: 'papers',
		related: ['proteins', 'trials', 'diseases', 'preprints', 'grants', 'patents', 'life-research-brief'],
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
		related: ['proteins', 'variants', 'pathways', 'gene-ontology', 'expression', 'atlas', 'geo', 'drug-gene', 'life-research-brief'],
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
		related: ['genes', 'diseases', 'proteins', 'life-research-brief'],
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

	{
		slug: 'chembl',
		related: ['compounds', 'ligands', 'crossrefs', 'metabolites'],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search ChEMBL in Duaer', zh: '在 Duaer 里检索 ChEMBL' },
		lede: {
			en: 'In Duaer, search bioactive molecules via ChEMBL. One successful search uses 1 credit.',
			zh: '在 Duaer 里经 ChEMBL 检索生物活性分子。一次成功查询用 1 额度。',
		},
		returns: {
			en: 'Each row has a ChEMBL id, name, formula, max phase, and InChIKey when present.',
			zh: '每条结果有 ChEMBL 编号、名称、分子式、最高研发阶段，以及可用的 InChIKey。',
		},
		skill: skill({
			name: 'duaer-chembl',
			description:
				'Search bioactive molecules through Duaer via ChEMBL. One successful search uses 1 Duaer credit.',
			title: 'Duaer ChEMBL',
			call: 'GET https://api.duaer.com/v1/data/chembl?words=aspirin&limit=10',
			fields: [
				'Provide `words` or `id`.',
				'`words` — molecule name, such as aspirin.',
				'`id` — optional. ChEMBL id such as CHEMBL25.',
				'`limit` — optional. From 1 to 20. Default 10.',
			],
		}),
	},

	{
		slug: 'ensembl',
		related: ['genes', 'proteins', 'variants', 'orthologs'],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search Ensembl in Duaer', zh: '在 Duaer 里检索 Ensembl' },
		lede: {
			en: 'In Duaer, look up Ensembl genes by symbol or id. One successful search uses 1 credit.',
			zh: '在 Duaer 里经 Ensembl 按基因符号或编号查阅基因。一次成功查询用 1 额度。',
		},
		returns: {
			en: 'Each row has an Ensembl id, symbol, biotype, and genomic coordinates when present.',
			zh: '每条结果有 Ensembl 编号、基因符号、生物类型，以及可用的基因组坐标。',
		},
		skill: skill({
			name: 'duaer-ensembl',
			description:
				'Look up Ensembl genes by symbol or id through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer Ensembl',
			call: 'GET https://api.duaer.com/v1/data/ensembl?words=TP53&species=homo_sapiens&limit=10',
			fields: [
				'Provide `words` (gene symbol) or `id` (Ensembl gene id).',
				'`words` — gene symbol, such as TP53.',
				'`id` — optional. Ensembl id such as ENSG00000141510.',
				'`species` — optional. Default homo_sapiens. Used with words.',
				'`limit` — optional. From 1 to 20. Default 10.',
			],
		}),
	},

	{
		slug: 'kegg',
		related: ['pathways', 'diseases', 'compounds', 'gene-ontology'],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search KEGG in Duaer', zh: '在 Duaer 里检索 KEGG' },
		lede: {
			en: 'In Duaer, search KEGG pathways, diseases, or compounds. One successful search uses 1 credit.',
			zh: '在 Duaer 里经 KEGG 检索通路、疾病或化合物。一次成功查询用 1 额度。',
		},
		returns: {
			en: 'Each row has a KEGG id, name, and database when present.',
			zh: '每条结果有 KEGG 编号、名称，以及可用的数据库类型。',
		},
		skill: skill({
			name: 'duaer-kegg',
			description:
				'Search KEGG pathways, diseases, or compounds through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer KEGG',
			call: 'GET https://api.duaer.com/v1/data/kegg?words=apoptosis&db=pathway&limit=10',
			fields: [
				'Provide `words` or `id`.',
				'`words` — search text, such as apoptosis.',
				'`id` — optional. KEGG id such as map04210, H00409, or C01405.',
				'`db` — optional. pathway (default), disease, or compound. Used with words.',
				'`limit` — optional. From 1 to 20. Default 10.',
			],
		}),
	},

	{
		slug: 'monarch',
		related: ['diseases', 'phenotypes', 'genes'],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search Monarch in Duaer', zh: '在 Duaer 里检索 Monarch' },
		lede: {
			en: 'In Duaer, search Monarch diseases, phenotypes, or genes. One successful search uses 1 credit.',
			zh: '在 Duaer 里经 Monarch 检索疾病、表型或基因。一次成功查询用 1 额度。',
		},
		returns: {
			en: 'Each row has a Monarch id, name, category, and cross-references when present.',
			zh: '每条结果有 Monarch 编号、名称、类别，以及可用的交叉引用。',
		},
		skill: skill({
			name: 'duaer-monarch',
			description:
				'Search Monarch diseases, phenotypes, or genes through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer Monarch',
			call: 'GET https://api.duaer.com/v1/data/monarch?words=Marfan&category=disease&limit=10',
			fields: [
				'Provide `words` or `id`.',
				'`words` — search text, such as Marfan.',
				'`id` — optional. CURIE such as MONDO:0007947, HP:0000819, or HGNC:1100.',
				'`category` — optional. disease (default), phenotype, or gene. Used with words.',
				'`limit` — optional. From 1 to 20. Default 10.',
			],
		}),
	},


	{
		slug: 'hgnc',
		related: ['genes', 'ensembl', 'proteins'],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search HGNC in Duaer', zh: '在 Duaer 里检索 HGNC' },
		lede: {
			en: 'In Duaer, look up approved gene symbols via HGNC. One successful search uses 1 credit.',
			zh: '在 Duaer 里经 HGNC 查阅核准基因符号。一次成功查询用 1 额度。',
		},
		returns: {
			en: 'Each row has an HGNC id, approved symbol, name, and cross-references when present.',
			zh: '每条结果有 HGNC 编号、核准符号、名称，以及可用的交叉引用。',
		},
		skill: skill({
			name: 'duaer-hgnc',
			description:
				'Look up approved gene symbols via HGNC through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer HGNC',
			call: 'GET https://api.duaer.com/v1/data/hgnc?words=BRCA1&limit=10',
			fields: [
				'Provide `words` or `id`.',
				'`words` — gene symbol or name words, such as BRCA1.',
				'`id` — optional. HGNC id such as HGNC:1100 or 1100.',
				'`limit` — optional. From 1 to 20. Default 10.',
			],
		}),
	},


	{
		slug: 'pride',
		related: ['geo', 'proteins', 'expression'],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search PRIDE in Duaer', zh: '在 Duaer 里检索 PRIDE' },
		lede: {
			en: 'In Duaer, search proteomics projects in PRIDE. One successful search uses 1 credit.',
			zh: '在 Duaer 里经 PRIDE 检索蛋白质组学项目。一次成功查询用 1 额度。',
		},
		returns: {
			en: 'Each row has a PRIDE accession, title, organisms, and DOI when present.',
			zh: '每条结果有 PRIDE 编号、标题、物种，以及可用的 DOI。',
		},
		skill: skill({
			name: 'duaer-pride',
			description:
				'Search proteomics projects in PRIDE through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer PRIDE',
			call: 'GET https://api.duaer.com/v1/data/pride?words=insulin&limit=10',
			fields: [
				'Provide `words` or `id`.',
				'`words` — project words, such as insulin.',
				'`id` — optional. PRIDE accession such as PXD000001.',
				'`limit` — optional. From 1 to 20. Default 10.',
			],
		}),
	},


	{
		slug: 'uberon',
		related: ['locations', 'atlas', 'organisms'],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search Uberon in Duaer', zh: '在 Duaer 里检索 Uberon' },
		lede: {
			en: 'In Duaer, search anatomy terms via Uberon. One successful search uses 1 credit.',
			zh: '在 Duaer 里经 Uberon 检索解剖学术语。一次成功查询用 1 额度。',
		},
		returns: {
			en: 'Each row has an Uberon id, label, and description when present.',
			zh: '每条结果有 Uberon 编号、名称，以及可用的描述。',
		},
		skill: skill({
			name: 'duaer-uberon',
			description:
				'Search anatomy terms via Uberon through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer Uberon',
			call: 'GET https://api.duaer.com/v1/data/uberon?words=liver&limit=10',
			fields: [
				'Provide `words` or `id`.',
				'`words` — anatomy words, such as liver.',
				'`id` — optional. Uberon id such as UBERON:0002107.',
				'`limit` — optional. From 1 to 20. Default 10.',
			],
		}),
	},


	{
		slug: 'biostudies',
		related: ['geo', 'pride', 'expression'],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search BioStudies in Duaer', zh: '在 Duaer 里检索 BioStudies' },
		lede: {
			en: 'In Duaer, search multi-omics studies in BioStudies. One successful search uses 1 credit.',
			zh: '在 Duaer 里经 BioStudies 检索多组学研究。一次成功查询用 1 额度。',
		},
		returns: {
			en: 'Each row has a BioStudies accession, title, type, and release date when present.',
			zh: '每条结果有 BioStudies 编号、标题、类型，以及可用的发布日期。',
		},
		skill: skill({
			name: 'duaer-biostudies',
			description:
				'Search multi-omics studies in BioStudies through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer BioStudies',
			call: 'GET https://api.duaer.com/v1/data/biostudies?words=diabetes&limit=10',
			fields: [
				'Provide `words` or `id`.',
				'`words` — study words, such as diabetes.',
				'`id` — optional. BioStudies accession such as S-EPMC7532821.',
				'`limit` — optional. From 1 to 20. Default 10.',
			],
		}),
	},


	{
		slug: 'orphanet',
		related: ['monarch', 'diseases', 'phenotypes'],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search Orphanet in Duaer', zh: '在 Duaer 里检索 Orphanet' },
		lede: {
			en: 'In Duaer, search rare diseases via Orphanet. One successful search uses 1 credit.',
			zh: '在 Duaer 里经 Orphanet 检索罕见病。一次成功查询用 1 额度。',
		},
		returns: {
			en: 'Each row has an Orphanet id, name, and synonyms when present.',
			zh: '每条结果有 Orphanet 编号、名称，以及可用的同义词。',
		},
		skill: skill({
			name: 'duaer-orphanet',
			description:
				'Search rare diseases via Orphanet through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer Orphanet',
			call: 'GET https://api.duaer.com/v1/data/orphanet?words=Marfan&limit=10',
			fields: [
				'Provide `words` or `id`.',
				'`words` — rare disease words, such as Marfan.',
				'`id` — optional. Orphanet code such as ORPHA:558 or 558.',
				'`limit` — optional. From 1 to 20. Default 10.',
			],
		}),
	},

	{
		slug: 'efo',
		related: ['gwas', 'phenotypes', 'mesh'],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search EFO in Duaer', zh: '在 Duaer 里检索 EFO' },
		lede: {
			en: 'In Duaer, search experimental factors via EFO. One successful search uses 1 credit.',
			zh: '在 Duaer 里经 EFO 检索实验因子。一次成功查询用 1 额度。',
		},
		returns: {
			en: 'Each row has an EFO id, label, and description when present.',
			zh: '每条结果有 EFO 编号、名称，以及可用的描述。',
		},
		skill: skill({
			name: 'duaer-efo',
			description:
				'Search experimental factors via EFO through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer EFO',
			call: 'GET https://api.duaer.com/v1/data/efo?words=asthma&limit=10',
			fields: [
				'Provide `words` or `id`.',
				'`words` — trait or factor words, such as asthma.',
				'`id` — optional. EFO id such as EFO:0000270 or EFO_0000270.',
				'`limit` — optional. From 1 to 20. Default 10.',
			],
		}),
	},

	{
		slug: 'rnacentral',
		related: ["genes","ensembl","hgnc"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search RNAcentral in Duaer', zh: '在 Duaer 里检索 RNAcentral' },
		lede: { en: 'In Duaer, search non-coding RNA in RNAcentral. One successful search uses 1 credit.', zh: '在 Duaer 里经 RNAcentral 检索非编码 RNA。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an RNAcentral id, description, length, and RNA type when present.', zh: '每条结果有 RNAcentral 编号、描述、长度，以及可用的 RNA 类型。' },
		skill: skill({
			name: 'duaer-rnacentral',
			description: 'Search non-coding RNA in RNAcentral through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer RNAcentral',
			call: 'GET https://api.duaer.com/v1/data/rnacentral?words=microRNA&limit=10',
			fields: [
				'Provide `words` or `id`.',
				'`words` — RNA description words, such as microRNA.',
				'`id` — optional. RNAcentral id such as URS000075C808.',
				'`limit` — optional. From 1 to 20. Default 10.',
			],
		}),
	},

	{
		slug: 'mondo',
		related: ["diseases","orphanet","monarch"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search Mondo in Duaer', zh: '在 Duaer 里检索 Mondo' },
		lede: { en: 'In Duaer, search disease terms via Mondo. One successful search uses 1 credit.', zh: '在 Duaer 里经 Mondo 检索疾病术语。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has a Mondo id, label, and description when present.', zh: '每条结果有 Mondo 编号、名称，以及可用的描述。' },
		skill: skill({
			name: 'duaer-mondo',
			description: 'Search diseases via Mondo through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer Mondo',
			call: 'GET https://api.duaer.com/v1/data/mondo?words=diabetes&limit=10',
			fields: [
				'Provide `words` or `id`.',
				'`words` — disease words, such as diabetes.',
				'`id` — optional. Mondo id such as MONDO:0005148.',
				'`limit` — optional. From 1 to 20. Default 10.',
			],
		}),
	},

	{
		slug: 'cell-ontology',
		related: ["cell-lines","uberon","atlas"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search Cell Ontology in Duaer', zh: '在 Duaer 里检索 Cell Ontology' },
		lede: { en: 'In Duaer, search cell types via Cell Ontology. One successful search uses 1 credit.', zh: '在 Duaer 里经 Cell Ontology 检索细胞类型。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has a CL id, label, and description when present.', zh: '每条结果有 CL 编号、名称，以及可用的描述。' },
		skill: skill({
			name: 'duaer-cell-ontology',
			description: 'Search cell types via Cell Ontology through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer Cell Ontology',
			call: 'GET https://api.duaer.com/v1/data/cell-ontology?words=neuron&limit=10',
			fields: [
				'Provide `words` or `id`.',
				'`words` — cell type words, such as neuron.',
				'`id` — optional. Cell Ontology id such as CL:0000540.',
				'`limit` — optional. From 1 to 20. Default 10.',
			],
		}),
	},

	{
		slug: 'mp',
		related: ["phenotypes","monarch","gwas"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search MP in Duaer', zh: '在 Duaer 里检索 MP' },
		lede: { en: 'In Duaer, search mammalian phenotypes via MP. One successful search uses 1 credit.', zh: '在 Duaer 里经 MP 检索哺乳动物表型。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an MP id, label, and description when present.', zh: '每条结果有 MP 编号、名称，以及可用的描述。' },
		skill: skill({
			name: 'duaer-mp',
			description: 'Search mammalian phenotypes via MP through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer MP',
			call: 'GET https://api.duaer.com/v1/data/mp?words=obesity&limit=10',
			fields: [
				'Provide `words` or `id`.',
				'`words` — phenotype words, such as obesity.',
				'`id` — optional. MP id such as MP:0001261.',
				'`limit` — optional. From 1 to 20. Default 10.',
			],
		}),
	},

	{
		slug: 'mydisease',
		related: ["mondo","diseases","orphanet"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search MyDisease in Duaer', zh: '在 Duaer 里检索 MyDisease' },
		lede: { en: 'In Duaer, search disease annotations in MyDisease. One successful search uses 1 credit.', zh: '在 Duaer 里经 MyDisease 检索疾病注释。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has a disease id, name, and definition when present.', zh: '每条结果有疾病编号、名称，以及可用的定义。' },
		skill: skill({
			name: 'duaer-mydisease',
			description: 'Search disease annotations in MyDisease through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer MyDisease',
			call: 'GET https://api.duaer.com/v1/data/mydisease?words=asthma&limit=10',
			fields: [
				'Provide `words` or `id`.',
				'`words` — disease words, such as asthma.',
				'`id` — optional. Disease id such as MONDO:0004979.',
				'`limit` — optional. From 1 to 20. Default 10.',
			],
		}),
	},

	{
		slug: 'metabolomics',
		related: ["metabolites","biostudies","pride"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search metabolomics studies in Duaer', zh: '在 Duaer 里检索代谢组学研究' },
		lede: { en: 'In Duaer, search metabolomics studies in Metabolomics Workbench. One successful search uses 1 credit.', zh: '在 Duaer 里经 Metabolomics Workbench 检索代谢组学研究。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has a study id, title, species, and analysis type when present.', zh: '每条结果有研究编号、标题、物种，以及可用的分析类型。' },
		skill: skill({
			name: 'duaer-metabolomics',
			description: 'Search metabolomics studies in Metabolomics Workbench through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer Metabolomics',
			call: 'GET https://api.duaer.com/v1/data/metabolomics?words=diabetes&limit=10',
			fields: [
				'Provide `words` or `id`.',
				'`words` — study title words, such as diabetes.',
				'`id` — optional. Study id such as ST000001.',
				'`limit` — optional. From 1 to 20. Default 10.',
			],
		}),
	},

	{
		slug: 'intact',
		related: ["interactions","proteins","complexes"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search IntAct in Duaer', zh: '在 Duaer 里检索 IntAct' },
		lede: { en: 'In Duaer, search molecular interactions in IntAct. One successful search uses 1 credit.', zh: '在 Duaer 里经 IntAct 检索分子互作。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an IntAct accession and the two interactors when present.', zh: '每条结果有 IntAct 编号与两个互作分子。' },
		skill: skill({
			name: 'duaer-intact',
			description: 'Search molecular interactions in IntAct through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer IntAct',
			call: 'GET https://api.duaer.com/v1/data/intact?words=tp53&limit=10',
			fields: [
				'Provide `words` or `id`.',
				'`words` — gene or protein words, such as tp53.',
				'`id` — optional. Interactor id such as P04637.',
				'`limit` — optional. From 1 to 20. Default 10.',
			],
		}),
	},

	{
		slug: 'biosamples',
		related: ["geo","biostudies","cell-lines"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search BioSamples in Duaer', zh: '在 Duaer 里检索 BioSamples' },
		lede: { en: 'In Duaer, search biological samples in BioSamples. One successful search uses 1 credit.', zh: '在 Duaer 里经 BioSamples 检索生物样本。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has a BioSamples accession, organism, and tax id when present.', zh: '每条结果有 BioSamples 编号、物种与税号。' },
		skill: skill({
			name: 'duaer-biosamples',
			description: 'Search biological samples in BioSamples through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer BioSamples',
			call: 'GET https://api.duaer.com/v1/data/biosamples?words=blood&limit=10',
			fields: [
				'Provide `words` or `id`.',
				'`words` — sample words, such as blood.',
				'`id` — optional. Accession such as SAMN00000000.',
				'`limit` — optional. From 1 to 20. Default 10.',
			],
		}),
	},

	{
		slug: 'encode',
		related: ["geo","expression","jaspar"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search ENCODE in Duaer', zh: '在 Duaer 里检索 ENCODE' },
		lede: { en: 'In Duaer, search functional genomics experiments in ENCODE. One successful search uses 1 credit.', zh: '在 Duaer 里经 ENCODE 检索功能基因组实验。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an ENCODE accession, assay, and status when present.', zh: '每条结果有 ENCODE 编号、实验类型与状态。' },
		skill: skill({
			name: 'duaer-encode',
			description: 'Search functional genomics experiments in ENCODE through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer ENCODE',
			call: 'GET https://api.duaer.com/v1/data/encode?words=CTCF&limit=10',
			fields: [
				'Provide `words` or `id`.',
				'`words` — experiment words, such as CTCF.',
				'`id` — optional. Accession such as ENCSR000EJV.',
				'`limit` — optional. From 1 to 20. Default 10.',
			],
		}),
	},

	{
		slug: 'pathway-commons',
		related: ["pathways","interactions","kegg"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search Pathway Commons in Duaer', zh: '在 Duaer 里检索 Pathway Commons' },
		lede: { en: 'In Duaer, search pathways in Pathway Commons. One successful search uses 1 credit.', zh: '在 Duaer 里经 Pathway Commons 检索通路。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has a pathway name, URI, and data source when present.', zh: '每条结果有通路名、URI 与数据源。' },
		skill: skill({
			name: 'duaer-pathway-commons',
			description: 'Search pathways in Pathway Commons through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer Pathway Commons',
			call: 'GET https://api.duaer.com/v1/data/pathway-commons?words=TP53&limit=10',
			fields: [
				'Provide `words` or `id`.',
				'`words` — pathway words, such as TP53.',
				'`id` — optional. Query such as TP53.',
				'`limit` — optional. From 1 to 20. Default 10.',
			],
		}),
	},

	{
		slug: 'alliance',
		related: ["genes","orthologs","hgnc"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search Alliance genes in Duaer', zh: '在 Duaer 里检索 Alliance 基因' },
		lede: { en: 'In Duaer, search genes in the Alliance of Genome Resources. One successful search uses 1 credit.', zh: '在 Duaer 里经 Alliance of Genome Resources 检索基因。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has a gene id, symbol, and species when present.', zh: '每条结果有基因编号、符号与物种。' },
		skill: skill({
			name: 'duaer-alliance',
			description: 'Search genes in the Alliance of Genome Resources through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer Alliance',
			call: 'GET https://api.duaer.com/v1/data/alliance?words=BRCA1&limit=10',
			fields: [
				'Provide `words` or `id`.',
				'`words` — gene words, such as BRCA1.',
				'`id` — optional. Gene id such as HGNC:1100.',
				'`limit` — optional. From 1 to 20. Default 10.',
			],
		}),
	},

	{
		slug: 'clinvar',
		related: ["variants","dbsnp","gwas"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search ClinVar in Duaer', zh: '在 Duaer 里检索 ClinVar' },
		lede: { en: 'In Duaer, search clinical variants in ClinVar. One successful search uses 1 credit.', zh: '在 Duaer 里经 ClinVar 检索临床变异。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has a ClinVar accession, gene, and clinical significance when present.', zh: '每条结果有 ClinVar 编号、基因与临床意义。' },
		skill: skill({
			name: 'duaer-clinvar',
			description: 'Search clinical variants in ClinVar through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer ClinVar',
			call: 'GET https://api.duaer.com/v1/data/clinvar?words=BRCA1&limit=10',
			fields: [
				'Provide `words` or `id`.',
				'`words` — gene or variant words, such as BRCA1.',
				'`id` — optional. ClinVar uid or accession.',
				'`limit` — optional. From 1 to 20. Default 10.',
			],
		}),
	},

	{
		slug: 'dbsnp',
		related: ["variants","clinvar","gwas"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search dbSNP in Duaer', zh: '在 Duaer 里检索 dbSNP' },
		lede: { en: 'In Duaer, search variant ids in dbSNP. One successful search uses 1 credit.', zh: '在 Duaer 里经 dbSNP 检索变异位点。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an rs id, chromosome, and gene when present.', zh: '每条结果有 rs 编号、染色体与基因。' },
		skill: skill({
			name: 'duaer-dbsnp',
			description: 'Search variant ids in dbSNP through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer dbSNP',
			call: 'GET https://api.duaer.com/v1/data/dbsnp?words=BRCA1&limit=10',
			fields: [
				'Provide `words` or `id`.',
				'`words` — gene words, such as BRCA1.',
				'`id` — optional. rs id such as rs56116432.',
				'`limit` — optional. From 1 to 20. Default 10.',
			],
		}),
	},

	{
		slug: 'jaspar',
		related: ["encode","genes","gene-ontology"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search JASPAR in Duaer', zh: '在 Duaer 里检索 JASPAR' },
		lede: { en: 'In Duaer, search TF binding motifs in JASPAR. One successful search uses 1 credit.', zh: '在 Duaer 里经 JASPAR 检索转录因子结合模体。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has a JASPAR matrix id, name, and collection when present.', zh: '每条结果有 JASPAR 矩阵编号、名称与集合。' },
		skill: skill({
			name: 'duaer-jaspar',
			description: 'Search TF binding motifs in JASPAR through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer JASPAR',
			call: 'GET https://api.duaer.com/v1/data/jaspar?words=TP53&limit=10',
			fields: [
				'Provide `words` or `id`.',
				'`words` — TF words, such as TP53.',
				'`id` — optional. Matrix id such as MA0106.1.',
				'`limit` — optional. From 1 to 20. Default 10.',
			],
		}),
	},

	{
		slug: 'cbioportal',
		related: ["gdc","gwas","variants"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search cBioPortal in Duaer', zh: '在 Duaer 里检索 cBioPortal' },
		lede: { en: 'In Duaer, search cancer genomics studies in cBioPortal. One successful search uses 1 credit.', zh: '在 Duaer 里经 cBioPortal 检索癌症基因组研究。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has a study id, cancer type, and sample count when present.', zh: '每条结果有研究编号、癌种与样本数。' },
		skill: skill({
			name: 'duaer-cbioportal',
			description: 'Search cancer genomics studies in cBioPortal through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer cBioPortal',
			call: 'GET https://api.duaer.com/v1/data/cbioportal?words=brca&limit=10',
			fields: [
				'Provide `words` or `id`.',
				'`words` — study words, such as brca.',
				'`id` — optional. Study id such as brca_tcga.',
				'`limit` — optional. From 1 to 20. Default 10.',
			],
		}),
	},

	{
		slug: 'gdc',
		related: ["cbioportal","gwas","trials"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search GDC in Duaer', zh: '在 Duaer 里检索 GDC' },
		lede: { en: 'In Duaer, search NCI GDC cancer projects. One successful search uses 1 credit.', zh: '在 Duaer 里经 NCI GDC 检索癌症项目。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has a GDC project id, primary site, and disease type when present.', zh: '每条结果有 GDC 项目编号、原发部位与疾病类型。' },
		skill: skill({
			name: 'duaer-gdc',
			description: 'Search NCI GDC cancer projects through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer GDC',
			call: 'GET https://api.duaer.com/v1/data/gdc?words=breast&limit=10',
			fields: [
				'Provide `words` or `id`.',
				'`words` — project words, such as breast.',
				'`id` — optional. Project id such as TCGA-BRCA.',
				'`limit` — optional. From 1 to 20. Default 10.',
			],
		}),
	},

	{
		slug: 'expression-atlas',
		related: ["expression","geo","single-cell-atlas"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search Expression Atlas in Duaer', zh: '在 Duaer 里检索 Expression Atlas' },
		lede: { en: 'In Duaer, search bulk expression experiments in Expression Atlas. One successful search uses 1 credit.', zh: '在 Duaer 里经 Expression Atlas 检索表达实验。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an experiment accession, species, and type when present.', zh: '每条结果有实验编号、物种与类型。' },
		skill: skill({
			name: 'duaer-expression-atlas',
			description: 'Search bulk expression experiments in Expression Atlas through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer Expression Atlas',
			call: 'GET https://api.duaer.com/v1/data/expression-atlas?words=human%20liver&limit=10',
			fields: [
				'Provide `words` or `id`.',
				'`words` — experiment words, such as human liver.',
				'`id` — optional. Accession such as E-MTAB-5214.',
				'`limit` — optional. From 1 to 20. Default 10.',
			],
		}),
	},

	{
		slug: 'single-cell-atlas',
		related: ["expression-atlas","expression","cell-ontology"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search Single Cell Atlas in Duaer', zh: '在 Duaer 里检索单细胞表达图谱' },
		lede: { en: 'In Duaer, search single-cell experiments in Single Cell Expression Atlas. One successful search uses 1 credit.', zh: '在 Duaer 里经 Single Cell Expression Atlas 检索单细胞实验。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an experiment accession, species, and assay count when present.', zh: '每条结果有实验编号、物种与 assay 数。' },
		skill: skill({
			name: 'duaer-single-cell-atlas',
			description: 'Search single-cell experiments in Single Cell Expression Atlas through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer Single Cell Atlas',
			call: 'GET https://api.duaer.com/v1/data/single-cell-atlas?words=lung&limit=10',
			fields: [
				'Provide `words` or `id`.',
				'`words` — experiment words, such as lung.',
				'`id` — optional. Accession such as E-HCAD-14.',
				'`limit` — optional. From 1 to 20. Default 10.',
			],
		}),
	},

	{
		slug: 'ndc',
		related: ["rxnorm","drug-labels","adverse-events"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search NDC in Duaer', zh: '在 Duaer 里检索 NDC' },
		lede: { en: 'In Duaer, search drug NDC records in OpenFDA. One successful search uses 1 credit.', zh: '在 Duaer 里经 OpenFDA 检索药品 NDC。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has a product NDC, brand, and generic name when present.', zh: '每条结果有产品 NDC、商品名与通用名。' },
		skill: skill({
			name: 'duaer-ndc',
			description: 'Search drug NDC records in OpenFDA through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer NDC',
			call: 'GET https://api.duaer.com/v1/data/ndc?words=tylenol&limit=10',
			fields: [
				'Provide `words` or `id`.',
				'`words` — brand words, such as tylenol.',
				'`id` — optional. Product NDC such as 50580-176.',
				'`limit` — optional. From 1 to 20. Default 10.',
			],
		}),
	},

	{
		slug: 'device-events',
		related: ["adverse-events","ndc","drug-recalls"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search device events in Duaer', zh: '在 Duaer 里检索器械不良事件' },
		lede: { en: 'In Duaer, search device adverse events in OpenFDA. One successful search uses 1 credit.', zh: '在 Duaer 里经 OpenFDA 检索器械不良事件。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has a report id, brand, and event type when present.', zh: '每条结果有报告编号、品牌与事件类型。' },
		skill: skill({
			name: 'duaer-device-events',
			description: 'Search device adverse events in OpenFDA through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer Device events',
			call: 'GET https://api.duaer.com/v1/data/device-events?words=insulin&limit=10',
			fields: [
				'Provide `words` or `id`.',
				'`words` — device words, such as insulin.',
				'`id` — optional. Report number.',
				'`limit` — optional. From 1 to 20. Default 10.',
			],
		}),
	},

	{
		slug: 'sequence-ontology',
		related: ["gene-ontology","ensembl","rnacentral"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search Sequence Ontology in Duaer', zh: '在 Duaer 里检索 Sequence Ontology' },
		lede: { en: 'In Duaer, search sequence feature terms via Sequence Ontology. One successful search uses 1 credit.', zh: '在 Duaer 里经 Sequence Ontology 检索序列特征术语。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an SO id, label, and description when present.', zh: '每条结果有 SO 编号、名称与描述。' },
		skill: skill({
			name: 'duaer-sequence-ontology',
			description: 'Search sequence feature terms via Sequence Ontology through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer Sequence Ontology',
			call: 'GET https://api.duaer.com/v1/data/sequence-ontology?words=exon&limit=10',
			fields: [
				'Provide `words` or `id`.',
				'`words` — feature words, such as exon.',
				'`id` — optional. SO id such as SO:0000147.',
				'`limit` — optional. From 1 to 20. Default 10.',
			],
		}),
	},

	{
		slug: 'doid',
		related: ["mondo","diseases","orphanet"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search DOID in Duaer', zh: '在 Duaer 里检索 DOID' },
		lede: { en: 'In Duaer, search disease terms via DOID. One successful search uses 1 credit.', zh: '在 Duaer 里经 DOID 检索疾病术语。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has a DOID, label, and description when present.', zh: '每条结果有 DOID、名称与描述。' },
		skill: skill({
			name: 'duaer-doid',
			description: 'Search disease terms via DOID through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer DOID',
			call: 'GET https://api.duaer.com/v1/data/doid?words=asthma&limit=10',
			fields: [
				'Provide `words` or `id`.',
				'`words` — disease words, such as asthma.',
				'`id` — optional. DOID such as DOID:2841.',
				'`limit` — optional. From 1 to 20. Default 10.',
			],
		}),
	},

	{
		slug: 'ncbi-taxon',
		related: ["organisms","alliance","uberon"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search NCBI Taxonomy in Duaer', zh: '在 Duaer 里检索 NCBI Taxonomy' },
		lede: { en: 'In Duaer, search taxa via NCBI Taxonomy ontology. One successful search uses 1 credit.', zh: '在 Duaer 里经 NCBI Taxonomy 本体检索物种。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has a taxonomy id, label, and synonyms when present.', zh: '每条结果有分类编号、名称与同义词。' },
		skill: skill({
			name: 'duaer-ncbi-taxon',
			description: 'Search taxa via NCBI Taxonomy ontology through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer NCBI Taxonomy',
			call: 'GET https://api.duaer.com/v1/data/ncbi-taxon?words=Homo%20sapiens&limit=10',
			fields: [
				'Provide `words` or `id`.',
				'`words` — taxon words, such as Homo sapiens.',
				'`id` — optional. NCBITaxon id such as NCBITaxon:9606.',
				'`limit` — optional. From 1 to 20. Default 10.',
			],
		}),
	},

	{
		slug: 'glygen',
		related: ["metabolites","compounds","reactions"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search GlyGen in Duaer', zh: '在 Duaer 里检索 GlyGen' },
		lede: { en: 'In Duaer, look up glycans in GlyGen by GlyTouCan id. One successful search uses 1 credit.', zh: '在 Duaer 里经 GlyGen 按 GlyTouCan 编号查阅糖链。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has a GlyTouCan accession, mass, and IUPAC when present.', zh: '每条结果有 GlyTouCan 编号、质量与 IUPAC。' },
		skill: skill({
			name: 'duaer-glygen',
			description: 'Look up glycans in GlyGen by GlyTouCan id through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer GlyGen',
			call: 'GET https://api.duaer.com/v1/data/glygen?id=G00054MO&limit=10',
			fields: [
				'Provide `words` or `id`.',
				'`words` — GlyTouCan accession, such as G00054MO.',
				'`id` — optional. GlyTouCan accession such as G00054MO.',
				'`limit` — optional. From 1 to 20. Default 10.',
			],
		}),
	},

	{
		slug: 'chebi',
		related: ["compounds","chembl","metabolites"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search ChEBI in Duaer', zh: '在 Duaer 里检索 ChEBI' },
		lede: { en: 'In Duaer, search chemical entities via ChEBI. One successful search uses 1 credit.', zh: '在 Duaer 里经 ChEBI 检索化学实体。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-chebi',
			description: 'Search chemical entities via ChEBI through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer ChEBI',
			call: 'GET https://api.duaer.com/v1/data/chebi?words=aspirin&limit=10',
			fields: [
						"Provide `words` or `id`.",
						"`words` — search words, such as aspirin.",
						"`id` — optional. Id such as CHEBI:15365.",
						"`limit` — optional. From 1 to 20. Default 10."
			],
		}),
	},

	{
		slug: 'ncit',
		related: ["mondo","doid","orphanet"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search NCIt in Duaer', zh: '在 Duaer 里检索 NCIt' },
		lede: { en: 'In Duaer, search clinical terms via NCI Thesaurus. One successful search uses 1 credit.', zh: '在 Duaer 里经 NCI Thesaurus 检索临床术语。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-ncit',
			description: 'Search clinical terms via NCI Thesaurus through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer NCIt',
			call: 'GET https://api.duaer.com/v1/data/ncit?words=melanoma&limit=10',
			fields: [
						"Provide `words` or `id`.",
						"`words` — search words, such as melanoma.",
						"`id` — optional. Id such as NCIT:C3224.",
						"`limit` — optional. From 1 to 20. Default 10."
			],
		}),
	},

	{
		slug: 'pfam',
		related: ["domains","proteins","gene-ontology"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search Pfam in Duaer', zh: '在 Duaer 里检索 Pfam' },
		lede: { en: 'In Duaer, search Pfam protein families. One successful search uses 1 credit.', zh: '在 Duaer 里检索 Pfam 蛋白家族。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-pfam',
			description: 'Search Pfam protein families through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer Pfam',
			call: 'GET https://api.duaer.com/v1/data/pfam?words=kinase&limit=10',
			fields: [
						"Provide `words` or `id`.",
						"`words` — search words, such as kinase.",
						"`id` — optional. Id such as PF00069.",
						"`limit` — optional. From 1 to 20. Default 10."
			],
		}),
	},

	{
		slug: 'emdb',
		related: ["structures","alphafold","pride"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search EMDB in Duaer', zh: '在 Duaer 里检索 EMDB' },
		lede: { en: 'In Duaer, search cryo-EM structures in EMDB. One successful search uses 1 credit.', zh: '在 Duaer 里检索 EMDB 冷冻电镜结构。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-emdb',
			description: 'Search cryo-EM structures in EMDB through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer EMDB',
			call: 'GET https://api.duaer.com/v1/data/emdb?words=insulin&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as insulin.","`id` — optional. Id such as EMD-74236.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'uniparc',
		related: ["proteins","pfam","domains"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search UniParc in Duaer', zh: '在 Duaer 里检索 UniParc' },
		lede: { en: 'In Duaer, search the UniParc sequence archive. One successful search uses 1 credit.', zh: '在 Duaer 里检索 UniParc 序列档案。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-uniparc',
			description: 'Search UniParc protein sequence archive through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer UniParc',
			call: 'GET https://api.duaer.com/v1/data/uniparc?words=insulin&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as insulin.","`id` — optional. Id such as UPI000C3A63FD.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'europe-pmc',
		related: ["papers","preprints","crossref"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search Europe PMC in Duaer', zh: '在 Duaer 里检索 Europe PMC' },
		lede: { en: 'In Duaer, search life-science literature in Europe PMC. One successful search uses 1 credit.', zh: '在 Duaer 里经 Europe PMC 检索生医文献。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-europe-pmc',
			description: 'Search life-science literature in Europe PMC through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer Europe PMC',
			call: 'GET https://api.duaer.com/v1/data/europe-pmc?words=BRCA1&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as BRCA1.","`id` — optional. Id such as 42757486.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'orcid',
		related: ["papers","europe-pmc","crossref"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search ORCID in Duaer', zh: '在 Duaer 里检索 ORCID' },
		lede: { en: 'In Duaer, search researchers in ORCID. One successful search uses 1 credit.', zh: '在 Duaer 里检索 ORCID 研究者。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-orcid',
			description: 'Search researchers in ORCID through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer ORCID',
			call: 'GET https://api.duaer.com/v1/data/orcid?words=family-name%3ASmith&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as family-name:Smith.","`id` — optional. Id such as 0000-0003-1660-3511.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'protein-ontology',
		related: ["proteins","chebi","gene-ontology"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search Protein Ontology in Duaer', zh: '在 Duaer 里检索 Protein Ontology' },
		lede: { en: 'In Duaer, search protein entities via Protein Ontology. One successful search uses 1 credit.', zh: '在 Duaer 里经 Protein Ontology 检索蛋白实体。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-protein-ontology',
			description: 'Search protein entities via Protein Ontology through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer Protein Ontology',
			call: 'GET https://api.duaer.com/v1/data/protein-ontology?words=insulin&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as insulin.","`id` — optional. Id such as PR:000003276.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'obi',
		related: ["assays","expression-atlas","geo"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search OBI in Duaer', zh: '在 Duaer 里检索 OBI' },
		lede: { en: 'In Duaer, search assay terms via OBI. One successful search uses 1 credit.', zh: '在 Duaer 里经 OBI 检索实验测定术语。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-obi',
			description: 'Search assay terms via Ontology for Biomedical Investigations through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer OBI',
			call: 'GET https://api.duaer.com/v1/data/obi?words=assay&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as assay.","`id` — optional. Id such as OBI:0000070.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'mpath',
		related: ["ncit","mondo","doid"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search MPATH in Duaer', zh: '在 Duaer 里检索 MPATH' },
		lede: { en: 'In Duaer, search pathology terms via MPATH. One successful search uses 1 credit.', zh: '在 Duaer 里经 MPATH 检索病理术语。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-mpath',
			description: 'Search pathology terms via MPATH through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer MPATH',
			call: 'GET https://api.duaer.com/v1/data/mpath?words=inflammation&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as inflammation.","`id` — optional. Id such as MPATH:212.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'crossref',
		related: ["papers","europe-pmc","preprints"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search Crossref in Duaer', zh: '在 Duaer 里检索 Crossref' },
		lede: { en: 'In Duaer, search scholarly works in Crossref. One successful search uses 1 credit.', zh: '在 Duaer 里经 Crossref 检索学术作品。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-crossref',
			description: 'Search scholarly works in Crossref through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer Crossref',
			call: 'GET https://api.duaer.com/v1/data/crossref?words=BRCA1&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as BRCA1.","`id` — optional. Id such as 10.1038/nature12373.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'mychem',
		related: ["compounds","chebi","chembl"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search MyChem in Duaer', zh: '在 Duaer 里检索 MyChem' },
		lede: { en: 'In Duaer, search aggregated compound annotations in MyChem. One successful search uses 1 credit.', zh: '在 Duaer 里经 MyChem 检索化合物聚合注释。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-mychem',
			description: 'Search aggregated compound annotations in MyChem through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer MyChem',
			call: 'GET https://api.duaer.com/v1/data/mychem?words=aspirin&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as aspirin.","`id` — optional. Id such as CHEBI:15365.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'drugs-fda',
		related: ["ndc","drug-labels","drug-recalls"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search Drugs@FDA in Duaer', zh: '在 Duaer 里检索 Drugs@FDA' },
		lede: { en: 'In Duaer, search FDA-approved drug applications. One successful search uses 1 credit.', zh: '在 Duaer 里检索 FDA 批准药品申请。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-drugs-fda',
			description: 'Search FDA-approved drug applications through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer Drugs@FDA',
			call: 'GET https://api.duaer.com/v1/data/drugs-fda?words=aspirin&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as aspirin.","`id` — optional. Id such as ANDA075141.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'uniref',
		related: ["proteins","uniparc","proteomes"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search UniRef in Duaer', zh: '在 Duaer 里检索 UniRef' },
		lede: { en: 'In Duaer, search UniRef protein sequence clusters. One successful search uses 1 credit.', zh: '在 Duaer 里检索 UniRef 蛋白序列聚类。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-uniref',
			description: 'Search UniRef protein sequence clusters through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer UniRef',
			call: 'GET https://api.duaer.com/v1/data/uniref?words=insulin&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as insulin.","`id` — optional. Id such as UniRef90_P01308.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'unirule',
		related: ["proteins","uniref"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search UniRule in Duaer', zh: '在 Duaer 里检索 UniRule' },
		lede: { en: 'In Duaer, search UniRule annotation rules. One successful search uses 1 credit.', zh: '在 Duaer 里检索 UniRule 注释规则。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-unirule',
			description: 'Search UniRule annotation rules through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer UniRule',
			call: 'GET https://api.duaer.com/v1/data/unirule?words=kinase&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as kinase.","`id` — optional. Id such as UR000000001.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'proteomes',
		related: ["proteins","organisms"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search Proteomes in Duaer', zh: '在 Duaer 里检索 Proteomes' },
		lede: { en: 'In Duaer, search UniProt proteomes. One successful search uses 1 credit.', zh: '在 Duaer 里检索 UniProt 蛋白质组。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-proteomes',
			description: 'Search UniProt proteomes through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer Proteomes',
			call: 'GET https://api.duaer.com/v1/data/proteomes?words=Homo%20sapiens&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as Homo sapiens.","`id` — optional. Id such as UP000005640.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'ena',
		related: ["proteins","genes"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search ENA in Duaer', zh: '在 Duaer 里检索 ENA' },
		lede: { en: 'In Duaer, search nucleotide sequences in ENA. One successful search uses 1 credit.', zh: '在 Duaer 里在 ENA 检索核酸序列。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-ena',
			description: 'Search nucleotide sequences in ENA through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer ENA',
			call: 'GET https://api.duaer.com/v1/data/ena?words=insulin&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as insulin.","`id` — optional. Id such as DM015610.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'empiar',
		related: ["structures","emdb"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search EMPIAR in Duaer', zh: '在 Duaer 里检索 EMPIAR' },
		lede: { en: 'In Duaer, search cryo-EM public image archive entries in EMPIAR. One successful search uses 1 credit.', zh: '在 Duaer 里在 EMPIAR 检索冷冻电镜公共影像条目。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-empiar',
			description: 'Search cryo-EM public image archive entries in EMPIAR through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer EMPIAR',
			call: 'GET https://api.duaer.com/v1/data/empiar?words=ribosome&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as ribosome.","`id` — optional. Id such as 10005.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'bmrb',
		related: ["structures","proteins"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search BMRB in Duaer', zh: '在 Duaer 里检索 BMRB' },
		lede: { en: 'In Duaer, search NMR entries in BMRB. One successful search uses 1 credit.', zh: '在 Duaer 里在 BMRB 检索核磁条目。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-bmrb',
			description: 'Search NMR entries in BMRB through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer BMRB',
			call: 'GET https://api.duaer.com/v1/data/bmrb?words=ubiquitin&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as ubiquitin.","`id` — optional. Id such as 15000.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'swiss-model',
		related: ["structures","alphafold","proteins"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search Swiss-Model in Duaer', zh: '在 Duaer 里检索 Swiss-Model' },
		lede: { en: 'In Duaer, look up Swiss-Model structures by UniProt accession. One successful search uses 1 credit.', zh: '在 Duaer 里按 UniProt 登录号查阅 Swiss-Model 结构。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-swiss-model',
			description: 'Look up Swiss-Model structures by UniProt accession through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer Swiss-Model',
			call: 'GET https://api.duaer.com/v1/data/swiss-model?words=P04637&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as P04637.","`id` — optional. Id such as P04637.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'lipid-maps',
		related: ["compounds","metabolites","chebi"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search Lipid Maps in Duaer', zh: '在 Duaer 里检索 Lipid Maps' },
		lede: { en: 'In Duaer, search lipid structures in LIPID MAPS. One successful search uses 1 credit.', zh: '在 Duaer 里在 LIPID MAPS 检索脂质结构。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-lipid-maps',
			description: 'Search lipid structures in LIPID MAPS through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer Lipid Maps',
			call: 'GET https://api.duaer.com/v1/data/lipid-maps?words=PA&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as PA.","`id` — optional. Id such as LMFA01010001.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'mgnify',
		related: ["geo","biosamples"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search MGnify in Duaer', zh: '在 Duaer 里检索 MGnify' },
		lede: { en: 'In Duaer, search microbiome studies in MGnify. One successful search uses 1 credit.', zh: '在 Duaer 里在 MGnify 检索微生物组研究。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-mgnify',
			description: 'Search microbiome studies in MGnify through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer MGnify',
			call: 'GET https://api.duaer.com/v1/data/mgnify?words=soil&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as soil.","`id` — optional. Id such as MGYS00005798.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'bv-brc',
		related: ["organisms","genes"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search BV-BRC in Duaer', zh: '在 Duaer 里检索 BV-BRC' },
		lede: { en: 'In Duaer, search pathogen genomes in BV-BRC. One successful search uses 1 credit.', zh: '在 Duaer 里在 BV-BRC 检索病原基因组。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-bv-brc',
			description: 'Search pathogen genomes in BV-BRC through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer BV-BRC',
			call: 'GET https://api.duaer.com/v1/data/bv-brc?words=tuberculosis&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as tuberculosis.","`id` — optional. Id such as 83332.12.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'clinpgx',
		related: ["drug-gene","genes"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search ClinPGx in Duaer', zh: '在 Duaer 里检索 ClinPGx' },
		lede: { en: 'In Duaer, search pharmacogenomics genes in ClinPGx. One successful search uses 1 credit.', zh: '在 Duaer 里在 ClinPGx 检索药物基因组基因。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-clinpgx',
			description: 'Search pharmacogenomics genes in ClinPGx through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer ClinPGx',
			call: 'GET https://api.duaer.com/v1/data/clinpgx?words=CYP2D6&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as CYP2D6.","`id` — optional. Id such as CYP2D6.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'daily-med',
		related: ["ndc","drug-labels","drugs-fda"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search DailyMed in Duaer', zh: '在 Duaer 里检索 DailyMed' },
		lede: { en: 'In Duaer, search drug labeling in DailyMed. One successful search uses 1 credit.', zh: '在 Duaer 里在 DailyMed 检索药品说明书。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-daily-med',
			description: 'Search drug labeling in DailyMed through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer DailyMed',
			call: 'GET https://api.duaer.com/v1/data/daily-med?words=aspirin&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as aspirin.","`id` — optional. Id such as d49f3e4f-7e0e-467d-a0c4-c6b109af245e.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'rxclass',
		related: ["rxnorm","ndc"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search RxClass in Duaer', zh: '在 Duaer 里检索 RxClass' },
		lede: { en: 'In Duaer, search drug classes in RxClass. One successful search uses 1 credit.', zh: '在 Duaer 里在 RxClass 检索药物分类。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-rxclass',
			description: 'Search drug classes in RxClass through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer RxClass',
			call: 'GET https://api.duaer.com/v1/data/rxclass?words=aspirin&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as aspirin.","`id` — optional. Id such as aspirin.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'device-510k',
		related: ["device-events","ndc"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search OpenFDA 510(k) in Duaer', zh: '在 Duaer 里检索 OpenFDA 510(k)' },
		lede: { en: 'In Duaer, search FDA 510(k) device clearances. One successful search uses 1 credit.', zh: '在 Duaer 里检索 FDA 510(k) 器械批准。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-device-510k',
			description: 'Search FDA 510(k) device clearances through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer OpenFDA 510(k)',
			call: 'GET https://api.duaer.com/v1/data/device-510k?words=medtronic&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as medtronic.","`id` — optional. Id such as K123456.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'food-enforcement',
		related: ["drug-recalls","ndc"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search OpenFDA Food in Duaer', zh: '在 Duaer 里检索 OpenFDA Food' },
		lede: { en: 'In Duaer, search FDA food enforcement reports. One successful search uses 1 credit.', zh: '在 Duaer 里检索 FDA 食品执法报告。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-food-enforcement',
			description: 'Search FDA food enforcement reports through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer OpenFDA Food',
			call: 'GET https://api.duaer.com/v1/data/food-enforcement?words=listeria&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as listeria.","`id` — optional. Id such as F-001-2020.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'zenodo',
		related: ["papers","preprints"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search Zenodo in Duaer', zh: '在 Duaer 里检索 Zenodo' },
		lede: { en: 'In Duaer, search research outputs in Zenodo. One successful search uses 1 credit.', zh: '在 Duaer 里在 Zenodo 检索研究产出。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-zenodo',
			description: 'Search research outputs in Zenodo through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer Zenodo',
			call: 'GET https://api.duaer.com/v1/data/zenodo?words=proteomics&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as proteomics.","`id` — optional. Id such as 10.5281/zenodo.17662799.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'figshare',
		related: ["papers","zenodo"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search Figshare in Duaer', zh: '在 Duaer 里检索 Figshare' },
		lede: { en: 'In Duaer, search research outputs in Figshare. One successful search uses 1 credit.', zh: '在 Duaer 里在 Figshare 检索研究产出。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-figshare',
			description: 'Search research outputs in Figshare through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer Figshare',
			call: 'GET https://api.duaer.com/v1/data/figshare?words=proteomics&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as proteomics.","`id` — optional. Id such as 12345.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'dryad',
		related: ["papers","zenodo"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search Dryad in Duaer', zh: '在 Duaer 里检索 Dryad' },
		lede: { en: 'In Duaer, search research datasets in Dryad. One successful search uses 1 credit.', zh: '在 Duaer 里在 Dryad 检索研究数据集。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-dryad',
			description: 'Search research datasets in Dryad through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer Dryad',
			call: 'GET https://api.duaer.com/v1/data/dryad?words=proteomics&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as proteomics.","`id` — optional. Id such as doi:10.5061/dryad.xxx.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'proteomexchange',
		related: ["pride","proteins"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search ProteomeXchange in Duaer', zh: '在 Duaer 里检索 ProteomeXchange' },
		lede: { en: 'In Duaer, look up ProteomeXchange datasets. One successful search uses 1 credit.', zh: '在 Duaer 里查阅 ProteomeXchange 数据集。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-proteomexchange',
			description: 'Look up ProteomeXchange datasets through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer ProteomeXchange',
			call: 'GET https://api.duaer.com/v1/data/proteomexchange?words=PXD000001&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as PXD000001.","`id` — optional. Id such as PXD000001.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'omnipath',
		related: ["interactions","intact"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search Omnipath in Duaer', zh: '在 Duaer 里检索 Omnipath' },
		lede: { en: 'In Duaer, search molecular interactions in OmniPath. One successful search uses 1 credit.', zh: '在 Duaer 里在 OmniPath 检索分子互作。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-omnipath',
			description: 'Search molecular interactions in OmniPath through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer Omnipath',
			call: 'GET https://api.duaer.com/v1/data/omnipath?words=EGFR&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as EGFR.","`id` — optional. Id such as EGFR.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'oma',
		related: ["orthologs","proteins"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search OMA in Duaer', zh: '在 Duaer 里检索 OMA' },
		lede: { en: 'In Duaer, look up proteins in OMA browser. One successful search uses 1 credit.', zh: '在 Duaer 里在 OMA 查阅蛋白。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-oma',
			description: 'Look up proteins in OMA browser through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer OMA',
			call: 'GET https://api.duaer.com/v1/data/oma?words=BRCA1_HUMAN&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as BRCA1_HUMAN.","`id` — optional. Id such as BRCA1_HUMAN.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'orthodb',
		related: ["orthologs","oma"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search OrthoDB in Duaer', zh: '在 Duaer 里检索 OrthoDB' },
		lede: { en: 'In Duaer, search orthologs in OrthoDB. One successful search uses 1 credit.', zh: '在 Duaer 里在 OrthoDB 检索同源基因。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-orthodb',
			description: 'Search orthologs in OrthoDB through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer OrthoDB',
			call: 'GET https://api.duaer.com/v1/data/orthodb?words=BRCA1&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as BRCA1.","`id` — optional. Id such as 9606_0:001234.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'panther',
		related: ["genes","orthologs"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search PANTHER in Duaer', zh: '在 Duaer 里检索 PANTHER' },
		lede: { en: 'In Duaer, look up gene info in PANTHER. One successful search uses 1 credit.', zh: '在 Duaer 里在 PANTHER 查阅基因信息。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-panther',
			description: 'Look up gene info in PANTHER through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer PANTHER',
			call: 'GET https://api.duaer.com/v1/data/panther?words=BRCA1&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as BRCA1.","`id` — optional. Id such as Human=BRCA1.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'pato',
		related: ["phenotypes","mp"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search PATO in Duaer', zh: '在 Duaer 里检索 PATO' },
		lede: { en: 'In Duaer, search phenotype quality terms via PATO. One successful search uses 1 credit.', zh: '在 Duaer 里经 PATO 检索表型质量术语。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-pato',
			description: 'Search phenotype quality terms via PATO through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer PATO',
			call: 'GET https://api.duaer.com/v1/data/pato?words=shape&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as shape.","`id` — optional. Id such as PATO:0000052.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'edam',
		related: ["assays","bio-tools"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search EDAM in Duaer', zh: '在 Duaer 里检索 EDAM' },
		lede: { en: 'In Duaer, search bioinformatics concepts via EDAM. One successful search uses 1 credit.', zh: '在 Duaer 里经 EDAM 检索生物信息学术语。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-edam',
			description: 'Search bioinformatics concepts via EDAM through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer EDAM',
			call: 'GET https://api.duaer.com/v1/data/edam?words=fasta&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as fasta.","`id` — optional. Id such as EDAM:format_1929.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'bao',
		related: ["assays","obi"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search BAO in Duaer', zh: '在 Duaer 里检索 BAO' },
		lede: { en: 'In Duaer, search BioAssay Ontology terms via BAO. One successful search uses 1 credit.', zh: '在 Duaer 里经 BAO 检索生物测定本体术语。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-bao',
			description: 'Search BioAssay Ontology terms via BAO through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer BAO',
			call: 'GET https://api.duaer.com/v1/data/bao?words=assay&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as assay.","`id` — optional. Id such as BAO:0000015.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'bto',
		related: ["uberon","atlas"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search BTO in Duaer', zh: '在 Duaer 里检索 BTO' },
		lede: { en: 'In Duaer, search tissue terms via BRENDA Tissue Ontology. One successful search uses 1 credit.', zh: '在 Duaer 里经 BTO 检索组织术语。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-bto',
			description: 'Search tissue terms via BRENDA Tissue Ontology through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer BTO',
			call: 'GET https://api.duaer.com/v1/data/bto?words=liver&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as liver.","`id` — optional. Id such as BTO:0000759.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'pw',
		related: ["pathways","kegg"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search PW in Duaer', zh: '在 Duaer 里检索 PW' },
		lede: { en: 'In Duaer, search pathway ontology terms via PW. One successful search uses 1 credit.', zh: '在 Duaer 里经 PW 检索通路本体术语。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-pw',
			description: 'Search pathway ontology terms via PW through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer PW',
			call: 'GET https://api.duaer.com/v1/data/pw?words=apoptosis&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as apoptosis.","`id` — optional. Id such as PW:0000009.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'vo',
		related: ["phenotypes","mesh"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search VO in Duaer', zh: '在 Duaer 里检索 VO' },
		lede: { en: 'In Duaer, search vaccine ontology terms via VO. One successful search uses 1 credit.', zh: '在 Duaer 里经 VO 检索疫苗本体术语。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-vo',
			description: 'Search vaccine ontology terms via VO through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer VO',
			call: 'GET https://api.duaer.com/v1/data/vo?words=vaccine&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as vaccine.","`id` — optional. Id such as VO:0000001.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'oncotree',
		related: ["cbioportal","ncit"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search OncoTree in Duaer', zh: '在 Duaer 里检索 OncoTree' },
		lede: { en: 'In Duaer, search tumor types in OncoTree. One successful search uses 1 credit.', zh: '在 Duaer 里在 OncoTree 检索肿瘤类型。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-oncotree',
			description: 'Search tumor types in OncoTree through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer OncoTree',
			call: 'GET https://api.duaer.com/v1/data/oncotree?words=melanoma&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as melanoma.","`id` — optional. Id such as MEL.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'idr',
		related: ["geo","expression-atlas"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search IDR in Duaer', zh: '在 Duaer 里检索 IDR' },
		lede: { en: 'In Duaer, browse imaging projects in IDR. One successful search uses 1 credit.', zh: '在 Duaer 里在 IDR 浏览成像项目。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-idr',
			description: 'Browse imaging projects in IDR through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer IDR',
			call: 'GET https://api.duaer.com/v1/data/idr?words=cell&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as cell.","`id` — optional. Id such as 51.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'hca',
		related: ["expression-atlas","single-cell-atlas"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search HCA in Duaer', zh: '在 Duaer 里检索 HCA' },
		lede: { en: 'In Duaer, search Human Cell Atlas projects. One successful search uses 1 credit.', zh: '在 Duaer 里检索人类细胞图谱项目。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-hca',
			description: 'Search Human Cell Atlas projects through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer HCA',
			call: 'GET https://api.duaer.com/v1/data/hca?words=blood&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as blood.","`id` — optional. Id such as projectId.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'ucsc',
		related: ["ensembl","genes"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search UCSC in Duaer', zh: '在 Duaer 里检索 UCSC' },
		lede: { en: 'In Duaer, search UCSC genome assemblies. One successful search uses 1 credit.', zh: '在 Duaer 里检索 UCSC 基因组组装。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-ucsc',
			description: 'Search UCSC genome assemblies through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer UCSC',
			call: 'GET https://api.duaer.com/v1/data/ucsc?words=hg38&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as hg38.","`id` — optional. Id such as hg38.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'harmonizome',
		related: ["genes","expression"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search Harmonizome in Duaer', zh: '在 Duaer 里检索 Harmonizome' },
		lede: { en: 'In Duaer, look up gene annotations in Harmonizome. One successful search uses 1 credit.', zh: '在 Duaer 里在 Harmonizome 查阅基因注释。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-harmonizome',
			description: 'Look up gene annotations in Harmonizome through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer Harmonizome',
			call: 'GET https://api.duaer.com/v1/data/harmonizome?words=BRCA1&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as BRCA1.","`id` — optional. Id such as BRCA1.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'pubtator',
		related: ["papers","genes"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search PubTator in Duaer', zh: '在 Duaer 里检索 PubTator' },
		lede: { en: 'In Duaer, autocomplete biomedical entities in PubTator. One successful search uses 1 credit.', zh: '在 Duaer 里在 PubTator 自动补全生医实体。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-pubtator',
			description: 'Autocomplete biomedical entities in PubTator through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer PubTator',
			call: 'GET https://api.duaer.com/v1/data/pubtator?words=BRCA1&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as BRCA1.","`id` — optional. Id such as BRCA1.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'icite',
		related: ["papers","europe-pmc"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search iCite in Duaer', zh: '在 Duaer 里检索 iCite' },
		lede: { en: 'In Duaer, look up NIH relative citation ratios in iCite. One successful search uses 1 credit.', zh: '在 Duaer 里在 iCite 查阅 NIH 相对引用比。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-icite',
			description: 'Look up NIH relative citation ratios in iCite through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer iCite',
			call: 'GET https://api.duaer.com/v1/data/icite?words=28973672&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as 28973672.","`id` — optional. Id such as 28973672.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'ror',
		related: ["papers","orcid"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search ROR in Duaer', zh: '在 Duaer 里检索 ROR' },
		lede: { en: 'In Duaer, search research organizations in ROR. One successful search uses 1 credit.', zh: '在 Duaer 里在 ROR 检索研究机构。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-ror',
			description: 'Search research organizations in ROR through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer ROR',
			call: 'GET https://api.duaer.com/v1/data/ror?words=cambridge&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as cambridge.","`id` — optional. Id such as https://ror.org/013meh722.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'openalex-authors',
		related: ["papers","orcid"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search OpenAlex Authors in Duaer', zh: '在 Duaer 里检索 OpenAlex Authors' },
		lede: { en: 'In Duaer, search authors in OpenAlex. One successful search uses 1 credit.', zh: '在 Duaer 里在 OpenAlex 检索作者。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-openalex-authors',
			description: 'Search authors in OpenAlex through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer OpenAlex Authors',
			call: 'GET https://api.duaer.com/v1/data/openalex-authors?words=crick&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as crick.","`id` — optional. Id such as A5023888391.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'openalex-institutions',
		related: ["papers","ror"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search OpenAlex Institutions in Duaer', zh: '在 Duaer 里检索 OpenAlex Institutions' },
		lede: { en: 'In Duaer, search institutions in OpenAlex. One successful search uses 1 credit.', zh: '在 Duaer 里在 OpenAlex 检索机构。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-openalex-institutions',
			description: 'Search institutions in OpenAlex through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer OpenAlex Institutions',
			call: 'GET https://api.duaer.com/v1/data/openalex-institutions?words=cambridge&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as cambridge.","`id` — optional. Id such as I97018004.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'openalex-topics',
		related: ["papers","crossref"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search OpenAlex Topics in Duaer', zh: '在 Duaer 里检索 OpenAlex Topics' },
		lede: { en: 'In Duaer, search topics in OpenAlex. One successful search uses 1 credit.', zh: '在 Duaer 里在 OpenAlex 检索主题。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-openalex-topics',
			description: 'Search topics in OpenAlex through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer OpenAlex Topics',
			call: 'GET https://api.duaer.com/v1/data/openalex-topics?words=cancer&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as cancer.","`id` — optional. Id such as T10001.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'crossref-funders',
		related: ["grants","papers"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search Crossref Funders in Duaer', zh: '在 Duaer 里检索 Crossref Funders' },
		lede: { en: 'In Duaer, search funders in Crossref. One successful search uses 1 credit.', zh: '在 Duaer 里在 Crossref 检索资助方。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-crossref-funders',
			description: 'Search funders in Crossref through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer Crossref Funders',
			call: 'GET https://api.duaer.com/v1/data/crossref-funders?words=wellcome&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as wellcome.","`id` — optional. Id such as 100000002.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'nsf-awards',
		related: ["grants","papers"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search NSF Awards in Duaer', zh: '在 Duaer 里检索 NSF Awards' },
		lede: { en: 'In Duaer, search NSF awards. One successful search uses 1 credit.', zh: '在 Duaer 里检索 NSF 资助项目。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-nsf-awards',
			description: 'Search NSF awards through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer NSF Awards',
			call: 'GET https://api.duaer.com/v1/data/nsf-awards?words=proteomics&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as proteomics.","`id` — optional. Id such as 1234567.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'eva',
		related: ["variants","dbsnp","clinvar"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search EVA in Duaer', zh: '在 Duaer 里检索 EVA' },
		lede: { en: 'In Duaer, browse variation studies in EVA. One successful search uses 1 credit.', zh: '在 Duaer 里在 EVA 浏览变异研究。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-eva',
			description: 'Browse variation studies in EVA through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer EVA',
			call: 'GET https://api.duaer.com/v1/data/eva?words=human&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as human.","`id` — optional. Id such as PRJEB123.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'ensembl-vep',
		related: ["variants","ensembl","dbsnp"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search Ensembl VEP in Duaer', zh: '在 Duaer 里检索 Ensembl VEP' },
		lede: { en: 'In Duaer, predict variant effects with Ensembl VEP. One successful search uses 1 credit.', zh: '在 Duaer 里用 Ensembl VEP 预测变异效应。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-ensembl-vep',
			description: 'Predict variant effects with Ensembl VEP through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer Ensembl VEP',
			call: 'GET https://api.duaer.com/v1/data/ensembl-vep?words=rs699&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as rs699.","`id` — optional. Id such as rs699.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'ncbi-datasets',
		related: ["genes","ensembl"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search NCBI Datasets in Duaer', zh: '在 Duaer 里检索 NCBI Datasets' },
		lede: { en: 'In Duaer, look up genes in NCBI Datasets. One successful search uses 1 credit.', zh: '在 Duaer 里在 NCBI Datasets 查阅基因。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-ncbi-datasets',
			description: 'Look up genes in NCBI Datasets through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer NCBI Datasets',
			call: 'GET https://api.duaer.com/v1/data/ncbi-datasets?words=BRCA1&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as BRCA1.","`id` — optional. Id such as 672.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: '4dn',
		related: ["encode","geo"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search 4DN in Duaer', zh: '在 Duaer 里检索 4DN' },
		lede: { en: 'In Duaer, search 4D Nucleome publications. One successful search uses 1 credit.', zh: '在 Duaer 里检索 4D Nucleome 文献。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-4dn',
			description: 'Search 4D Nucleome publications through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer 4DN',
			call: 'GET https://api.duaer.com/v1/data/4dn?words=chromatin&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as chromatin.","`id` — optional. Id such as 12345.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'rgd',
		related: ["genes","alliance"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search RGD in Duaer', zh: '在 Duaer 里检索 RGD' },
		lede: { en: 'In Duaer, look up rat genes in RGD. One successful search uses 1 credit.', zh: '在 Duaer 里在 RGD 查阅大鼠基因。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-rgd',
			description: 'Look up rat genes in RGD through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer RGD',
			call: 'GET https://api.duaer.com/v1/data/rgd?words=61919&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as 61919.","`id` — optional. Id such as 61919.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'sgd',
		related: ["genes","alliance"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search SGD in Duaer', zh: '在 Duaer 里检索 SGD' },
		lede: { en: 'In Duaer, look up yeast genes in SGD. One successful search uses 1 credit.', zh: '在 Duaer 里在 SGD 查阅酵母基因。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-sgd',
			description: 'Look up yeast genes in SGD through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer SGD',
			call: 'GET https://api.duaer.com/v1/data/sgd?words=S000000001&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as S000000001.","`id` — optional. Id such as S000000001.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'nextstrain',
		related: ["geo","organisms"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search Nextstrain in Duaer', zh: '在 Duaer 里检索 Nextstrain' },
		lede: { en: 'In Duaer, search pathogen datasets in Nextstrain. One successful search uses 1 credit.', zh: '在 Duaer 里在 Nextstrain 检索病原数据集。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-nextstrain',
			description: 'Search pathogen datasets in Nextstrain through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer Nextstrain',
			call: 'GET https://api.duaer.com/v1/data/nextstrain?words=ncov&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as ncov.","`id` — optional. Id such as ncov/open/global/all-time.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'medlineplus',
		related: ["diseases","mesh"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search MedlinePlus in Duaer', zh: '在 Duaer 里检索 MedlinePlus' },
		lede: { en: 'In Duaer, look up consumer health topics in MedlinePlus. One successful search uses 1 credit.', zh: '在 Duaer 里在 MedlinePlus 查阅消费者健康主题。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-medlineplus',
			description: 'Look up consumer health topics in MedlinePlus through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer MedlinePlus',
			call: 'GET https://api.duaer.com/v1/data/medlineplus?words=E11&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as E11.","`id` — optional. Id such as E11.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'icd10',
		related: ["diseases","medlineplus"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search ICD-10 in Duaer', zh: '在 Duaer 里检索 ICD-10' },
		lede: { en: 'In Duaer, search ICD-10-CM codes via ClinicalTables. One successful search uses 1 credit.', zh: '在 Duaer 里经 ClinicalTables 检索 ICD-10-CM 编码。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-icd10',
			description: 'Search ICD-10-CM codes via ClinicalTables through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer ICD-10',
			call: 'GET https://api.duaer.com/v1/data/icd10?words=diabetes&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as diabetes.","`id` — optional. Id such as E11.9.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'bioregistry',
		related: ["crossrefs","identifiers"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search Bioregistry in Duaer', zh: '在 Duaer 里检索 Bioregistry' },
		lede: { en: 'In Duaer, search prefix registry entries in Bioregistry. One successful search uses 1 credit.', zh: '在 Duaer 里在 Bioregistry 检索前缀注册表。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-bioregistry',
			description: 'Search prefix registry entries in Bioregistry through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer Bioregistry',
			call: 'GET https://api.duaer.com/v1/data/bioregistry?words=chebi&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as chebi.","`id` — optional. Id such as chebi.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'bio-tools',
		related: ["assays","dockstore"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search bio.tools in Duaer', zh: '在 Duaer 里检索 bio.tools' },
		lede: { en: 'In Duaer, search bioinformatics tools in bio.tools. One successful search uses 1 credit.', zh: '在 Duaer 里在 bio.tools 检索生信工具。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-bio-tools',
			description: 'Search bioinformatics tools in bio.tools through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer bio.tools',
			call: 'GET https://api.duaer.com/v1/data/bio-tools?words=blast&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as blast.","`id` — optional. Id such as blast.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'dockstore',
		related: ["bio-tools","workflowhub"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search Dockstore in Duaer', zh: '在 Duaer 里检索 Dockstore' },
		lede: { en: 'In Duaer, search workflows in Dockstore. One successful search uses 1 credit.', zh: '在 Duaer 里在 Dockstore 检索工作流。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-dockstore',
			description: 'Search workflows in Dockstore through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer Dockstore',
			call: 'GET https://api.duaer.com/v1/data/dockstore?words=rna&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as rna.","`id` — optional. Id such as github.com/org/tool.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'workflowhub',
		related: ["dockstore","bio-tools"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search WorkflowHub in Duaer', zh: '在 Duaer 里检索 WorkflowHub' },
		lede: { en: 'In Duaer, search workflows in WorkflowHub. One successful search uses 1 credit.', zh: '在 Duaer 里在 WorkflowHub 检索工作流。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-workflowhub',
			description: 'Search workflows in WorkflowHub through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer WorkflowHub',
			call: 'GET https://api.duaer.com/v1/data/workflowhub?words=proteomics&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as proteomics.","`id` — optional. Id such as workflowhub.eu/123.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'doaj',
		related: ["papers","europe-pmc"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search DOAJ in Duaer', zh: '在 Duaer 里检索 DOAJ' },
		lede: { en: 'In Duaer, search open-access articles in DOAJ. One successful search uses 1 credit.', zh: '在 Duaer 里在 DOAJ 检索开放获取文章。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-doaj',
			description: 'Search open-access articles in DOAJ through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer DOAJ',
			call: 'GET https://api.duaer.com/v1/data/doaj?words=insulin&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as insulin.","`id` — optional. Id such as 10.1234/x.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'wikidata',
		related: ["crossrefs","mesh"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search Wikidata in Duaer', zh: '在 Duaer 里检索 Wikidata' },
		lede: { en: 'In Duaer, search entities in Wikidata. One successful search uses 1 credit.', zh: '在 Duaer 里在 Wikidata 检索实体。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-wikidata',
			description: 'Search entities in Wikidata through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer Wikidata',
			call: 'GET https://api.duaer.com/v1/data/wikidata?words=BRCA1&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as BRCA1.","`id` — optional. Id such as Q178532.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'node-norm',
		related: ["crossrefs","name-resolver"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search NodeNorm in Duaer', zh: '在 Duaer 里检索 NodeNorm' },
		lede: { en: 'In Duaer, normalize biomedical curies via SRI NodeNorm. One successful search uses 1 credit.', zh: '在 Duaer 里经 SRI NodeNorm 规范化生医 Curie。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-node-norm',
			description: 'Normalize biomedical curies via SRI NodeNorm through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer NodeNorm',
			call: 'GET https://api.duaer.com/v1/data/node-norm?words=NCBIGene%3A672&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as NCBIGene:672.","`id` — optional. Id such as NCBIGene:672.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'name-resolver',
		related: ["node-norm","crossrefs"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search NameResolver in Duaer', zh: '在 Duaer 里检索 NameResolver' },
		lede: { en: 'In Duaer, resolve biomedical names via SRI Name Resolver. One successful search uses 1 credit.', zh: '在 Duaer 里经 SRI Name Resolver 解析生医名称。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-name-resolver',
			description: 'Resolve biomedical names via SRI Name Resolver through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer NameResolver',
			call: 'GET https://api.duaer.com/v1/data/name-resolver?words=BRCA1&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as BRCA1.","`id` — optional. Id such as BRCA1.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'gbif',
		related: ["organisms","ncbi-taxon"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search GBIF in Duaer', zh: '在 Duaer 里检索 GBIF' },
		lede: { en: 'In Duaer, search species in GBIF. One successful search uses 1 credit.', zh: '在 Duaer 里在 GBIF 检索物种。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-gbif',
			description: 'Search species in GBIF through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer GBIF',
			call: 'GET https://api.duaer.com/v1/data/gbif?words=Homo%20sapiens&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as Homo sapiens.","`id` — optional. Id such as 2436436.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'itis',
		related: ["organisms","gbif"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search ITIS in Duaer', zh: '在 Duaer 里检索 ITIS' },
		lede: { en: 'In Duaer, search taxonomy in ITIS. One successful search uses 1 credit.', zh: '在 Duaer 里在 ITIS 检索分类学。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-itis',
			description: 'Search taxonomy in ITIS through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer ITIS',
			call: 'GET https://api.duaer.com/v1/data/itis?words=Homo%20sapiens&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as Homo sapiens.","`id` — optional. Id such as 180092.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'worms',
		related: ["organisms","gbif"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search WoRMS in Duaer', zh: '在 Duaer 里检索 WoRMS' },
		lede: { en: 'In Duaer, search marine species in WoRMS. One successful search uses 1 credit.', zh: '在 Duaer 里在 WoRMS 检索海洋物种。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-worms',
			description: 'Search marine species in WoRMS through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer WoRMS',
			call: 'GET https://api.duaer.com/v1/data/worms?words=Homo%20sapiens&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as Homo sapiens.","`id` — optional. Id such as 1457844.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'inaturalist',
		related: ["organisms","gbif"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search iNaturalist in Duaer', zh: '在 Duaer 里检索 iNaturalist' },
		lede: { en: 'In Duaer, search taxa in iNaturalist. One successful search uses 1 credit.', zh: '在 Duaer 里在 iNaturalist 检索分类单元。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-inaturalist',
			description: 'Search taxa in iNaturalist through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer iNaturalist',
			call: 'GET https://api.duaer.com/v1/data/inaturalist?words=Homo%20sapiens&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as Homo sapiens.","`id` — optional. Id such as 4352.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'disprot',
		related: ["proteins"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search DisProt in Duaer', zh: '在 Duaer 里检索 DisProt' },
		lede: { en: 'In Duaer, search intrinsically disordered proteins in DisProt. One successful search uses 1 credit.', zh: '在 Duaer 里在 DisProt 检索内禀无序蛋白。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-disprot',
			description: 'Search intrinsically disordered proteins in DisProt through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer DisProt',
			call: 'GET https://api.duaer.com/v1/data/disprot?words=p53&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as p53.","`id` — optional. Id such as DP00086.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'lotus',
		related: ["compounds"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search LOTUS in Duaer', zh: '在 Duaer 里检索 LOTUS' },
		lede: { en: 'In Duaer, search natural products in LOTUS. One successful search uses 1 credit.', zh: '在 Duaer 里在 LOTUS 检索天然产物。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-lotus',
			description: 'Search natural products in LOTUS through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer LOTUS',
			call: 'GET https://api.duaer.com/v1/data/lotus?words=caffeine&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as caffeine.","`id` — optional. Id such as LTS0000001.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'lincs',
		related: ["expression"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search LINCS in Duaer', zh: '在 Duaer 里检索 LINCS' },
		lede: { en: 'In Duaer, search LINCS portal datasets. One successful search uses 1 credit.', zh: '在 Duaer 里检索 LINCS 门户数据集。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-lincs',
			description: 'Search LINCS portal datasets through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer LINCS',
			call: 'GET https://api.duaer.com/v1/data/lincs?words=kinase&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as kinase.","`id` — optional. Id such as LDS-1234.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'cellxgene',
		related: ["expression"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search CELLxGENE in Duaer', zh: '在 Duaer 里检索 CELLxGENE' },
		lede: { en: 'In Duaer, search CELLxGENE collections. One successful search uses 1 credit.', zh: '在 Duaer 里检索 CELLxGENE 集合。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-cellxgene',
			description: 'Search CELLxGENE collections through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer CELLxGENE',
			call: 'GET https://api.duaer.com/v1/data/cellxgene?words=lung&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as lung.","`id` — optional. Id such as abc-123.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'mgrast',
		related: ["expression"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search MG-RAST in Duaer', zh: '在 Duaer 里检索 MG-RAST' },
		lede: { en: 'In Duaer, search MG-RAST metagenome projects. One successful search uses 1 credit.', zh: '在 Duaer 里检索 MG-RAST 宏基因组项目。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-mgrast',
			description: 'Search MG-RAST metagenome projects through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer MG-RAST',
			call: 'GET https://api.duaer.com/v1/data/mgrast?words=soil&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as soil.","`id` — optional. Id such as mgp128.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'galaxy',
		related: ["bio-tools"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search Galaxy in Duaer', zh: '在 Duaer 里检索 Galaxy' },
		lede: { en: 'In Duaer, search Galaxy tools and version. One successful search uses 1 credit.', zh: '在 Duaer 里检索 Galaxy 工具与版本。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-galaxy',
			description: 'Search Galaxy tools and version through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer Galaxy',
			call: 'GET https://api.duaer.com/v1/data/galaxy?words=bowtie&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as bowtie.","`id` — optional. Id such as toolshed.g2.bx.psu.edu/repos/devteam/bowtie2/bowtie2/2.5.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'nf-core',
		related: ["workflowhub"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search nf-core in Duaer', zh: '在 Duaer 里检索 nf-core' },
		lede: { en: 'In Duaer, search nf-core pipelines. One successful search uses 1 credit.', zh: '在 Duaer 里检索 nf-core 流程。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-nf-core',
			description: 'Search nf-core pipelines through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer nf-core',
			call: 'GET https://api.duaer.com/v1/data/nf-core?words=rnaseq&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as rnaseq.","`id` — optional. Id such as rnaseq.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 're3data',
		related: ["zenodo"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search re3data in Duaer', zh: '在 Duaer 里检索 re3data' },
		lede: { en: 'In Duaer, search research data repositories in re3data. One successful search uses 1 credit.', zh: '在 Duaer 里在 re3data 检索研究数据仓储。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-re3data',
			description: 'Search research data repositories in re3data through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer re3data',
			call: 'GET https://api.duaer.com/v1/data/re3data?words=genomics&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as genomics.","`id` — optional. Id such as r3d100010468.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'arxiv',
		related: ["preprints"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search arXiv in Duaer', zh: '在 Duaer 里检索 arXiv' },
		lede: { en: 'In Duaer, search preprints on arXiv. One successful search uses 1 credit.', zh: '在 Duaer 里在 arXiv 检索预印本。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-arxiv',
			description: 'Search preprints on arXiv through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer arXiv',
			call: 'GET https://api.duaer.com/v1/data/arxiv?words=transformer&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as transformer.","`id` — optional. Id such as 1706.03762.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'hal',
		related: ["papers"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search HAL in Duaer', zh: '在 Duaer 里检索 HAL' },
		lede: { en: 'In Duaer, search open archive documents in HAL. One successful search uses 1 credit.', zh: '在 Duaer 里在 HAL 开放档案检索文献。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-hal',
			description: 'Search open archive documents in HAL through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer HAL',
			call: 'GET https://api.duaer.com/v1/data/hal?words=biologie&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as biologie.","`id` — optional. Id such as hal-01234567.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'huggingface',
		related: ["bio-tools"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search Hugging Face in Duaer', zh: '在 Duaer 里检索 Hugging Face' },
		lede: { en: 'In Duaer, search models on Hugging Face. One successful search uses 1 credit.', zh: '在 Duaer 里在 Hugging Face 检索模型。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-huggingface',
			description: 'Search models on Hugging Face through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer Hugging Face',
			call: 'GET https://api.duaer.com/v1/data/huggingface?words=bert&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as bert.","`id` — optional. Id such as bert-base-uncased.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'openaire',
		related: ["papers"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search OpenAIRE in Duaer', zh: '在 Duaer 里检索 OpenAIRE' },
		lede: { en: 'In Duaer, search publications in OpenAIRE. One successful search uses 1 credit.', zh: '在 Duaer 里在 OpenAIRE 检索出版物。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-openaire',
			description: 'Search publications in OpenAIRE through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer OpenAIRE',
			call: 'GET https://api.duaer.com/v1/data/openaire?words=genomics&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as genomics.","`id` — optional. Id such as 10.1234/ex.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'harvard-dataverse',
		related: ["zenodo"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search Harvard Dataverse in Duaer', zh: '在 Duaer 里检索 Harvard Dataverse' },
		lede: { en: 'In Duaer, search datasets in Harvard Dataverse. One successful search uses 1 credit.', zh: '在 Duaer 里在哈佛 Dataverse 检索数据集。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-harvard-dataverse',
			description: 'Search datasets in Harvard Dataverse through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer Harvard Dataverse',
			call: 'GET https://api.duaer.com/v1/data/harvard-dataverse?words=climate&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as climate.","`id` — optional. Id such as doi:10.7910/DVN/ABC.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'doaj-journals',
		related: ["doaj"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search DOAJ Journals in Duaer', zh: '在 Duaer 里检索 DOAJ Journals' },
		lede: { en: 'In Duaer, search open access journals in DOAJ. One successful search uses 1 credit.', zh: '在 Duaer 里在 DOAJ 检索开放获取期刊。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-doaj-journals',
			description: 'Search open access journals in DOAJ through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer DOAJ Journals',
			call: 'GET https://api.duaer.com/v1/data/doaj-journals?words=biology&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as biology.","`id` — optional. Id such as 1234-5678.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'openalex-sources',
		related: ["papers"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search OpenAlex Sources in Duaer', zh: '在 Duaer 里检索 OpenAlex Sources' },
		lede: { en: 'In Duaer, search sources in OpenAlex. One successful search uses 1 credit.', zh: '在 Duaer 里在 OpenAlex 检索来源。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-openalex-sources',
			description: 'Search sources in OpenAlex through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer OpenAlex Sources',
			call: 'GET https://api.duaer.com/v1/data/openalex-sources?words=biology&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as biology.","`id` — optional. Id such as S137773608.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'openalex-funders',
		related: ["papers"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search OpenAlex Funders in Duaer', zh: '在 Duaer 里检索 OpenAlex Funders' },
		lede: { en: 'In Duaer, search funders in OpenAlex. One successful search uses 1 credit.', zh: '在 Duaer 里在 OpenAlex 检索资助方。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-openalex-funders',
			description: 'Search funders in OpenAlex through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer OpenAlex Funders',
			call: 'GET https://api.duaer.com/v1/data/openalex-funders?words=biology&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as biology.","`id` — optional. Id such as F4320332161.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'openalex-publishers',
		related: ["papers"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search OpenAlex Publishers in Duaer', zh: '在 Duaer 里检索 OpenAlex Publishers' },
		lede: { en: 'In Duaer, search publishers in OpenAlex. One successful search uses 1 credit.', zh: '在 Duaer 里在 OpenAlex 检索出版商。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-openalex-publishers',
			description: 'Search publishers in OpenAlex through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer OpenAlex Publishers',
			call: 'GET https://api.duaer.com/v1/data/openalex-publishers?words=biology&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as biology.","`id` — optional. Id such as P4310319965.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'openalex-concepts',
		related: ["papers"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search OpenAlex Concepts in Duaer', zh: '在 Duaer 里检索 OpenAlex Concepts' },
		lede: { en: 'In Duaer, search concepts in OpenAlex. One successful search uses 1 credit.', zh: '在 Duaer 里在 OpenAlex 检索概念。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-openalex-concepts',
			description: 'Search concepts in OpenAlex through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer OpenAlex Concepts',
			call: 'GET https://api.duaer.com/v1/data/openalex-concepts?words=biology&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as biology.","`id` — optional. Id such as C2775406478.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'device-udi',
		related: ["device-events"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search OpenFDA Device UDI in Duaer', zh: '在 Duaer 里检索 OpenFDA Device UDI' },
		lede: { en: 'In Duaer, search FDA device UDI records. One successful search uses 1 credit.', zh: '在 Duaer 里检索 FDA 器械 UDI。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-device-udi',
			description: 'Search FDA device UDI records through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer OpenFDA Device UDI',
			call: 'GET https://api.duaer.com/v1/data/device-udi?words=catheter&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as catheter.","`id` — optional. Id such as UDI-123.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'device-pma',
		related: ["device-events"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search OpenFDA Device PMA in Duaer', zh: '在 Duaer 里检索 OpenFDA Device PMA' },
		lede: { en: 'In Duaer, search FDA device PMA approvals. One successful search uses 1 credit.', zh: '在 Duaer 里检索 FDA 器械 PMA。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-device-pma',
			description: 'Search FDA device PMA approvals through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer OpenFDA Device PMA',
			call: 'GET https://api.duaer.com/v1/data/device-pma?words=medtronic&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as medtronic.","`id` — optional. Id such as P123456.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'device-recall',
		related: ["device-events"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search OpenFDA Device Recall in Duaer', zh: '在 Duaer 里检索 OpenFDA Device Recall' },
		lede: { en: 'In Duaer, search FDA device recalls. One successful search uses 1 credit.', zh: '在 Duaer 里检索 FDA 器械召回。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-device-recall',
			description: 'Search FDA device recalls through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer OpenFDA Device Recall',
			call: 'GET https://api.duaer.com/v1/data/device-recall?words=pump&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as pump.","`id` — optional. Id such as 12345.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'device-classification',
		related: ["device-events"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search OpenFDA Device Class in Duaer', zh: '在 Duaer 里检索 OpenFDA Device Class' },
		lede: { en: 'In Duaer, search FDA device classifications. One successful search uses 1 credit.', zh: '在 Duaer 里检索 FDA 器械分类。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-device-classification',
			description: 'Search FDA device classifications through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer OpenFDA Device Class',
			call: 'GET https://api.duaer.com/v1/data/device-classification?words=monitor&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as monitor.","`id` — optional. Id such as DQA.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'animal-events',
		related: ["device-events"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search OpenFDA Animal Events in Duaer', zh: '在 Duaer 里检索 OpenFDA Animal Events' },
		lede: { en: 'In Duaer, search FDA animal drug adverse events. One successful search uses 1 credit.', zh: '在 Duaer 里检索 FDA 兽药不良事件。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-animal-events',
			description: 'Search FDA animal drug adverse events through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer OpenFDA Animal Events',
			call: 'GET https://api.duaer.com/v1/data/animal-events?words=dog&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as dog.","`id` — optional. Id such as USA-123.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'food-events',
		related: ["device-events"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search OpenFDA Food Events in Duaer', zh: '在 Duaer 里检索 OpenFDA Food Events' },
		lede: { en: 'In Duaer, search FDA food adverse events. One successful search uses 1 credit.', zh: '在 Duaer 里检索 FDA 食品不良事件。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-food-events',
			description: 'Search FDA food adverse events through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer OpenFDA Food Events',
			call: 'GET https://api.duaer.com/v1/data/food-events?words=allergy&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as allergy.","`id` — optional. Id such as 100000.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'tobacco',
		related: ["device-events"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search OpenFDA Tobacco in Duaer', zh: '在 Duaer 里检索 OpenFDA Tobacco' },
		lede: { en: 'In Duaer, search FDA tobacco problem reports. One successful search uses 1 credit.', zh: '在 Duaer 里检索 FDA 烟草问题报告。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-tobacco',
			description: 'Search FDA tobacco problem reports through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer OpenFDA Tobacco',
			call: 'GET https://api.duaer.com/v1/data/tobacco?words=battery&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as battery.","`id` — optional. Id such as TOB-1.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'rxterms',
		related: ["rxnorm"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search RxTerms in Duaer', zh: '在 Duaer 里检索 RxTerms' },
		lede: { en: 'In Duaer, search drug terms in RxTerms. One successful search uses 1 credit.', zh: '在 Duaer 里在 RxTerms 检索药物术语。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-rxterms',
			description: 'Search drug terms in RxTerms through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer RxTerms',
			call: 'GET https://api.duaer.com/v1/data/rxterms?words=aspirin&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as aspirin.","`id` — optional. Id such as 1191.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'ncbi-assembly',
		related: ["genes"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search NCBI Assembly in Duaer', zh: '在 Duaer 里检索 NCBI Assembly' },
		lede: { en: 'In Duaer, search genome assemblies in NCBI. One successful search uses 1 credit.', zh: '在 Duaer 里在 NCBI 检索基因组组装。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-ncbi-assembly',
			description: 'Search genome assemblies in NCBI through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer NCBI Assembly',
			call: 'GET https://api.duaer.com/v1/data/ncbi-assembly?words=GRCh38&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as GRCh38.","`id` — optional. Id such as 12345.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'ncbi-bioproject',
		related: ["genes"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search NCBI BioProject in Duaer', zh: '在 Duaer 里检索 NCBI BioProject' },
		lede: { en: 'In Duaer, search BioProjects in NCBI. One successful search uses 1 credit.', zh: '在 Duaer 里在 NCBI 检索 BioProject。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-ncbi-bioproject',
			description: 'Search BioProjects in NCBI through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer NCBI BioProject',
			call: 'GET https://api.duaer.com/v1/data/ncbi-bioproject?words=human%20microbiome&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as human microbiome.","`id` — optional. Id such as 12345.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'ncbi-sra',
		related: ["genes"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search NCBI SRA in Duaer', zh: '在 Duaer 里检索 NCBI SRA' },
		lede: { en: 'In Duaer, search sequencing runs in NCBI SRA. One successful search uses 1 credit.', zh: '在 Duaer 里在 NCBI SRA 检索测序数据。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-ncbi-sra',
			description: 'Search sequencing runs in NCBI SRA through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer NCBI SRA',
			call: 'GET https://api.duaer.com/v1/data/ncbi-sra?words=RNA-seq&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as RNA-seq.","`id` — optional. Id such as 12345.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'ncbi-gtr',
		related: ["genes"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search NCBI GTR in Duaer', zh: '在 Duaer 里检索 NCBI GTR' },
		lede: { en: 'In Duaer, search genetic tests in NCBI GTR. One successful search uses 1 credit.', zh: '在 Duaer 里在 NCBI GTR 检索基因检测。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-ncbi-gtr',
			description: 'Search genetic tests in NCBI GTR through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer NCBI GTR',
			call: 'GET https://api.duaer.com/v1/data/ncbi-gtr?words=BRCA1&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as BRCA1.","`id` — optional. Id such as 12345.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'ncbi-medgen',
		related: ["genes"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search NCBI MedGen in Duaer', zh: '在 Duaer 里检索 NCBI MedGen' },
		lede: { en: 'In Duaer, search MedGen concepts in NCBI. One successful search uses 1 credit.', zh: '在 Duaer 里在 NCBI MedGen 检索医学概念。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-ncbi-medgen',
			description: 'Search MedGen concepts in NCBI through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer NCBI MedGen',
			call: 'GET https://api.duaer.com/v1/data/ncbi-medgen?words=diabetes&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as diabetes.","`id` — optional. Id such as 12345.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'ncbi-variation',
		related: ["variants"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search NCBI Variation in Duaer', zh: '在 Duaer 里检索 NCBI Variation' },
		lede: { en: 'In Duaer, look up RefSNP records in NCBI Variation. One successful search uses 1 credit.', zh: '在 Duaer 里在 NCBI Variation 查询 RefSNP。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-ncbi-variation',
			description: 'Look up RefSNP records in NCBI Variation through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer NCBI Variation',
			call: 'GET https://api.duaer.com/v1/data/ncbi-variation?words=7412&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as 7412.","`id` — optional. Id such as 7412.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'dbvar',
		related: ["genes"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search dbVar in Duaer', zh: '在 Duaer 里检索 dbVar' },
		lede: { en: 'In Duaer, search structural variants in dbVar. One successful search uses 1 credit.', zh: '在 Duaer 里在 dbVar 检索结构变异。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-dbvar',
			description: 'Search structural variants in dbVar through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer dbVar',
			call: 'GET https://api.duaer.com/v1/data/dbvar?words=deletion&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as deletion.","`id` — optional. Id such as 12345.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'homologene',
		related: ["genes"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search HomoloGene in Duaer', zh: '在 Duaer 里检索 HomoloGene' },
		lede: { en: 'In Duaer, search gene homologs in HomoloGene. One successful search uses 1 credit.', zh: '在 Duaer 里在 HomoloGene 检索同源基因。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-homologene',
			description: 'Search gene homologs in HomoloGene through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer HomoloGene',
			call: 'GET https://api.duaer.com/v1/data/homologene?words=BRCA1&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as BRCA1.","`id` — optional. Id such as 12345.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'gtex-eqtl',
		related: ["expression"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search GTEx eQTL in Duaer', zh: '在 Duaer 里检索 GTEx eQTL' },
		lede: { en: 'In Duaer, search single-tissue eQTLs in GTEx. One successful search uses 1 credit.', zh: '在 Duaer 里在 GTEx 检索单组织 eQTL。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-gtex-eqtl',
			description: 'Search single-tissue eQTLs in GTEx through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer GTEx eQTL',
			call: 'GET https://api.duaer.com/v1/data/gtex-eqtl?words=BRCA1&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as BRCA1.","`id` — optional. Id such as ENSG00000012048.20.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'scop',
		related: ["structures"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search SCOP in Duaer', zh: '在 Duaer 里检索 SCOP' },
		lede: { en: 'In Duaer, search SCOP domain mappings via PDBe. One successful search uses 1 credit.', zh: '在 Duaer 里经 PDBe 检索 SCOP 结构域映射。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-scop',
			description: 'Search SCOP domain mappings via PDBe through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer SCOP',
			call: 'GET https://api.duaer.com/v1/data/scop?words=1cbs&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as 1cbs.","`id` — optional. Id such as 1cbs.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'pombase',
		related: ["genes"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search PomBase in Duaer', zh: '在 Duaer 里检索 PomBase' },
		lede: { en: 'In Duaer, look up fission yeast genes in PomBase. One successful search uses 1 credit.', zh: '在 Duaer 里在 PomBase 查询裂殖酵母基因。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-pombase',
			description: 'Look up fission yeast genes in PomBase through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer PomBase',
			call: 'GET https://api.duaer.com/v1/data/pombase?words=cdc2&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as cdc2.","`id` — optional. Id such as SPBC11B10.09.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'mgi',
		related: ["genes"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search MGI in Duaer', zh: '在 Duaer 里检索 MGI' },
		lede: { en: 'In Duaer, search mouse genes in MGI. One successful search uses 1 credit.', zh: '在 Duaer 里在 MGI 检索小鼠基因。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-mgi',
			description: 'Search mouse genes in MGI through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer MGI',
			call: 'GET https://api.duaer.com/v1/data/mgi?words=Pax6&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as Pax6.","`id` — optional. Id such as MGI:97490.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'clo',
		related: ["phenotypes"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search CLO in Duaer', zh: '在 Duaer 里检索 CLO' },
		lede: { en: 'In Duaer, search cell line ontology terms via CLO. One successful search uses 1 credit.', zh: '在 Duaer 里经 CLO 检索细胞系本体术语。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-clo',
			description: 'Search cell line ontology terms via CLO through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer CLO',
			call: 'GET https://api.duaer.com/v1/data/clo?words=cell&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as cell.","`id` — optional. Id such as CLO:0000001.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'ecto',
		related: ["phenotypes"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search ECTO in Duaer', zh: '在 Duaer 里检索 ECTO' },
		lede: { en: 'In Duaer, search environmental exposure terms via ECTO. One successful search uses 1 credit.', zh: '在 Duaer 里经 ECTO 检索环境暴露术语。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-ecto',
			description: 'Search environmental exposure terms via ECTO through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer ECTO',
			call: 'GET https://api.duaer.com/v1/data/ecto?words=exposure&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as exposure.","`id` — optional. Id such as ECTO:0000001.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'ro',
		related: ["phenotypes"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search RO in Duaer', zh: '在 Duaer 里检索 RO' },
		lede: { en: 'In Duaer, search relation ontology terms via RO. One successful search uses 1 credit.', zh: '在 Duaer 里经 RO 检索关系本体术语。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-ro',
			description: 'Search relation ontology terms via RO through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer RO',
			call: 'GET https://api.duaer.com/v1/data/ro?words=part%20of&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as part of.","`id` — optional. Id such as RO:0000052.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'fbbt',
		related: ["phenotypes"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search FBbt in Duaer', zh: '在 Duaer 里检索 FBbt' },
		lede: { en: 'In Duaer, search Drosophila anatomy via FBbt. One successful search uses 1 credit.', zh: '在 Duaer 里经 FBbt 检索果蝇解剖术语。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-fbbt',
			description: 'Search Drosophila anatomy via FBbt through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer FBbt',
			call: 'GET https://api.duaer.com/v1/data/fbbt?words=neuron&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as neuron.","`id` — optional. Id such as FBbt:00005106.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'zfa',
		related: ["phenotypes"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search ZFA in Duaer', zh: '在 Duaer 里检索 ZFA' },
		lede: { en: 'In Duaer, search zebrafish anatomy via ZFA. One successful search uses 1 credit.', zh: '在 Duaer 里经 ZFA 检索斑马鱼解剖术语。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-zfa',
			description: 'Search zebrafish anatomy via ZFA through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer ZFA',
			call: 'GET https://api.duaer.com/v1/data/zfa?words=fin&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as fin.","`id` — optional. Id such as ZFA:0000108.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'wbbt',
		related: ["phenotypes"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search WBbt in Duaer', zh: '在 Duaer 里检索 WBbt' },
		lede: { en: 'In Duaer, search C. elegans anatomy via WBbt. One successful search uses 1 credit.', zh: '在 Duaer 里经 WBbt 检索线虫解剖术语。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-wbbt',
			description: 'Search C. elegans anatomy via WBbt through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer WBbt',
			call: 'GET https://api.duaer.com/v1/data/wbbt?words=neuron&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as neuron.","`id` — optional. Id such as WBbt:0005759.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'xao',
		related: ["phenotypes"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search XAO in Duaer', zh: '在 Duaer 里检索 XAO' },
		lede: { en: 'In Duaer, search Xenopus anatomy via XAO. One successful search uses 1 credit.', zh: '在 Duaer 里经 XAO 检索爪蟾解剖术语。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-xao',
			description: 'Search Xenopus anatomy via XAO through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer XAO',
			call: 'GET https://api.duaer.com/v1/data/xao?words=heart&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as heart.","`id` — optional. Id such as XAO:0000001.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'envo',
		related: ["phenotypes"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search ENVO in Duaer', zh: '在 Duaer 里检索 ENVO' },
		lede: { en: 'In Duaer, search environment terms via ENVO. One successful search uses 1 credit.', zh: '在 Duaer 里经 ENVO 检索环境术语。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-envo',
			description: 'Search environment terms via ENVO through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer ENVO',
			call: 'GET https://api.duaer.com/v1/data/envo?words=soil&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as soil.","`id` — optional. Id such as ENVO:00001998.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'foodon',
		related: ["phenotypes"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search FOODON in Duaer', zh: '在 Duaer 里检索 FOODON' },
		lede: { en: 'In Duaer, search food ontology terms via FOODON. One successful search uses 1 credit.', zh: '在 Duaer 里经 FOODON 检索食品本体术语。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-foodon',
			description: 'Search food ontology terms via FOODON through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer FOODON',
			call: 'GET https://api.duaer.com/v1/data/foodon?words=bread&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as bread.","`id` — optional. Id such as FOODON:00002403.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'oae',
		related: ["phenotypes"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search OAE in Duaer', zh: '在 Duaer 里检索 OAE' },
		lede: { en: 'In Duaer, search adverse event terms via OAE. One successful search uses 1 credit.', zh: '在 Duaer 里经 OAE 检索不良事件术语。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-oae',
			description: 'Search adverse event terms via OAE through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer OAE',
			call: 'GET https://api.duaer.com/v1/data/oae?words=fever&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as fever.","`id` — optional. Id such as OAE:0000001.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'ido',
		related: ["phenotypes"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search IDO in Duaer', zh: '在 Duaer 里检索 IDO' },
		lede: { en: 'In Duaer, search infectious disease terms via IDO. One successful search uses 1 credit.', zh: '在 Duaer 里经 IDO 检索感染病术语。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-ido',
			description: 'Search infectious disease terms via IDO through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer IDO',
			call: 'GET https://api.duaer.com/v1/data/ido?words=infection&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as infection.","`id` — optional. Id such as IDO:0000001.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'cido',
		related: ["phenotypes"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search CIDO in Duaer', zh: '在 Duaer 里检索 CIDO' },
		lede: { en: 'In Duaer, search coronavirus terms via CIDO. One successful search uses 1 credit.', zh: '在 Duaer 里经 CIDO 检索冠状病毒术语。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-cido',
			description: 'Search coronavirus terms via CIDO through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer CIDO',
			call: 'GET https://api.duaer.com/v1/data/cido?words=coronavirus&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as coronavirus.","`id` — optional. Id such as CIDO:0000001.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'agro',
		related: ["phenotypes"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search AGRO in Duaer', zh: '在 Duaer 里检索 AGRO' },
		lede: { en: 'In Duaer, search agronomy terms via AGRO. One successful search uses 1 credit.', zh: '在 Duaer 里经 AGRO 检索农学术语。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-agro',
			description: 'Search agronomy terms via AGRO through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer AGRO',
			call: 'GET https://api.duaer.com/v1/data/agro?words=fertilizer&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as fertilizer.","`id` — optional. Id such as AGRO:0000001.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'po',
		related: ["phenotypes"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search PO in Duaer', zh: '在 Duaer 里检索 PO' },
		lede: { en: 'In Duaer, search plant ontology terms via PO. One successful search uses 1 credit.', zh: '在 Duaer 里经 PO 检索植物本体术语。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-po',
			description: 'Search plant ontology terms via PO through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer PO',
			call: 'GET https://api.duaer.com/v1/data/po?words=leaf&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as leaf.","`id` — optional. Id such as PO:0009025.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'to',
		related: ["phenotypes"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search TO in Duaer', zh: '在 Duaer 里检索 TO' },
		lede: { en: 'In Duaer, search plant trait terms via TO. One successful search uses 1 credit.', zh: '在 Duaer 里经 TO 检索植物性状术语。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-to',
			description: 'Search plant trait terms via TO through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer TO',
			call: 'GET https://api.duaer.com/v1/data/to?words=yield&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as yield.","`id` — optional. Id such as TO:0000371.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'chmo',
		related: ["phenotypes"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search CHMO in Duaer', zh: '在 Duaer 里检索 CHMO' },
		lede: { en: 'In Duaer, search chemical methods via CHMO. One successful search uses 1 credit.', zh: '在 Duaer 里经 CHMO 检索化学方法术语。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-chmo',
			description: 'Search chemical methods via CHMO through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer CHMO',
			call: 'GET https://api.duaer.com/v1/data/chmo?words=chromatography&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as chromatography.","`id` — optional. Id such as CHMO:0001000.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'ms',
		related: ["phenotypes"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search MS in Duaer', zh: '在 Duaer 里检索 MS' },
		lede: { en: 'In Duaer, search mass spectrometry terms via MS. One successful search uses 1 credit.', zh: '在 Duaer 里经 MS 检索质谱术语。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-ms',
			description: 'Search mass spectrometry terms via MS through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer MS',
			call: 'GET https://api.duaer.com/v1/data/ms?words=spectrum&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as spectrum.","`id` — optional. Id such as MS:1000073.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'stato',
		related: ["phenotypes"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search STATO in Duaer', zh: '在 Duaer 里检索 STATO' },
		lede: { en: 'In Duaer, search statistics terms via STATO. One successful search uses 1 credit.', zh: '在 Duaer 里经 STATO 检索统计术语。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-stato',
			description: 'Search statistics terms via STATO through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer STATO',
			call: 'GET https://api.duaer.com/v1/data/stato?words=p-value&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as p-value.","`id` — optional. Id such as STATO:0000001.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'duo',
		related: ["phenotypes"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search DUO in Duaer', zh: '在 Duaer 里检索 DUO' },
		lede: { en: 'In Duaer, search data use ontology terms via DUO. One successful search uses 1 credit.', zh: '在 Duaer 里经 DUO 检索数据使用术语。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-duo',
			description: 'Search data use ontology terms via DUO through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer DUO',
			call: 'GET https://api.duaer.com/v1/data/duo?words=consent&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as consent.","`id` — optional. Id such as DUO:0000001.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'iao',
		related: ["phenotypes"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search IAO in Duaer', zh: '在 Duaer 里检索 IAO' },
		lede: { en: 'In Duaer, search information artifact terms via IAO. One successful search uses 1 credit.', zh: '在 Duaer 里经 IAO 检索信息工件术语。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-iao',
			description: 'Search information artifact terms via IAO through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer IAO',
			call: 'GET https://api.duaer.com/v1/data/iao?words=document&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as document.","`id` — optional. Id such as IAO:0000001.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'sio',
		related: ["phenotypes"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search SIO in Duaer', zh: '在 Duaer 里检索 SIO' },
		lede: { en: 'In Duaer, search semantics science terms via SIO. One successful search uses 1 credit.', zh: '在 Duaer 里经 SIO 检索语义科学术语。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-sio',
			description: 'Search semantics science terms via SIO through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer SIO',
			call: 'GET https://api.duaer.com/v1/data/sio?words=process&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as process.","`id` — optional. Id such as SIO:0000001.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'cheminf',
		related: ["phenotypes"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search CHEMINF in Duaer', zh: '在 Duaer 里检索 CHEMINF' },
		lede: { en: 'In Duaer, search chemical information terms via CHEMINF. One successful search uses 1 credit.', zh: '在 Duaer 里经 CHEMINF 检索化学信息术语。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-cheminf',
			description: 'Search chemical information terms via CHEMINF through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer CHEMINF',
			call: 'GET https://api.duaer.com/v1/data/cheminf?words=descriptor&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as descriptor.","`id` — optional. Id such as CHEMINF:000000.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'enrichr',
		related: ["genes","pathways"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search Enrichr in Duaer', zh: '在 Duaer 里检索 Enrichr' },
		lede: { en: 'In Duaer, search Enrichr gene-set libraries by gene symbol or library name. One successful search uses 1 credit.', zh: '在 Duaer 里按基因符号或文库名检索 Enrichr 基因集。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-enrichr',
			description: 'Search Enrichr gene-set libraries by gene symbol or library name through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer Enrichr',
			call: 'GET https://api.duaer.com/v1/data/enrichr?words=TP53&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as TP53.","`id` — optional. Id such as TP53.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'unpaywall',
		related: ["papers","europe-pmc"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search Unpaywall in Duaer', zh: '在 Duaer 里检索 Unpaywall' },
		lede: { en: 'In Duaer, look up open-access status for a DOI in Unpaywall. One successful search uses 1 credit.', zh: '在 Duaer 里用 DOI 在 Unpaywall 查开放获取状态。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-unpaywall',
			description: 'Look up open-access status for a DOI in Unpaywall through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer Unpaywall',
			call: 'GET https://api.duaer.com/v1/data/unpaywall?words=10.1038%2Fnature12373&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as 10.1038/nature12373.","`id` — optional. Id such as 10.1038/nature12373.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'datacite',
		related: ["zenodo","crossref"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search DataCite in Duaer', zh: '在 Duaer 里检索 DataCite' },
		lede: { en: 'In Duaer, search DataCite DOI metadata for datasets and works. One successful search uses 1 credit.', zh: '在 Duaer 里在 DataCite 检索数据集与作品的 DOI 元数据。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-datacite',
			description: 'Search DataCite DOI metadata for datasets and works through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer DataCite',
			call: 'GET https://api.duaer.com/v1/data/datacite?words=crispr&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as crispr.","`id` — optional. Id such as 10.5281/zenodo.22963915.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'cpic',
		related: ["clinpgx","drug-gene"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search CPIC in Duaer', zh: '在 Duaer 里检索 CPIC' },
		lede: { en: 'In Duaer, search CPIC pharmacogenomic genes and drugs. One successful search uses 1 credit.', zh: '在 Duaer 里检索 CPIC 药物基因组基因与药物。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-cpic',
			description: 'Search CPIC pharmacogenomic genes and drugs through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer CPIC',
			call: 'GET https://api.duaer.com/v1/data/cpic?words=CYP2C19&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as CYP2C19.","`id` — optional. Id such as CYP2C19.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'osf',
		related: ["zenodo","dryad"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search OSF in Duaer', zh: '在 Duaer 里检索 OSF' },
		lede: { en: 'In Duaer, search Open Science Framework project nodes. One successful search uses 1 credit.', zh: '在 Duaer 里检索 Open Science Framework 项目节点。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-osf',
			description: 'Search Open Science Framework project nodes through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer OSF',
			call: 'GET https://api.duaer.com/v1/data/osf?words=crispr&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as crispr.","`id` — optional. Id such as bdwxr.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'ukri',
		related: ["nsf-awards","grants"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search UKRI in Duaer', zh: '在 Duaer 里检索 UKRI' },
		lede: { en: 'In Duaer, search UK Research and Innovation Gateway to Research projects. One successful search uses 1 credit.', zh: '在 Duaer 里检索英国 UKRI Gateway to Research 资助项目。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-ukri',
			description: 'Search UK Research and Innovation Gateway to Research projects through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer UKRI',
			call: 'GET https://api.duaer.com/v1/data/ukri?words=crispr&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as crispr.","`id` — optional. Id such as F71A563C-4DDC-4ED3-AAE2-A9D1D19618BE.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'cellosaurus',
		related: ["cell-lines","clo"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search Cellosaurus in Duaer', zh: '在 Duaer 里检索 Cellosaurus' },
		lede: { en: 'In Duaer, search the Cellosaurus cell line encyclopedia. One successful search uses 1 credit.', zh: '在 Duaer 里检索 Cellosaurus 细胞系百科。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-cellosaurus',
			description: 'Search the Cellosaurus cell line encyclopedia through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer Cellosaurus',
			call: 'GET https://api.duaer.com/v1/data/cellosaurus?words=HeLa&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as HeLa.","`id` — optional. Id such as CVCL_0030.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'bindingdb',
		related: ["compounds","targets","ligands"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search BindingDB in Duaer', zh: '在 Duaer 里检索 BindingDB' },
		lede: { en: 'In Duaer, search BindingDB ligand affinities by UniProt accession. One successful search uses 1 credit.', zh: '在 Duaer 里按 UniProt 登录号检索 BindingDB 配体亲和力。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-bindingdb',
			description: 'Search BindingDB ligand affinities by UniProt accession through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer BindingDB',
			call: 'GET https://api.duaer.com/v1/data/bindingdb?words=P00533&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as P00533.","`id` — optional. Id such as P00533.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'iedb',
		related: ["proteins","assays"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search IEDB in Duaer', zh: '在 Duaer 里检索 IEDB' },
		lede: { en: 'In Duaer, search IEDB immune epitopes by peptide sequence. One successful search uses 1 credit.', zh: '在 Duaer 里按肽段序列检索 IEDB 免疫表位。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-iedb',
			description: 'Search IEDB immune epitopes by peptide sequence through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer IEDB',
			call: 'GET https://api.duaer.com/v1/data/iedb?words=SIINFEKL&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as SIINFEKL.","`id` — optional. Id such as 58560.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'maxo',
		related: ["phenotypes","mpath","obi"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search MAXO in Duaer', zh: '在 Duaer 里检索 MAXO' },
		lede: { en: 'In Duaer, search Medical Action Ontology terms in OLS. One successful search uses 1 credit.', zh: '在 Duaer 里在 OLS 检索医学行动本体（MAXO）术语。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-maxo',
			description: 'Search Medical Action Ontology terms in OLS through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer MAXO',
			call: 'GET https://api.duaer.com/v1/data/maxo?words=chemotherapy&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as chemotherapy.","`id` — optional. Id such as MAXO:0000647.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'eco',
		related: ["gene-ontology","obi"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search ECO in Duaer', zh: '在 Duaer 里检索 ECO' },
		lede: { en: 'In Duaer, search Evidence and Conclusion Ontology terms in OLS. One successful search uses 1 credit.', zh: '在 Duaer 里在 OLS 检索证据与结论本体（ECO）术语。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-eco',
			description: 'Search Evidence and Conclusion Ontology terms in OLS through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer ECO',
			call: 'GET https://api.duaer.com/v1/data/eco?words=electrophysiology&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as electrophysiology.","`id` — optional. Id such as ECO:0000164.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'rfam',
		related: ["rnacentral","genes"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search Rfam in Duaer', zh: '在 Duaer 里检索 Rfam' },
		lede: { en: 'In Duaer, search Rfam RNA families by name or accession. One successful search uses 1 credit.', zh: '在 Duaer 里按名称或登录号检索 Rfam RNA 家族。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-rfam',
			description: 'Search Rfam RNA families by name or accession through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer Rfam',
			call: 'GET https://api.duaer.com/v1/data/rfam?words=tRNA&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as tRNA.","`id` — optional. Id such as RF00005.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'checklistbank',
		related: ["organisms","ncbi-taxon","gbif"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search ChecklistBank in Duaer', zh: '在 Duaer 里检索 ChecklistBank' },
		lede: { en: 'In Duaer, search Catalogue of Life names in ChecklistBank. One successful search uses 1 credit.', zh: '在 Duaer 里在 ChecklistBank 检索名录生命（Catalogue of Life）名称。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-checklistbank',
			description: 'Search Catalogue of Life names in ChecklistBank through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer ChecklistBank',
			call: 'GET https://api.duaer.com/v1/data/checklistbank?words=Homo%20sapiens&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as Homo sapiens.","`id` — optional. Id such as 636X2.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'togovar',
		related: ["variants","dbsnp","clinvar"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search TogoVar in Duaer', zh: '在 Duaer 里检索 TogoVar' },
		lede: { en: 'In Duaer, search TogoVar Japanese genome variants by rsID or gene. One successful search uses 1 credit.', zh: '在 Duaer 里按 rsID 或基因检索 TogoVar 日本基因组变异。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-togovar',
			description: 'Search TogoVar Japanese genome variants by rsID or gene through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer TogoVar',
			call: 'GET https://api.duaer.com/v1/data/togovar?words=rs671&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as rs671.","`id` — optional. Id such as tgv47264307.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'pubmed',
		related: ["papers","europe-pmc","preprints"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search PubMed in Duaer', zh: '在 Duaer 里检索 PubMed' },
		lede: { en: 'In Duaer, search PubMed literature via NCBI E-utilities. One successful search uses 1 credit.', zh: '在 Duaer 里通过 NCBI E-utilities 检索 PubMed 文献。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-pubmed',
			description: 'Search PubMed literature via NCBI E-utilities through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer PubMed',
			call: 'GET https://api.duaer.com/v1/data/pubmed?words=BRCA1%20breast%20cancer&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as BRCA1 breast cancer.","`id` — optional. Id such as 23193287.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'peco',
		related: ["envo","po","to"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search PECO in Duaer', zh: '在 Duaer 里检索 PECO' },
		lede: { en: 'In Duaer, search Plant Experimental Conditions Ontology terms in OLS. One successful search uses 1 credit.', zh: '在 Duaer 里在 OLS 检索植物实验条件本体（PECO）术语。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-peco',
			description: 'Search Plant Experimental Conditions Ontology terms in OLS through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer PECO',
			call: 'GET https://api.duaer.com/v1/data/peco?words=drought&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as drought.","`id` — optional. Id such as PECO:0007008.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'nbo',
		related: ["phenotypes","mp"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search NBO in Duaer', zh: '在 Duaer 里检索 NBO' },
		lede: { en: 'In Duaer, search Neuro Behavior Ontology terms in OLS. One successful search uses 1 credit.', zh: '在 Duaer 里在 OLS 检索神经行为本体（NBO）术语。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-nbo',
			description: 'Search Neuro Behavior Ontology terms in OLS through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer NBO',
			call: 'GET https://api.duaer.com/v1/data/nbo?words=anxiety&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as anxiety.","`id` — optional. Id such as NBO:0000010.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'geno',
		related: ["sequence-ontology","variants"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search GENO in Duaer', zh: '在 Duaer 里检索 GENO' },
		lede: { en: 'In Duaer, search Genotype Ontology terms in OLS. One successful search uses 1 credit.', zh: '在 Duaer 里在 OLS 检索基因型本体（GENO）术语。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-geno',
			description: 'Search Genotype Ontology terms in OLS through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer GENO',
			call: 'GET https://api.duaer.com/v1/data/geno?words=genotype&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as genotype.","`id` — optional. Id such as GENO:0000000.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'symp',
		related: ["phenotypes","diseases"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search SYMP in Duaer', zh: '在 Duaer 里检索 SYMP' },
		lede: { en: 'In Duaer, search Symptom Ontology terms in OLS. One successful search uses 1 credit.', zh: '在 Duaer 里在 OLS 检索症状本体（SYMP）术语。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-symp',
			description: 'Search Symptom Ontology terms in OLS through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer SYMP',
			call: 'GET https://api.duaer.com/v1/data/symp?words=fever&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as fever.","`id` — optional. Id such as SYMP:0000001.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'upheno',
		related: ["phenotypes","mondo"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search uPheno in Duaer', zh: '在 Duaer 里检索 uPheno' },
		lede: { en: 'In Duaer, search Unified Phenotype Ontology terms in OLS. One successful search uses 1 credit.', zh: '在 Duaer 里在 OLS 检索统一表型本体（uPheno）术语。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-upheno',
			description: 'Search Unified Phenotype Ontology terms in OLS through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer uPheno',
			call: 'GET https://api.duaer.com/v1/data/upheno?words=abnormal&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as abnormal.","`id` — optional. Id such as UPHENO:0001001.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'fma',
		related: ["uberon","cell-ontology"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search FMA in Duaer', zh: '在 Duaer 里检索 FMA' },
		lede: { en: 'In Duaer, search Foundational Model of Anatomy terms in OLS. One successful search uses 1 credit.', zh: '在 Duaer 里在 OLS 检索解剖学基础模型（FMA）术语。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-fma',
			description: 'Search Foundational Model of Anatomy terms in OLS through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer FMA',
			call: 'GET https://api.duaer.com/v1/data/fma?words=heart&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as heart.","`id` — optional. Id such as FMA:7088.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'loinc',
		related: ["rxnorm","icd10"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search LOINC in Duaer', zh: '在 Duaer 里检索 LOINC' },
		lede: { en: 'In Duaer, search LOINC laboratory and clinical terms in OLS. One successful search uses 1 credit.', zh: '在 Duaer 里在 OLS 检索 LOINC 检验与临床术语。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-loinc',
			description: 'Search LOINC laboratory and clinical terms in OLS through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer LOINC',
			call: 'GET https://api.duaer.com/v1/data/loinc?words=glucose&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as glucose.","`id` — optional. Id such as LOINC:2345-7.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'core',
		related: ["papers","pubmed","europe-pmc"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search CORE in Duaer', zh: '在 Duaer 里检索 CORE' },
		lede: { en: 'In Duaer, search open-access research works in CORE. One successful search uses 1 credit.', zh: '在 Duaer 里在 CORE 检索开放获取研究文献。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-core',
			description: 'Search open-access research works in CORE through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer CORE',
			call: 'GET https://api.duaer.com/v1/data/core?words=crispr&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as crispr.","`id` — optional. Id such as 13120640.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'opentree',
		related: ["organisms","ncbi-taxon","checklistbank"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search Open Tree in Duaer', zh: '在 Duaer 里检索 Open Tree' },
		lede: { en: 'In Duaer, match scientific names in Open Tree of Life. One successful search uses 1 credit.', zh: '在 Duaer 里在 Open Tree of Life 匹配学名。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-opentree',
			description: 'Match scientific names in Open Tree of Life through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer Open Tree',
			call: 'GET https://api.duaer.com/v1/data/opentree?words=Homo%20sapiens&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as Homo sapiens.","`id` — optional. Id such as 770315.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'europe-pmc-annotations',
		related: ["europe-pmc","pubmed","papers"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search Europe PMC Annotations in Duaer', zh: '在 Duaer 里检索 Europe PMC Annotations' },
		lede: { en: 'In Duaer, fetch Europe PMC text-mined annotations for a PubMed or PMC article. One successful search uses 1 credit.', zh: '在 Duaer 里按 PubMed/PMC 文章编号取 Europe PMC 文本挖掘标注。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-europe-pmc-annotations',
			description: 'Fetch Europe PMC text-mined annotations for a PubMed or PMC article through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer Europe PMC Annotations',
			call: 'GET https://api.duaer.com/v1/data/europe-pmc-annotations?words=23193287&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as 23193287.","`id` — optional. Id such as PMC3531190.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'bigg',
		related: ["metabolites","reactions","kegg"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search BiGG in Duaer', zh: '在 Duaer 里检索 BiGG' },
		lede: { en: 'In Duaer, search BiGG Models metabolites, genes, and genome-scale models. One successful search uses 1 credit.', zh: '在 Duaer 里在 BiGG Models 检索代谢物、基因与基因组规模模型。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-bigg',
			description: 'Search BiGG Models metabolites, genes, and genome-scale models through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer BiGG',
			call: 'GET https://api.duaer.com/v1/data/bigg?words=glucose&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as glucose.","`id` — optional. Id such as glc__D.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'gnomad',
		related: ["variants","clinvar","dbsnp"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search gnomAD in Duaer', zh: '在 Duaer 里检索 gnomAD' },
		lede: { en: 'In Duaer, look up a gene symbol in gnomAD (GRCh38). One successful search uses 1 credit.', zh: '在 Duaer 里在 gnomAD（GRCh38）按基因符号查询。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-gnomad',
			description: 'Look up a gene symbol in gnomAD (GRCh38) through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer gnomAD',
			call: 'GET https://api.duaer.com/v1/data/gnomad?words=PCSK9&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as PCSK9.","`id` — optional. Id such as BRCA1.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'mirna',
		related: ["rnacentral","rfam","genes"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search miRNA in Duaer', zh: '在 Duaer 里检索 miRNA' },
		lede: { en: 'In Duaer, search microRNA entries in RNAcentral. One successful search uses 1 credit.', zh: '在 Duaer 里在 RNAcentral 检索 microRNA 条目。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-mirna',
			description: 'Search microRNA entries in RNAcentral through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer miRNA',
			call: 'GET https://api.duaer.com/v1/data/mirna?words=hsa-miR-21&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as hsa-miR-21.","`id` — optional. Id such as URS000075C808.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'humanmine',
		related: ["genes","proteins","monarch"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search HumanMine in Duaer', zh: '在 Duaer 里检索 HumanMine' },
		lede: { en: 'In Duaer, search human genes and related entities in HumanMine. One successful search uses 1 credit.', zh: '在 Duaer 里在 HumanMine 检索人类基因及相关实体。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-humanmine',
			description: 'Search human genes and related entities in HumanMine through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer HumanMine',
			call: 'GET https://api.duaer.com/v1/data/humanmine?words=BRCA1&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as BRCA1.","`id` — optional. Id such as 1205471.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'regulomedb',
		related: ["variants","dbsnp","encode"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search RegulomeDB in Duaer', zh: '在 Duaer 里检索 RegulomeDB' },
		lede: { en: 'In Duaer, score regulatory evidence for a variant in RegulomeDB. One successful search uses 1 credit.', zh: '在 Duaer 里在 RegulomeDB 评分变异的调控证据。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-regulomedb',
			description: 'Score regulatory evidence for a variant in RegulomeDB through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer RegulomeDB',
			call: 'GET https://api.duaer.com/v1/data/regulomedb?words=rs33980857&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as rs33980857.","`id` — optional. Id such as chr1:1000205-1000205.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},


	{
		slug: 'civic',
		related: ["variants","clinvar","gwas"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search CIViC in Duaer', zh: '在 Duaer 里检索 CIViC' },
		lede: { en: 'In Duaer, search clinical interpretation features in CIViC. One successful search uses 1 credit.', zh: '在 Duaer 里在 CIViC 搜索临床解读特征。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-civic',
			description: 'Search clinical interpretation features in CIViC through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer CIViC',
			call: 'GET https://api.duaer.com/v1/data/civic?words=BRAF&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as BRAF.","`id` — optional. Feature name such as BRAF.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'omicsdi',
		related: ["geo","pride","expression-atlas"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search OmicsDI in Duaer', zh: '在 Duaer 里检索 OmicsDI' },
		lede: { en: 'In Duaer, search multi-omics datasets in OmicsDI. One successful search uses 1 credit.', zh: '在 Duaer 里在 OmicsDI 搜索多组学数据集。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-omicsdi',
			description: 'Search multi-omics datasets in OmicsDI through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer OmicsDI',
			call: 'GET https://api.duaer.com/v1/data/omicsdi?words=BRCA1&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as BRCA1.","`id` — optional. Dataset id such as MTBLS12109.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'gtex-expression',
		related: ["gtex-eqtl","expression","atlas"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search GTEx expression in Duaer', zh: '在 Duaer 里检索 GTEx expression' },
		lede: { en: 'In Duaer, look up GTEx median tissue expression for a gene. One successful search uses 1 credit.', zh: '在 Duaer 里查询基因在 GTEx 各组织的中位表达。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-gtex-expression',
			description: 'Look up GTEx median tissue expression for a gene through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer GTEx expression',
			call: 'GET https://api.duaer.com/v1/data/gtex-expression?words=BRCA1&limit=10',
			fields: ["Provide `words` or `id`.","`words` — gene symbol, such as BRCA1.","`id` — optional. Gencode id such as ENSG00000012048.20.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'biomodels',
		related: ["pathways","reactions","bigg"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search BioModels in Duaer', zh: '在 Duaer 里检索 BioModels' },
		lede: { en: 'In Duaer, search systems biology models in EBI BioModels. One successful search uses 1 credit.', zh: '在 Duaer 里在 EBI BioModels 搜索系统生物学模型。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-biomodels',
			description: 'Search systems biology models in EBI BioModels through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer BioModels',
			call: 'GET https://api.duaer.com/v1/data/biomodels?words=apoptosis&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as apoptosis.","`id` — optional. Model id such as BIOMD0000000001.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},

	{
		slug: 'ot-drugs',
		related: ["targets","chembl","drug-gene"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search Open Targets drugs in Duaer', zh: '在 Duaer 里检索 Open Targets drugs' },
		lede: { en: 'In Duaer, search drug entities in Open Targets. One successful search uses 1 credit.', zh: '在 Duaer 里在 Open Targets 搜索药物实体。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-ot-drugs',
			description: 'Search drug entities in Open Targets through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer Open Targets drugs',
			call: 'GET https://api.duaer.com/v1/data/ot-drugs?words=imatinib&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as imatinib.","`id` — optional. ChEMBL id such as CHEMBL941.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},


	{
		slug: 'wikipathways',
		related: ["pathways","reactome","kegg"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search WikiPathways in Duaer', zh: '在 Duaer 里检索 WikiPathways' },
		lede: { en: 'In Duaer, search community pathways in WikiPathways. One successful search uses 1 credit.', zh: '在 Duaer 里在 WikiPathways 搜索社区通路。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-wikipathways',
			description: 'Search community pathways in WikiPathways through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer WikiPathways',
			call: 'GET https://api.duaer.com/v1/data/wikipathways?words=apoptosis&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as apoptosis.","`id` — optional. Pathway id such as WP254.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},
	{
		slug: 'panelapp',
		related: ["genes","clinvar","civic"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search PanelApp in Duaer', zh: '在 Duaer 里检索 PanelApp' },
		lede: { en: 'In Duaer, search gene panels in Genomics England PanelApp. One successful search uses 1 credit.', zh: '在 Duaer 里在 Genomics England PanelApp 搜索基因面板。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-panelapp',
			description: 'Search gene panels in Genomics England PanelApp through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer PanelApp',
			call: 'GET https://api.duaer.com/v1/data/panelapp?words=BRCA1&limit=10',
			fields: ["Provide `words` or `id`.","`words` — gene symbol, such as BRCA1.","`id` — optional. Gene symbol such as BRCA1.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},
	{
		slug: 'goa',
		related: ["gene-ontology","proteins","genes"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search GO annotations in Duaer', zh: '在 Duaer 里检索 GO 注释' },
		lede: { en: 'In Duaer, look up GO annotations for a gene product. One successful search uses 1 credit.', zh: '在 Duaer 里查询基因产物的 GO 注释。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-goa',
			description: 'Look up GO annotations for a gene product through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer GO annotations',
			call: 'GET https://api.duaer.com/v1/data/goa?words=BRCA1&limit=10',
			fields: ["Provide `words` or `id`.","`words` — gene symbol or UniProt accession, such as BRCA1.","`id` — optional. UniProt accession such as P38398.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},
	{
		slug: 'pubchem-assay',
		related: ["assays","compounds","chembl"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search PubChem Assay in Duaer', zh: '在 Duaer 里检索 PubChem Assay' },
		lede: { en: 'In Duaer, list PubChem BioAssays for a gene. One successful search uses 1 credit.', zh: '在 Duaer 里列出基因相关的 PubChem BioAssay。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-pubchem-assay',
			description: 'List PubChem BioAssays for a gene through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer PubChem Assay',
			call: 'GET https://api.duaer.com/v1/data/pubchem-assay?words=BRCA1&limit=10',
			fields: ["Provide `words` or `id`.","`words` — gene symbol, such as BRCA1.","`id` — optional. NCBI Gene id such as 672.","`limit` — optional. From 1 to 20. Default 10."],
		}),
	},
	{
		slug: 'massive',
		related: ["pride","proteomexchange","proteins"],
		type: { en: 'Data', zh: '数据' },
		title: { en: 'Search MassIVE in Duaer', zh: '在 Duaer 里检索 MassIVE' },
		lede: { en: 'In Duaer, search proteomics datasets in MassIVE. One successful search uses 1 credit.', zh: '在 Duaer 里在 MassIVE 搜索蛋白质组学数据集。一次成功查询用 1 额度。' },
		returns: { en: 'Each row has an id, label, and description when present.', zh: '每条结果有编号、名称与描述。' },
		skill: skill({
			name: 'duaer-massive',
			description: 'Search proteomics datasets in MassIVE through Duaer. One successful search uses 1 Duaer credit.',
			title: 'Duaer MassIVE',
			call: 'GET https://api.duaer.com/v1/data/massive?words=BRCA1&limit=10',
			fields: ["Provide `words` or `id`.","`words` — search words, such as BRCA1.","`id` — optional. Accession such as MSV000065795.","`limit` — optional. From 1 to 20. Default 10."],
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


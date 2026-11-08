# Cryptography and Linguistic Structure Behind the Postcard and Dream Diary Theories

## Purpose

This document defines the technical foundation for the Voynich Praxis theories called **The Postcard** and **The Dream Diary**. It does not claim that either theory has been proven, and it does not present a decipherment of the Voynich Manuscript. Instead, it asks a narrower question:

> What observable properties of the manuscript’s writing, page structure, and illustrations could support the idea that the codex is a selective transmission from a world, a diary of experienced realities, or both?

The working synthesis is **The Postcard from the Dream**: a notebook of selected observations sent outward to a reader who may possess some of the missing context. In this model, the word *postcard* describes the communicative direction of the pages, while *dream diary* describes the possible mode of experience from which the pages were made. Neither word should be mistaken for a historical identification of the manuscript’s genre.

## Evidence status and vocabulary

Several distinctions are essential:

- **Established observation** means that a feature can be inspected in the manuscript or in a documented transcription.
- **Statistical result** means that a study has measured a pattern in a transcription or corpus. It is evidence about organization, not a translation.
- **Cryptographic hypothesis** proposes a mechanism that transforms an underlying message into the visible script.
- **Genre hypothesis** proposes what kind of human activity produced the document: herbal, medical, astrological, ritual, notebook, correspondence, diary, fiction, or another form.
- **Interpretive lens** is a useful way of reading the material without claiming that the original maker used the same categories.

Postcard and Dream Diary are currently genre hypotheses and interpretive lenses. They become stronger only if they generate tests that distinguish them from competing explanations.

## 1. What the manuscript gives us to work with

Yale identifies Beinecke MS 408 as an illustrated codex produced in Central Europe at the end of the fifteenth or during the sixteenth century. The library describes an unidentified script, an unknown author, and six broad illustration groupings: plants; astronomical and astrological drawings; bathing or balneological scenes; cosmological medallions; pharmaceutical drawings; and text-only pages that may be recipes. [1]

A linguistic overview by Claire Bowern and Luke Lindemann describes the codex as a five-part manuscript of 116 folios, with plant pages covering more than half the work, an astral section, the unusual bathing section with figures in green water, a pharmaceutical section, and an unillustrated section divided by star-like markers. Their central claim is not that the manuscript has been deciphered, but that its higher-level organization is compatible with linguistic material and is unlikely to be explained by simple random manufacture. [2]

The physical and visual evidence therefore gives us a real object with at least four interacting layers:

1. **Material layer:** vellum, ink, pigment, binding, quire structure, missing leaves, and page order.
2. **Graphic layer:** glyph shapes, line breaks, spaces, paragraph forms, diagrams, plants, bodies, vessels, and stars.
3. **Textual layer:** repeated tokens, token positions, possible prefixes and suffixes, section distributions, and scribal variation.
4. **Experiential layer:** the reader’s reconstruction of a world from incomplete signs.

The Postcard and Dream Diary theories are specifically about the relationship between these layers. They do not require that every plant be pharmacological or that every bathing image depict a literal ritual.

## 2. The linguistic object: what is “Voynichese”?

### 2.1 Glyphs are not automatically letters

The visible script contains recurring glyph shapes, but a glyph is not necessarily a letter. One visible sign could represent:

- a single phoneme or consonant;
- a syllable;
- a word or morpheme;
- a number or category marker;
- a ligature made from several smaller signs;
- a positional variant of another sign;
- a null, filler, or formatting mark;
- a cipher symbol whose function is unrelated to sound.

For this reason, the common transliteration alphabets are analytical tools, not established readings. EVA, Currier notation, and other systems give researchers a consistent way to compare shapes. They do not tell us what the shapes sounded like or what they meant.

### 2.2 Word spaces are useful but uncertain

Researchers often treat spaces as word separators and call the resulting units *word tokens*. That allows frequency, repetition, and positional analysis. But spaces could instead divide syllables, formulaic units, encoded groups, or visual chunks. A good analysis should therefore run under more than one segmentation rule.

The distinction matters for both theories. A postcard might use compact labels or captions. A diary might use repeated formulae, remembered sounds, or entry markers. Both could produce recurring units that look like words without behaving exactly like modern words.

### 2.3 Character-level irregularity and word-level regularity

Bowern and Lindemann report an important tension: character-level measurements make the script unusual, while word- and line-level measurements are more regular and fall within the range of plausible natural-language structures. Their summary argues that the graphemes are probably not a simple one-to-one representation of sounds, while the larger writing system may still encode words in a regular orthography. [2]

This is a useful foundation for the Praxis. The manuscript may be structurally meaningful without being a straightforward substitution cipher. A system can preserve order, repetition, morphology-like patterns, and section organization while obscuring sound, language identity, or semantic categories.

## 3. The main cryptographic mechanisms to test

The theories should not assume one mechanism. The following mechanisms can be tested separately and in combination.

### 3.1 Simple substitution

A simple substitution maps each plaintext symbol to one ciphertext symbol. If the Voynich script were a direct monoalphabetic substitution, one would expect stable symbol frequencies, repeated plaintext words to remain repeated, and ordinary language statistics to survive in recognizable ways.

Problems for a simple substitution include the manuscript’s unusual character behavior, the uncertainty about what counts as a symbol, and the possibility that several visible signs are ligatures. A failed simple substitution does not show that the manuscript has no language. It only rejects one narrow mechanism.

### 3.2 Homophonic substitution

A homophonic system allows several ciphertext symbols to represent the same plaintext symbol. This can flatten frequency patterns and make ordinary frequency analysis less effective. It is historically plausible in some cryptographic settings, but it adds degrees of freedom and can be made to fit many outcomes.

For the Postcard theory, homophony could allow short labels or key terms to be concealed from an unintended reader. For the Dream Diary theory, it could represent different remembered sounds or writing habits that converge on one underlying category.

A responsible test must compare the proposed mapping against held-out pages. A mapping that only explains the pages used to invent it is not evidence.

### 3.3 Polyalphabetic or position-dependent substitution

A polyalphabetic cipher changes the symbol mapping according to position, key, page, line, or another state. Position dependence could explain why the same visible unit behaves differently in different sections. It could also make a message appear to have multiple “languages.”

Tests should compare symbol and token behavior at several scales:

- beginning versus middle versus end of a line;
- first token versus later tokens in a paragraph;
- plant pages versus biological pages;
- Currier A-like versus Currier B-like pages;
- one scribe or hand versus another.

A true position-dependent system should produce a repeatable improvement over simpler models, not merely a plausible story after the fact.

### 3.4 Transposition

A transposition rearranges units without replacing them. A page might preserve a vocabulary while changing order, or the text might be read in a different direction, route, or grouping. The postcard idea makes transposition attractive because a postcard can be a compressed arrangement of signs whose intended reading order is not obvious.

However, transposition alone does not explain the visible word forms or repeated morphology-like patterns. It would need to work alongside a writing system or substitution mechanism.

Useful tests include:

- line-first, column-first, and block-based reading;
- circular or spiral reading around diagrams;
- reading order relative to labels and illustrations;
- whether section-specific words become more coherent under a proposed route;
- whether the route works on pages not used to discover it.

The method should penalize routes that are selected only because they produce a desired phrase.

### 3.5 Nomenclator, codebook, or mixed system

A nomenclator combines alphabetic symbols with special symbols for common words, names, syllables, or concepts. A manuscript about plants, bodies, stars, or recipes could use repeated category terms that are not ordinary grammatical words.

This mechanism fits the possibility that certain glyphs or tokens act as high-level markers. For example, a recurring form might mark a plant part, a preparation stage, a direction of flow, or a type of entry. The form would not need to translate into one English word everywhere.

A codebook hypothesis should distinguish:

- stable markers that recur across sections;
- markers whose distribution is section-specific;
- markers that occur near drawings or diagram boundaries;
- markers that combine with a small set of variable stems.

### 3.6 Ligatures and compounds

A ligature is a visible sign made by combining smaller graphemes. The PLOS One symbol study by Matlach, Janečková, and Dostál explicitly examines the possibility that some Voynich symbols are compounds or ligatures. Their results report strong autocorrelations in the reuse of many symbols and discuss a possible steganographic encoding, while leaving the underlying language undeciphered. [3]

Ligatures are especially important for the Dream Diary theory. If a visual unit compresses several elements into one sign, the script may be recording a remembered configuration rather than spelling a spoken word one phoneme at a time. The same mechanism could also support a postcard: a single compact glyph could carry a familiar bundle of information for an initiated reader.

A ligature analysis should ask whether a complex glyph can be decomposed into recurring simpler parts and whether those parts behave consistently across pages. It must also compare alternative decompositions, because visual similarity alone is not enough.

### 3.7 Steganography and nulls

Steganography hides a message inside an apparently ordinary carrier. In a manuscript, the hidden channel could involve word lengths, symbol choices, line positions, repeated intervals, colors, initials, diagram routes, or selected omissions.

A null symbol or filler could make a text look more linguistic while carrying information elsewhere. Conversely, a repeated pattern may be a formatting or mnemonic device rather than a hidden message.

Every steganographic proposal needs a pre-registered extraction rule. A rule such as “take every seventh character because it reveals a phrase” is weak unless the interval is independently motivated and works across a held-out sample.

## 4. Linguistic structure to measure

### 4.1 Token frequency and Zipf-like behavior

Frequency-rank curves are a basic diagnostic. A small number of tokens often occur frequently, while many others occur rarely. The Voynich text has been reported to show Zipf-like frequency behavior, but approximate Zipf curves can also arise in non-language systems. Frequency is evidence of organization, not a decipherment.

The correct comparison set should include:

- natural languages with comparable token counts;
- medieval Latin or vernacular texts;
- known ciphertexts;
- generated pseudo-texts;
- recipe, herbal, and astronomical texts;
- shuffled versions of the Voynich corpus.

The key question is not whether one curve resembles English. It is whether the Voynich curve, together with other independent features, is difficult to generate under competing models.

### 4.2 Repetition and autocorrelation

Repetition can reflect language, formulae, copying, meter, memory, or generation rules. Matlach and colleagues report that, for many frequently occurring Voynich symbols, reuse delays are significantly autocorrelated. In plain terms, the distance until a symbol reappears is not behaving like independent random placement. They also report significant dependencies in word lengths. [3]

This finding supports a constrained process. It does not by itself distinguish:

- a natural language;
- an encoded natural language;
- a constructed language;
- a formulaic notebook;
- a carefully generated hoax.

For the Dream Diary model, autocorrelation could indicate recurring formulae, entry rhythms, or a writer returning to familiar categories. For the Postcard model, it could indicate a compact symbolic vocabulary designed to preserve a stable set of signals across transmissions.

### 4.3 Morphology-like families

A number of studies examine repeated prefixes, suffixes, and word families in transliteration. Montemurro and Zanette found that strongly connected word clusters often show morphological similarity, including shared prefixes or suffixes, and argued that the manuscript has a strong connection between form and distribution. [4]

The safe statement is **morphology-like structure**, not confirmed morphology. A shared ending could be:

- a grammatical suffix;
- a topic or section marker;
- a cipher artifact;
- a scribal convention;
- a repeated formula;
- a visual or phonetic component in a constructed system.

To distinguish these, researchers should test whether an apparent affix changes the distribution or function of a stem in a predictable way. A real morphological system should support productive combinations, restrictions, and contrasts.

### 4.4 Section-specific vocabulary

Montemurro and Zanette used information-theoretic methods to identify words whose distributions distinguish local portions of the manuscript. They found word clusters with similar occurrence profiles and reported that the strongest links between sections included the Herbal and Pharmaceutical sections, as well as the Recipes and Astrological sections. They also observed that some textual relationships matched visual relationships between sections. [4]

This is highly relevant to both theories. It suggests that the manuscript’s text is not one undifferentiated stream. The maker may have changed vocabulary, register, code, subject, or process according to the page family.

For the Postcard theory, section-specific vocabulary can be treated as a series of specialized transmissions: botanical postcards, bodily postcards, celestial postcards, and recipe postcards. For the Dream Diary theory, it can be treated as movement between recurring dream environments or modes of attention.

The result does not prove semantic topics. A page cluster can arise from scribal variation, different plaintext sources, different cipher settings, or changes in formula.

### 4.5 Currier A and Currier B

Prescott Currier proposed two major varieties of Voynich text, called A and B. The distinction remains open: they may be languages, dialects, subject-specific registers, scribal styles, or consequences of a code. The A/B page families also correlate imperfectly with illustration sections. [5]

A careful documentation system should use **Currier A-like** and **Currier B-like** when discussing the classification, avoiding the assumption that they are proven languages. It should also record:

- page and folio;
- illustration category;
- hand or scribe evidence;
- token count;
- A/B classification;
- uncertain or mixed status;
- transcription source.

This matters to the two theories because a postcard may use different conventions for different recipients or subjects, while a diary may contain multiple hands, phases, or states of composition. A/B variation is evidence of internal differentiation, not evidence of a second reality.

### 4.6 Syntax and discourse structure

Syntax is difficult to assess without a decipherment, but researchers can still examine positional regularities. Useful questions include:

- Do certain tokens prefer line-initial or line-final positions?
- Are there recurring paragraph openings?
- Do labels use a shorter grammar than prose-like blocks?
- Are tokens copied or transformed at section boundaries?
- Do word-length sequences follow predictable patterns?
- Does a token’s position correlate with nearby images or stars?

A postcard might contain captions, labels, greetings, signatures, or compressed descriptions. A diary might contain entry markers, temporal shifts, repeated openings, and retrospective formulas. These are hypotheses about discourse function that can be tested without pretending to know the words.

## 5. The image-text relationship

### 5.1 The page as a multimodal cipher

The manuscript may not encode meaning in text alone. A page can distribute information across:

- glyph sequence;
- illustration identity or shape;
- spatial arrangement;
- color;
- repeated symbols;
- diagram geometry;
- page order;
- material features;
- omission.

This is where the postcard and Dream Diary theories depart from a narrow cryptographic model. A postcard often depends on image plus a short textual message. A diary can preserve images that stand for experiences too difficult to narrate linearly.

The correct unit of analysis may therefore be the **folio event**, not the isolated word. Each folio event should combine page metadata, transcription, image motifs, layout, and uncertainty notes.

### 5.2 Plants

The herbal pages often place one large plant image beside or among paragraphs of text. This is compatible with a botanical manual, an herbal recipe book, a symbolic catalogue, a memory aid, or a postcard-like page that uses one plant as a world-sign.

A testable approach is to annotate plant features without assigning a meaning too early:

- root form;
- stem branching;
- leaf arrangement;
- flower shape and color;
- unusual anatomical exaggeration;
- text placement;
- repeated labels or token families;
- similarity to other folios.

### 5.3 Bodies, baths, and channels

The bathing or biological folios contain figures, containers, channels, and green environments. These can support readings involving anatomy, women’s health, bathing, fertility, cosmology, ritual, or transformation. No single label is secure merely from visual resemblance.

For the Dream Diary theory, these pages are candidate records of embodied experience. For the Postcard theory, they are compressed diagrams that may assume the reader already understands the system. The discriminating evidence would be sequence, repeated roles, consistent directionality, and textual changes tied to image changes.

### 5.4 Stars and rosettes

Star-like markers and large cosmological diagrams can be treated as section markers, calendar signs, route diagrams, mandalas, maps, or memory architectures. The Postcard reading asks whether they function as orientation devices for a distant reader. The Dream Diary reading asks whether they encode transitions between experiential states.

A useful test is to compare the text around star-marked entries with unmarked entries. If the stars consistently predict a textual or visual change, they may have a discourse function. If not, they may be decorative, mnemonic, or part of another code.

## 6. How the mechanisms support the two theories

### 6.1 Postcard theory

The Postcard theory predicts a manuscript that is selective, structured, and recipient-aware. Its strongest technical expectations are:

1. **Compression:** pages should preserve high-information signs while omitting ordinary connective material.
2. **Stable motifs:** key images, tokens, or formulae should recur across transmissions.
3. **Local readability:** a reader with the correct context should gain more from the image-text combination than an outsider.
4. **Section registers:** different page families may use different vocabularies or code settings.
5. **Address or orientation signals:** page openings, stars, labels, or diagrams may mark how an entry is to be read.
6. **Cross-modal redundancy:** an important concept may appear through a token family plus a visual motif rather than through words alone.

The theory becomes weaker if the manuscript is equally dense and repetitive in every context, contains no stable page-level communicative functions, and shows no meaningful relationship between text and illustration beyond decoration.

### 6.2 Dream Diary theory

The Dream Diary theory predicts a manuscript that is sequential, recurrent, embodied, and organized around remembered states. Its strongest technical expectations are:

1. **Recurrence with variation:** similar scenes or concepts should return with small changes.
2. **State transitions:** page order or section changes should correspond to shifts in imagery, vocabulary, or token behavior.
3. **First-person traces without readable pronouns:** repeated openings, temporal markers, or formulae may function as diary scaffolding even if the language is unknown.
4. **Compression of experience:** diagrams and plants may preserve configurations or sensations rather than ordinary descriptive categories.
5. **Nonlinear structure:** motifs may return in cycles rather than proceeding as a linear manual.
6. **Layered composition:** differences between hands, inks, page families, or vocabulary may reflect phases of recording or later additions.

The theory becomes weaker if the manuscript behaves exactly like a conventional copied reference text, has no sequential or recurrent transitions, and shows no evidence of personal or episodic organization beyond the reader’s projection.

### 6.3 The combined Postcard from the Dream

The synthesis predicts a document with two simultaneous functions:

- it preserves a private experience;
- it selects enough signs for someone else to reconstruct that experience.

This model explains why the manuscript could look both intimate and systematic. A diary can become a transmission when it is written for a future reader, an initiate, a family, a community, or the maker’s future self. A postcard can contain dream-like imagery when the sender is communicating a world that ordinary language cannot fully carry.

The synthesis should not be used as a universal explanation. It must still face competing models such as a medical compendium, an encoded natural-language text, a constructed language, a mnemonic system, or generated pseudo-text.

## 7. A reproducible research pipeline

### Step 1: Freeze the corpus

Use a named transcription version and record its provenance. Store both EVA-style and Currier-style representations when possible. Never silently normalize uncertain glyphs.

Recommended fields:

```text
folio
page_side
quire
line_number
character_offset
transcription_system
glyph_string
token_string
uncertainty_flags
illustration_section
currier_family
hand_or_scribe_note
image_reference
```

### Step 2: Preserve multiple segmentations

Create at least three parallel tokenizations:

1. spaces as word boundaries;
2. conservative boundaries that preserve uncertain spaces;
3. character or glyph n-grams that do not assume wordhood.

This prevents a conclusion from depending entirely on one uncertain editorial decision.

### Step 3: Build page-level metadata

Link every token to its folio, illustration family, position in line, paragraph, and page. For foldouts and diagrams, record spatial regions rather than forcing everything into linear text.

### Step 4: Measure baseline structure

Calculate:

- token and type counts;
- frequency-rank curves;
- hapax proportion;
- repeated-token intervals;
- character and token entropy;
- word-length distribution;
- line-length distribution;
- positional preferences;
- section-specific vocabulary;
- cross-page similarity;
- prefix and suffix-like families.

### Step 5: Compare competing generators

Generate matched comparison corpora from:

- natural-language samples;
- known medieval texts;
- monoalphabetic and homophonic ciphers;
- polyalphabetic ciphers;
- transposition systems;
- constructed languages;
- formulaic notebooks;
- pseudo-text generators;
- shuffled Voynich controls.

The goal is not to find one matching curve. It is to identify combinations of features that the competing models cannot reproduce simultaneously.

### Step 6: Test image-text coupling

Use blinded annotation where possible. Have annotators label plant, body, vessel, star, circle, channel, and diagram features without seeing token statistics. Then test whether token families, line positions, or page clusters predict those labels better than shuffled controls.

### Step 7: Test theory-specific predictions

For the Postcard theory, test compression, stable signs, recipient-like orientation markers, and image-text redundancy.

For the Dream Diary theory, test recurrence with variation, transitions across page order, entry-like markers, and cross-modal motifs that return in altered form.

For the combined theory, test whether the manuscript has both stable outward-facing sign systems and sequential or episodic variation.

### Step 8: Hold out pages

Every proposed key, cipher, ligature decomposition, or semantic association must be tested on pages not used to construct it. Report false positives and failed pages, not only successful readings.

## 8. What would count as meaningful progress?

A meaningful result would not be a single English word found by a flexible extraction rule. Stronger progress would look like:

- a mechanism that predicts unseen glyph or token behavior;
- a segmentation that improves multiple independent linguistic tests;
- a stable distinction between page families that survives transcription variants;
- a cipher model that explains both local and long-range structure;
- a repeated text-image relationship that survives blinded annotation;
- a page sequence model that predicts motif recurrence and variation;
- a translation that preserves grammar, vocabulary, and image relationships across many folios.

A weaker result would include isolated plant-name matches, visual resemblances without statistical testing, or a phrase extracted after trying many routes.

## 9. Current interpretation

The strongest current claim is modest:

> The Voynich Manuscript contains substantial organization at the glyph, token, line, page, section, and image-text levels. That organization is compatible with a meaningful writing system or constrained encoding, but it does not identify the language, plaintext, author, or genre.

The Postcard theory uses this organization to imagine selected transmissions from a larger world. The Dream Diary theory uses it to imagine a record of recurring experiences, states, or memories. The combined theory asks whether a private record can also be a deliberate message.

The Praxis should keep both possibilities open. It should read the manuscript as a **multimodal language event**, preserve anomalies before classifying them, and distinguish what the data shows from what the story allows us to imagine.

## 10. Entropy comparisons: Voynichese and the two models

### 10.1 What entropy measures

Entropy measures uncertainty in a distribution. For a set of symbols with probabilities \(p(x)\), first-order entropy is:

```text
H1 = -Σ p(x) log2 p(x)
```

For text, \(x\) might be a glyph, a token, a line type, or a section label. A conditional entropy asks how uncertain the next unit remains after the previous unit is known:

```text
H2 = -Σ p(x, y) log2 p(y | x)
```

At the character level, a low H2 means that the next character is unusually predictable from the preceding character. This can result from ordinary language structure, a small or restricted script, abbreviations, a cipher, a constructed language, or a transcription convention. Entropy is therefore a measurement of predictability, not a direct measurement of meaning.

### 10.2 Published Voynich comparison

Lindemann and Bowern built a Voynich corpus partitioned by Currier language, scribal hand, and transcription system, alongside 311 Wikipedia language samples and eighteen historical texts in eight languages. Their study reports that Voynichese has unusually low conditional character entropy compared with the comparison corpus. In their updated results, the Minimal Voynich transcription averaged approximately **2.48 bits**, while the fuller transcription averaged approximately **2.11 bits**. The Wikipedia comparison range was approximately **2.77–6.14 bits**. [7]

The authors emphasize that these values depend on script conventions, character-set size, document length, abbreviations, and the encoding process. They also report that the A and B varieties are similar at the character level but differ at the word level. In particular, the `-edy` ending is much more common in B, and the `qo-` beginning is also more common in B. Removing those sequences brings the A and B H2 values to within about one percent of each other. [7]

The result gives the Postcard and Dream Diary theories a measurable starting point:

> The visible script is not behaving like an unconstrained stream of marks. Its next-character choices are unusually restricted, but the source of that restriction remains open.

This observation is compatible with a meaningful language, an encoded language, a constructed system, a formulaic notebook, or another constrained process. It does not establish that the pages are postcards or dreams.

### 10.3 The comparison problem

There are no historical documents labeled “Postcard theory” or “Dream Diary theory” from which we can calculate an authentic model entropy. We must not fabricate a number and call it the entropy of the theory. Instead, the theories define **model families** whose entropy profiles can be generated from controlled corpora.

The correct comparison has three layers:

1. **Observed manuscript:** measure the actual transcription under clearly stated normalization and segmentation rules.
2. **Mechanism controls:** generate known-language ciphers, shuffled texts, formulaic notebooks, and multimodal label systems under matched length and symbol inventories.
3. **Theory models:** construct explicit Postcard and Dream Diary corpora with rules stated before measurement.

The theories should be compared not only by a single H2 score, but by a vector of entropy and organization measures:

```text
E = [character H1, character H2, token H1, token H2,
     word-length entropy, section entropy, positional entropy,
     image-linked entropy, transition entropy]
```

Two models that share the same character H2 may still differ strongly in section, positional, or image-linked entropy.

### 10.4 Expected entropy signatures

The table below gives predictions to test. It does not report historical measurements for the theories.

| Layer | Voynich observation to measure | Postcard model prediction | Dream Diary model prediction |
|---|---|---|---|
| Character H2 | Published value is unusually low | Low to moderate: a compact sign system may reuse a stable vocabulary across transmissions | Low to moderate: recurring memory formulas may constrain local choices, with more variation at transitions |
| Token H1 | Frequency and type distribution in the transcription | A small set of high-value signs plus local topic vocabulary; entropy may fall within postcard clusters | Recurrent motifs with a larger long tail of episodic or altered forms |
| Token H2 | Predictability of one token from the preceding token | Higher predictability near labels, markers, greetings, and formulaic closures | Higher predictability inside remembered sequences but possible shifts at dream/state boundaries |
| Word-length entropy | Length distribution and sequential dependence | Short, compressed labels and formulae should create low entropy in marked positions | Entry openings and refrains may be stable while experiential descriptions vary in length |
| Section entropy | Vocabulary specificity across page families | Strong register changes between botanical, bodily, celestial, and recipe postcards | State or scene changes may create clusters that do not align perfectly with illustration categories |
| Positional entropy | Token behavior by line and paragraph position | Orientation markers should have low positional entropy at predictable page locations | Diary openings, returns, and transitions should recur at sequence boundaries |
| Image-linked entropy | Text uncertainty conditioned on image motifs | A plant, star, or vessel may reduce uncertainty by acting as a recipient-facing key | A motif may reduce uncertainty within a recurring scene while allowing its interpretation to change |
| Transition entropy | Change from one folio or section to the next | Lower entropy between related transmissions; deliberate jumps may mark a new message | Higher transition entropy at experiential shifts, with recurring motifs acting as bridges |

The important difference is not simply “Postcard equals low entropy” and “Dream Diary equals high entropy.” Both models can contain repetition and variation. The distinction is where predictability is located: the Postcard model predicts stable communicative markers and compressed topic registers, while the Dream Diary model predicts recurrent motifs plus state-dependent transitions.

### 10.5 Model definitions for reproducible testing

#### Postcard model P0: selected transmission

Construct a corpus of short entries. Each entry contains:

1. an orientation marker;
2. one or more stable motifs;
3. a compressed image-linked description;
4. an optional recipient or closure marker;
5. omitted connective material.

The model should vary the local topic while preserving the marker inventory. Its expected signature is lower entropy at entry boundaries and higher section or motif specificity than in a uniformly distributed text.

#### Postcard model P1: multimodal postcard

Add an image label to each entry and allow some information to be carried only by the image. Measure text entropy alone, then conditional text entropy given the image label:

```text
ΔH_image = H(text) - H(text | image motif)
```

A positive and reproducible \(ΔH_image\) would mean that image context reduces textual uncertainty. This would not prove the historical manuscript is a postcard, but it would operationalize the theory’s claim that image and text work together.

#### Dream Diary model D0: recurrent state record

Construct a sequential corpus with a small set of recurring states or scenes. Each state has:

1. a recurrence marker;
2. a flexible set of sensory or visual details;
3. transition formulas between states;
4. repeated motifs that return with altered combinations.

The expected signature is low entropy within recurring state clusters and higher transition entropy at state changes. The model should not be allowed to use arbitrary randomness; the state rules must be declared before measuring the result.

#### Dream Diary model D1: layered notebook

Add multiple writing phases or hands. Each phase may favor a different token family or register while sharing a core motif vocabulary. Compare within-phase entropy, between-phase entropy, and motif persistence.

This model connects to Currier A/B without assuming that A and B are literally two languages. A similar statistical split could result from different scribes, different subjects, different cipher settings, or different stages of composition.

### 10.6 Tests that can distinguish the models

#### Test A: boundary entropy

Measure character, token, and word-length entropy in the first, middle, and final portions of paragraphs and folios. The Postcard model predicts special behavior around entry openings and closures. The Dream Diary model predicts special behavior around recurrence and transition boundaries.

#### Test B: image-conditioned entropy

Blindly annotate folios for plant, body, star, vessel, and diagram motifs. Calculate whether the presence of a motif changes token uncertainty. Compare against shuffled image labels and page-order controls.

#### Test C: recurrence with variation

Cluster similar folios or token sequences. Measure whether repeated clusters are exact copies, near copies, or transformed returns. Exact copying favors copying or formula; structured variation is more compatible with an episodic or state-based record.

#### Test D: section-register stability

Calculate the divergence between token distributions in page families. A stable Postcard register should remain recognizable across separated transmissions. A Dream Diary state should recur even when it appears in a different visual section.

#### Test E: held-out cipher prediction

Fit any proposed substitution, ligature, or positional model on one group of folios and test it on another. Record the change in entropy and predictive accuracy. A model that only lowers entropy on its training pages is overfit.

#### Test F: shuffled and generated controls

Compare the manuscript to:

- token-shuffled pages;
- character-shuffled pages preserving word lengths;
- known plaintexts encrypted by candidate ciphers;
- formulaic recipe and notebook texts;
- P0/P1 postcard corpora;
- D0/D1 diary corpora.

The goal is to determine which combination of statistics is unusual, not to force one score to choose a theory.

### 10.7 Interpretation rules

The following rules protect the analysis from turning entropy into a new form of overconfidence:

1. Never compare values produced by different transcription conventions without recording the difference.
2. Never treat low entropy as proof of language, cipher, dream, or postcard.
3. Report confidence intervals or bootstrap ranges when corpus size permits.
4. Use the same tokenization, sample length, and alphabet policy across controls.
5. Separate discovery data from held-out evaluation data.
6. Publish failed model predictions alongside successful ones.
7. Preserve image context rather than flattening every folio into a character string.

The most valuable outcome would be a profile in which the manuscript’s entropy signature is difficult for ordinary ciphers, ordinary notebooks, and arbitrary pseudo-text to reproduce, while one or more multimodal models explain both the textual and visual organization. Even then, the result would support a model of composition, not prove what the author believed.

### 10.8 Current conclusion

The entropy evidence tells us that Voynichese is unusually predictable at the character level and meaningfully organized at larger scales. That makes the manuscript a constrained communication system worth studying. It does not tell us whether the sender was writing a medical work, a cipher, a constructed language, a private diary, a message to an initiate, or a postcard from another reality.

The Postcard theory predicts **stable signs selected for transmission**. The Dream Diary theory predicts **recurrent signs transformed by remembered state**. Their shared prediction is that the manuscript’s order is not accidental. The next step is not to announce a winner, but to build the two corpora, measure their entropy vectors, and see which one survives contact with unseen folios.

## References

[1]: https://beinecke.library.yale.edu/beinecke/collections/beinecke-cipher-voynich-manuscript "The Beinecke Cipher Voynich Manuscript Yale Library"
[2]: https://alumniacademy.yale.edu/sites/default/files/2021-07/The%20Linguistics%20of%20the%20Voynich%20Manuscript.pdf "The Linguistics of the Voynich Manuscript"
[3]: https://pmc.ncbi.nlm.nih.gov/articles/PMC8794160/ "The Voynich manuscript Symbol roles revisited"
[4]: https://pmc.ncbi.nlm.nih.gov/articles/PMC3689824/ "Keywords and Co-Occurrence Patterns in the Voynich Manuscript An Information-Theoretic Analysis"
[5]: https://www.voynich.nu/extra/lang.html "Currier A and B Two different languages"
[6]: https://www.voynich.nu/illustr.html "Voynich MS The illustrations"
[7]: https://alumniacademy.yale.edu/sites/default/files/2021-07/Character%20Entropy%20in%20Modern%20and%20Historical%20Texts%20Comparison%20Metrics%20for%20an%20Undeciphered%20Manuscript.pdf "Character Entropy in Modern and Historical Texts Comparison Metrics for an Undeciphered Manuscript"
[8]: https://github.com/chirila/Voynich-public "Voynich Working Group public corpus and code"

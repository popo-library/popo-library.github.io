
export const characters = [
  {
    id: "popo-female",
    name: "ポポ(女)",
    image: "/images/characters/hana.webp",
    category: "代理",
    description: "ポポの代理",

    profile: [
      { label: "NAME", value: "ポポ(女)" },
    ],

    prompt: `girl, cute catlike face, round soft facial features, softly rounded cheeks, small delicate nose, close mouth, small mouth, ^-shaped mouth, slightly pointed canine teeth,

large tea-green eyes, deep muted green irises, round-shaped eyes, soft drooping outer eye corners, gentle eye shape, delicate light brown eyebrows, fine light brown eyelashes, soft eyelashes,

long pastel yellow hair with pastel pink gradient, soft pale butter yellow hair, light pastel yellow hair, soft pastel pink highlights, alternating pastel yellow and pink streaks, pastel yellow and pink striped hair, twin tails, low twin tails, very long twin tails flowing down to thighs, voluminous spiral drill curls at the ends, curled ringlet twin tails, thick flowing hair strands, long pastel yellow and pink twin tails tied with thin brown ribbon strings, delicate narrow brown ribbon bows,

sparse layered bangs, wispy side-swept bangs, asymmetrical fringe, forehead partially exposed, no center part, a few delicate loose strands framing the face,

feline ears, cute cat ears, soft fluffy cat ears,

delicate masculine appearance, soft androgynous beauty, relaxed casual styling, natural fabric folds, refined character design`,
    outfitPrompt: `light cream oversized sweatshirt dress, knee-length, relaxed straight fit, wide white shirt collar, dropped shoulders, voluminous sleeves, thin black leather belt with silver buckle, silver bracelets, white ankle socks with lace cuffs, black Mary Jane shoes with rounded toes and low block heels`,
    negativePrompt: ``,
  },

  {
    id: "popo-male",
    name: "ポポ(男)",
    image: "/images/characters/dul.webp",
    category: "代理",
    description: "ポポの代理",

    profile: [
      { label: "NAME", value: "ポポ(男)" },
    ],

    prompt: `young adult male, slender masculine figure, delicate masculine anatomy, graceful masculine body proportions, slender limbs, subtle masculine physique,

cute catlike face, softly rounded facial features, softly rounded cheeks, small delicate nose, small mouth, ^-shaped mouth, slightly pointed canine teeth,

tea-green eyes, deep muted green irises, round-shaped eyes, soft drooping outer eye corners, gentle eye shape, delicate light brown eyebrows, fine light brown eyelashes, soft eyelashes,

long pastel yellow hair with pastel pink gradient, soft pale butter yellow hair, light pastel yellow hair, soft pastel pink highlights, alternating pastel yellow and pink streaks, medium-long layered hair, sleek, smooth hair texture, loose hair falling naturally around shoulders, low tied ponytail, loose flowing low tied ponytail, tied with thin brown ribbon strings,

sparse layered bangs, wispy side-swept bangs, asymmetrical fringe, forehead partially exposed, no center part, a few delicate loose strands framing the face,

feline ears, cute cat ears, soft fluffy cat ears,

delicate masculine appearance, soft androgynous beauty, relaxed casual styling, natural fabric folds, refined character design`,
    outfitPrompt: `light cream oversized sweatshirt, wide white shirt collar, dropped shoulders, voluminous sleeves, high-waisted ivory beige straight-leg trousers, dark brown leather belt with silver buckle, silver bracelets, delicate wristwatch, white low-top sneakers with thick rubber soles`,
    negativePrompt: ``,
  },

  {
    id: "tomi_m",
    name: "トミ(男)",
    image: "/images/characters/tomi_m.webp",
    category: "代理",
    description: "ポポの2人目の代理",

    profile: [
      { label: "NAME", value: "トミ(男)" },
    ],

    prompt: `boy, adult male,

black hair, short hair, straight hair, choppy bangs, long bangs, eyes visible through hair, 0.3::fine wispy hair strands::, -1::messy hair, wavy hair, spiked hair, floating hair, parted bangs, undercut, hair covering neck::,

1.5::massive muscular build, broad shoulders, thick muscular chest, powerful muscular arms, bulky physique, prominent veins on arms and hands::,

handsome masculine face, mature facial features, broad jawline, smooth facial contours, subtle cheekbones,

very dark skin, deep ebony skin,

narrow eyes, slightly upturned outer eye corners, small teal irises, small pupils,

thick cross-shaped scar on under cheek, thin eyebrows, fine upper eyelashes, no lower eyelashes, dark circles under eyes,`,
    outfitPrompt: `industrial work jumpsuit, jumpsuit worn halfway down, upper half of jumpsuit tied around waist, sleeveless tank top, military combat boots`,
    negativePrompt: ``,
  },

  {
    id: "tomi_w",
    name: "トミ(女)",
    image: "/images/characters/tomi_w.webp",
    category: "代理",
    description: "ポポの2人目の代理",

    profile: [
      { label: "NAME", value: "トミ(女)" },
    ],

    prompt: `girl, adult female,

black hair, short hair, straight hair, choppy bangs, long bangs, eyes visible through hair, 0.3::fine wispy hair strands::, -1::bob hair, messy hair, floating hair, parted bangs, undercut, hair covering neck::,

1.5::voluptuous athletic physique, large breasts, narrow waist, hourglass figure, wide hips, thick toned thighs, toned arms, prominent veins on hands::,

beautiful mature feminine face, sharp facial features, defined jawline, smooth facial contours, subtle cheekbones,

very dark skin, deep ebony skin,

narrow eyes, slightly upturned outer eye corners, small teal irises, small pupils,

thick cross-shaped scar on under cheek, thin eyebrows, fine upper eyelashes, no lower eyelashes, dark circles under eyes,`,
    outfitPrompt: `industrial work jumpsuit, jumpsuit worn halfway down, upper half of jumpsuit tied around waist, fitted sleeveless tank top, military combat boots`,
    negativePrompt: ``,
  },
{
    id: "paul",
    name: "パウル・フォン・ラーベン",
    image: "/images/characters/paul.webp",
    description: `身長：189cm`,

    profile: [
      { label: "NAME", value: "パウル" },
      { label: "AGE", value: "24" },
      { label: "GENDER", value: "男" },
      { label: "SPECIES", value: "ブラックサーバル" },
    ],

    prompt: `male, adult male, furry, anthro, 1.5::black serval, melanistic serval::,

2::jet black fur, pitch-black fur covering entire body::, 1.2::subtle black-on-black spotted fur markings::, short sleek fur,

1.1::very tall stature, elongated body proportions, long legs, long arms::,

1.2::lean muscular build, broad shoulders, narrow waist, high waistline, long neck, proportionally small head::,

1.1::feline head, elongated feline muzzle, oversized rounded serval ears::,

short slender feline tail, solid jet black tail, smooth short fur on tail,

narrow half-lidded eyes, golden amber eyes, vertical slit pupils, long black whiskers, composed expression,

1.1::gold-rimmed pince-nez glasses, delicate gold glasses chain, asymmetrical gold ear cuffs::,`,
    outfitPrompt: `gold tie pin, antique gold pocket watch chain, dark burgundy pocket square, black leather gloves,
    
1.3::classic black three-piece suit, tailored suit jacket, fitted waistcoat, crisp white dress shirt, black necktie::, tailored trousers, polished black oxford shoes,`,
    negativePrompt: ``,
},
{
    id: "kaila",
    name: "海羅",
    furigana: "かいら",
    image: "/images/characters/kaila.webp",
    description: `身長：155cm`,

    profile: [
      { label: "NAME", value: "海羅" },
      { label: "AGE", value: "20" },
      { label: "GENDER", value: "女" },
      { label: "SPECIES", value: "シャチ" },
    ],

    prompt: `girl, adult female, orca kemonomimi, petite stature, soft curvy figure, moderately full bust, rounded hips, plump thighs,

1.5::large thick orca tail, chunky rounded tail base, black and white tail coloration, broad horizontal whale tail flukes::,

1.5::black hair with distinct white patches, orca-inspired hair coloration, large irregular white sections on jet black hair::, fluffy short bob, rounded hairstyle, soft bangs, blunt central forelock, -1::choppy bangs::,

1.5::short eyebrows, thick eyebrows, tapered eyebrows::,

round eyes, deep ocean blue eyes, chubby cheeks, cheerful smile, playful expression, small dorsal fin on head,`,
    outfitPrompt: `black and white oversized hoodie, short pleated black skirt, chunky sneakers,`,
    negativePrompt: ``,
},
{
    id: "nagi",
    name: "凪",
    furigana: "なぎ",
    image: "/images/characters/nagi.webp",
    category: "",
    description: `身長：178cm
私立南華夜部恵学園の生徒`,

    profile: [
      { label: "NAME", value: "凪" },
      { label: "AGE", value: "17" },
      { label: "GENDER", value: "男" },
      { label: "SPECIES", value: "水槽人外" },
    ],

    prompt: `male student, fantasy humanoid, slender physique, mysterious beauty,

2::transparent glass body, hollow glass anatomy, aquarium-like body filled with clear water, visible waterline inside body, small goldfish and colorful guppies swimming inside body, floating air bubbles::,

1.5::transparent glass skin, smooth curved glass surfaces, refracted light, iridescent glass reflections, aquatic caustics::,

1.5::deep indigo hair, asymmetrical layered short hair, long side bangs covering one eye, iridescent underwater caustic hair highlights::,

metallic golden eyes, narrow sleepy eyes, white eyelashes, expressionless face,

1.5::small transparent air bubbles gently escaping from mouth while speaking::,

golden tassel earring,`,
    outfitPrompt: `1.5::black gakuran, unbuttoned school uniform jacket, standing collar, golden buttons::, black school trousers, black loafers, `,
    negativePrompt: ``,
},
  {
    id: "tsumugi",
    name: "紡",
    furigana: "つむぎ",
    image: "/images/characters/tsumugi.webp",
    category: "",
    description: `身長：145cm
    住処：桑の森`,

    profile: [
      { label: "NAME", value: "紡" },
      { label: "AGE", value: "19" },
      { label: "GENDER", value: "女" },
      { label: "SPECIES", value: "カイコガ"},
    ],

    prompt: `fantasy, kemonomimi, moth girl, cute girl, young girl,  2::pure white skin::,

1.5::four arms, two arms on each side of the torso, two pairs of arms, symmetrical arm arrangement::,

1.5::large fluffy white feathery antennae on top of head, symmetrical comb-like moth antennae, delicate feather-like antenna branches::,

2::solid pure black eyes, completely black eyeballs, uniformly black eyes, featureless black eyes, glossy obsidian-like eyes, tiny sparkling highlights::,

1.5::short fluffy hair, soft fluffy short bob, voluminous fluffy hair, rounded silhouette, tousled soft hair, fluffy layered hair, wispy hair ends::,

1.4::soft white fur, fluffy appearance, soft downy texture, delicate fluffy details::,

white moth wings, delicate feathery wings, pale cream color palette,`,
    outfitPrompt: `fluffy white fur jacket, fluffy white fur shorts, fluffy white arm warmers, fluffy white leg warmers, white fluffy fur boots`,
    negativePrompt: ``,
  },

{
    id: "aron",
    name: "アロン",
    image: "/images/characters/aron.webp",
    category: "",
    description: `身長：301cm
    住処：神秘の森`,

    profile: [
      { label: "NAME", value: "アロン" },
      { label: "AGE", value: "∞" },
      { label: "GENDER", value: "男" },
      { label: "SPECIES", value: "精霊" },
    ],

    prompt: `adult male, muted autumn leaf brown hair, dull russet brown hair, shoulder-length hair, tousled messy hair, disheveled hair,

botanical growth emerging from both sides of the head, 1.4::wrapping around the face and covering both eyes::, compact curved botanical growth, dense intertwined camellia leaves and flowers, -1.5::outward or upward branching, originating from the eyes::

beautiful mysterious facial features, ethereal beauty, refined facial structure, elegant face,

massive bear-like muscular build, enormous thickset body, extremely broad shoulders, 1.7::huge oversized muscular chest, massive bulging pectoral muscles::,  large nipples, thick powerful limbs, large muscular thighs, 1.3::enormous round muscular buttocks::, wide muscular hips, sturdy heavyweight physique

sparse irregular bark-like markings, scattered rough wood-grain scratches on the skin, isolated textured patches, natural human skin exposed between markings,

## <目あり>

glowing emerald green eyes, mysterious ethereal green aura within the eyes, luminous iridescent glow,`,
    outfitPrompt: `wrapped in white cloth, loosely draped white fabric covering the body`,
    negativePrompt: ``,
},

{
    id: "goth",
    name: "ゴス",
    image: "/images/characters/goth.webp",
    category: "",
    description: `身長：178cm
    趣味：ツーリング`,

    profile: [
      { label: "NAME", value: "ゴス" },
      { label: "AGE", value: "231" },
      { label: "GENDER", value: "女" },
      { label: "SPECIES", value: "悪魔" },
    ],

    prompt: `adult female, feminine body, voluptuous figure, extremely full large breasts, heavy rounded bust, narrow waist, slim abdomen, pronounced waist-to-hip ratio, wide rounded hips, full pelvis, thick shapely thighs, soft thighs, long slender legs, delicate shoulders, slender arms, soft feminine curves, balanced body proportions, 1.5::glossy skin, glittering skin::,

short black hair, glossy silky hair, neat short haircut, 7:3 side part, deep side part, swept-back side-swept hair, exposed forehead, no bangs, inner red hair, sharp upturned eyes, red eyes, long dramatic eyelashes, mature seductive appearance, sharp facial features, red lipstick, lip piercing,

short black devil horns protruding upward from forehead, upward-pointing sleek horns, metallic chains dangling from horn tips, thin devil tail, pointed heart-shaped tail tip, flame-like horns and tail, glowing fiery edges horns and tail,

silver-rimmed sunglasses, extravagant ear piercings, multiple silver earrings,`,
    outfitPrompt: `black leather short biker jacket, long black leather tight skirt, tight-fitting top, knee-high black leather boots, extravagant decorative belts, metallic buckles, elaborate metal ornaments, silver hardware, edgy luxury biker fashion, layered necklaces,`,
    negativePrompt: ``,
},
{
    id: "marine",
    name: "マリネ",
    image: "/images/characters/marine.webp",
    category: "",
    description: `人間身長：158cm
    人形身長：18cm`,

    profile: [
      { label: "NAME", value: "マリネ" },
      { label: "AGE", value: "7" },
      { label: "GENDER", value: "女" },
      { label: "SPECIES", value: "マリオネット" },
    ],

    prompt: `beautiful eerie marionette girl, autonomous living puppet, antique porcelain doll, gothic puppet aesthetic,

very long black hair, waist-length hair, uneven layered hair, irregular hair strands, heavy straight bangs, long side locks, slightly messy hair, silky black hair,

pale porcelain skin, delicate porcelain face, subtle hairline cracks on skin, glass-like amber eyes, glossy glass eyeballs, fixed unnatural smile, faint circular blush on cheeks, subtle muted orange lips,

visible ball-jointed doll body, exposed spherical joints, articulated neck, ball joints on shoulders, elbows, wrists, knees and ankles, delicate mechanical joint details, fine black strings attached to fingers and limbs,

thin black puppet strings emerging from hair, tangled puppet strings, small metal loops around wrists and ankles, wooden marionette control crossbar attached to upper back,

delicate, uncanny, elegant, melancholic, dark fairytale atmosphere,`,
    outfitPrompt: `black victorian gothic dress, antique doll clothing, black velvet dress, layered lace, high collar, puff sleeves, oversized cuffs, intricate ribbon details, asymmetrical skirt, striped stockings, black mary jane shoes,`,
    negativePrompt: ``,
},
{
    id: "onett",
    name: "オネット",
    image: "/images/characters/onett.webp",
    category: "",
    description: `人間身長：181cm
    人形身長：21cm`,

    profile: [
      { label: "NAME", value: "オネット" },
      { label: "AGE", value: "11" },
      { label: "GENDER", value: "男" },
      { label: "SPECIES", value: "マリオネット" },
    ],

    prompt: `beautiful eerie male marionette, autonomous living puppet, antique porcelain doll, gothic puppet aesthetic, elegant androgynous appearance, slender elongated body, delicate masculine features,

very long black hair, waist-length hair, uneven layered hair, irregular hair strands, messy silky hair, heavy parted bangs, long face-framing side locks, asymmetrical hairstyle, loose strands covering one eye,

asymmetrical black gothic eyepatch, antique embroidered eyepatch, delicate black lace details, small metallic ornament on eyepatch, thin black puppet strings attached to eyepatch, one eye concealed beneath eyepatch, subtle porcelain cracks on cheek, delicate hairline fractures spreading across one cheek, fine branching cracks, cracked porcelain texture, slightly chipped porcelain surface,

visible ball-jointed doll body, exposed spherical joints, articulated neck, ball joints on shoulders, elbows, wrists, knees and ankles, delicate mechanical joint details, fine black strings attached to fingers and limbs,

thin black puppet strings emerging from hair, tangled puppet strings, small metal loops around wrists and ankles, wooden marionette control crossbar attached to upper back,`,
    outfitPrompt: `black victorian aristocratic clothing, antique gothic prince outfit, high collar shirt, fitted black waistcoat, elaborate long tailcoat, asymmetrical coat tails, layered dark fabric, intricate lace details, antique silver buttons, delicate ribbon ornaments, decorative chains, fitted trousers, elegant leather boots,`,
    negativePrompt: ``,
},
{
    id: "Lucien",
    name: "ルシアン",
    image: "/images/characters/Lucien.webp",
    category: "",
    description: `(怪し)人形師
身長：183cm`,

    profile: [
      { label: "NAME", value: "ルシアン" },
      { label: "AGE", value: "47" },
      { label: "GENDER", value: "男" },
      { label: "SPECIES", value: "人間" },
    ],

    prompt: `mature handsome man, middle-aged male, late 40s, full body, character design,

attractive mature masculine appearance, refined masculine features, sophisticated gentleman, charismatic presence, elegant mature man, lean fit physique, broad shoulders, slender waist, long elegant fingers,

handsome angular face, defined jawline, prominent straight nose, slightly hollow cheeks, subtle age lines, faint crow's feet, mature facial structure, natural facial wrinkles,

monocle, half-lidded eyes, narrow deep-set eyes, muted dark gray-brown eyes, relaxed gaze, faint knowing smile, subtle smirk, calm confident expression, seductive eyes, slightly tired eyes,

black hair with silver gray streaks, salt and pepper hair, medium-length hair, loosely slicked-back hairstyle, swept-back bangs, loose strands framing face, slightly wavy hair, natural hair volume, distinguished graying temples,

subtle stubble, neatly maintained short beard shadow, well-groomed appearance,

pale warm skin tone, natural skin texture,`,
    outfitPrompt: `elegant dark victorian-inspired clothing, fitted charcoal waistcoat, slightly open high-neck black shirt, casually loosened collar, tailored dark long coat, understated antique silver accessories, dark leather gloves, refined vintage fashion, subtle luxurious details, decorative pocket watch chain, fitted trousers, polished leather boots,`,
    negativePrompt: ``,
},
{
    id: "bori",
    name: "ボリ",
    image: "/images/characters/bori.webp",
    category: "",
    description: `身長：130cm
住処：田舎`,

    profile: [
      { label: "NAME", value: "ボリ" },
      { label: "AGE", value: "22" },
      { label: "GENDER", value: "女" },
      { label: "SPECIES", value: "鼠" },
    ],

    prompt: `5::3-year-old child::, petite girl, small stature, delicate youthful appearance, tiny delicate physique, soft feminine features,  1.6::subtle whiskers::,

pale straw-blonde hair, muted olive undertones, short layered bob, tousled crown hair, irregular back hair, 1.5::uneven bangs::, asymmetrical choppy bangs, outward flicked hair tips, uneven nape hair, a few long wispy strands at the back, delicate flyaway strands, loose stray hairs, irregular hair strands, disheveled layered hair, subtle floating golden pollen-like sparkles around the hair, subtle floating golden pollen-like sparkles around the hair, tiny rounded mouse ears,

large dark olive eyes, small nose, subtle rosy cheeks,

long slender mouse tail, delicate pointed muzzle,

warm earthy color palette, straw beige, muted olive, cream white, soft ochre,
gentle woodland atmosphere, whimsical natural charm,`,
    outfitPrompt: `simple cream-colored puff-sleeve dress, modest rounded collar, soft gathered skirt, delicate fabric folds, dark brown Mary Jane shoes, simple socks,`,
    negativePrompt: ``,
},
{
    id: "myuu",
    name: "ミュウ",
    image: "/images/characters/myuu.webp",
    category: "",
    description: `身長：167cm
住処：深海
陸上でも自由`,

    profile: [
      { label: "NAME", value: "ミュウ" },
      { label: "AGE", value: "22" },
      { label: "GENDER", value: "女" },
      { label: "SPECIES", value: "メンダコ" },
    ],

    prompt: `adult woman, 1.5::ethereal mysterious beauty, otherworldly appearance, elegant and uncanny::,
full voluptuous breasts, feminine hourglass figure, well-proportioned curvy body, defined waist, gently rounded hips, elegant feminine proportions,
sophisticated creature design, elegant organic shapes, distinctive character silhouette,

pale translucent skin, cool pearl-gray complexion, subtle iridescent sheen,

2.5::pair of tiny dumbo octopus fins emerging from both sides of the crown, at the very top of the head::, small translucent fin tips,

long straight silvery blue-gray hair, sleek smooth hair, straight blunt bangs, flowing underwater hair, gently drifting hair strands, softly floating hair ends, asymmetrical side-swept hair, one ear exposed, subtle wispy flyaway strands,

four white oval markings embedded in the hair, two on each side,

large deep blue eyes, unusual circular pupils, subtle bioluminescent markings around the eyes, calm unreadable expression, faint enigmatic smile,

oval suction-cup markings along both temples, 1.5::delicate branching coral hair ornament behind exposed ear::,

octopus-inspired humanoid design, soft translucent organic appendages, multiple long flowing tentacles emerging from the lower back, delicate curling tentacle tips, weightless floating tentacles, intricate sucker details, subtle ocellus patterns, luminous circular markings,

muted lavender, icy blue, pearl white, deep indigo accents, subtle iridescent gradients,

surreal deep sea atmosphere,`,
    outfitPrompt: `avant-garde marine couture, asymmetrical high-fashion outfit, translucent layered fabric, sculptural draped sleeves, irregular flowing silhouette, sheer overlapping materials, unconventional garment construction,`,
    negativePrompt: `tentacle hair, octopus hair, hair-like tentacles, sucker-covered hair, suction cups on hair, suckers embedded in hair, tentacle-shaped locks, seashell fins, shell-shaped fins, spiral shell appendages, spiked shell protrusions, horned shell fins, shell-like ears,`,
},
{
    id: "rei",
    name: "黒瀬 怜",
    furigana: "くろせ　　    れい",
    image: "/images/characters/rei.webp",
    category: "",
    description: `身長：171cm
半人半神（魔神）`,

    profile: [
      { label: "NAME", value: "黒瀬 怜" },
      { label: "AGE", value: "21" },
      { label: "GENDER", value: "男" },
      { label: "SPECIES", value: "半神" },
    ],

    prompt: `boy, boyish youthful appearance, youthful beauty, small face, slender chin, slim build, slender elongated body proportions, proportionate head-to-body ratio, natural limb length, porcelain skin, rosy blush, delicate nose, soft tinted lips, mischievous expression, muted pastel undertones,

messy layered shaggy hair, dark blue-black charcoal hair, subtle blue highlights, short nape-length hair,

smooth downward-flowing hair from crown, naturally aligned straight bang roots, thick unified central bangs, long uneven face-framing bangs, 1.9::bangs partially covering the eyes::, detailed glossy hair strands,

narrow half-lidded eyes, sleepy eyes, 1.7::sharp eyes::, muted golden amber eyes, subtle blush,

2::pair of small thick black ram horns, compact inward-curled spiral shape, tight rounded curls, prominent rounded thickness, shortened horn length, closely nestled against hair on both sides of the head::,
1.5::delicate silver chains wrapped around horns, spiraling chain ornaments, small dangling metallic star charms::,

1.8::pair of tiny black bat wings attached to both sides of the crown, symmetrical head-mounted demon wings, small sideways-projecting miniature bat wings, clearly visible::,

1.5::pointed elongated elf ears, tapered non-human ears, multiple silver ear piercings, small silver hoops, delicate ear cuffs::,

pair of small black bat wings attached to both sides of the waist, symmetrical miniature hip-mounted demon wings, long black demon tail extending from lower back, slender curved tail, pointed spade-shaped tip,`,
    outfitPrompt: `oversized muted blue-gray short-sleeved button-up shirt, rolled sleeve cuffs, pointed collar, black necktie, silver tie clips, dangling metal ornaments, safety-pin accessories, pale gray-blue chest pocket, silver chain and metal clips on pocket, black high-waisted wide-leg trousers, black belt, hanging decorative straps, layered silver bracelets, black leather wristband, black studded bracelet, multiple silver rings, black pointed nail polish, black leather hip harness, chunky silver-gray platform sneakers, thick soles, gray laces, metallic details,`,
    negativePrompt: `2::straight blunt bangs, evenly cut straight-across fringe, neat horizontal fringe line, uniform bang length, straight blunt bangs, short bangs, micro bangs, split bangs, parted bangs, center-parted hair::, middle part, curtain bangs, swept-back bangs, slicked-back hair, curly hair, wavy hair, permed hair, frizzy hair, tangled hair, spiky hair, bowl cut, bob cut, undercut, shaved sides, buzz cut, long hair, waist-length hair, ponytail, twin tails, braids, dreadlocks, hair bun, bald`,
},
{
    id: "rak",
    name: "ラク",
    image: "/images/characters/rak.webp",
    category: "",
    description: `身長：189cm`,

    profile: [
      { label: "NAME", value: "ラク" },
      { label: "AGE", value: "21" },
      { label: "GENDER", value: "男" },
      { label: "SPECIES", value: "ユキヒョウ" },
    ],

    prompt: `anthropomorphic snow leopard, male, snow leopard ears, long thick snow leopard tail, white and black spotted fur pattern,

1.5::very pale cool-toned skin, subtle bluish undertones, pale cool pink undertones::,

very tall, massive imposing physique, exceptionally large muscular build, extremely broad shoulders, massive wide back, thick muscular neck, huge trapezius muscles, massive muscular arms, thick forearms, enormous broad chest, large full pectoral muscles, thick muscular torso, massive muscular thighs, thick powerful legs, bulky dense muscles, heavy muscular frame,

long nape-length hair, back hair fully covering the nape, layered tousled hair at the back, slightly spiky layered ends, long heavy bangs covering the eyes, bangs falling down to eye level, almost completely obscured eyes, pale white hair,

narrow slit-like eyes, half-lidded eyes, sharp narrow eye shape, vivid icy blue eyes, horizontal snow leopard markings beneath the eyes, faintly defined cupid's bow, expressionless,

black snow leopard spots on forearms, scattered black snow leopard markings along the arms, black paw pads on palms, sharp claws, clawed fingers,

((black snow leopard spots on calves, scattered black snow leopard markings along the legs, black paw pads on soles, sharp claws, clawed toes,))

scattered scars across the body, multiple thin healed scratches, visible scratch marks on skin,

thick black leather dog collar, metallic buckle, heavy metal chain attached to the collar, dangling iron chain,`,
    outfitPrompt: `loosely worn white dress shirt, heavily unbuttoned shirt, shirt hanging loosely off the shoulders, disheveled open collar, exposed chest, black tailored slacks, black leather belt, bare feet,`,
    negativePrompt: `5::Furry::, straight long hair, long hair, straight very long hair, straight hair, sleek hair, blunt hair ends, straight locks`,
},
{
    id: "runa",
    name: "ルナ",
    image: "/images/characters/runa.webp",
    category: "",
    description: `身長：167cm`,

    profile: [
      { label: "NAME", value: "ルナ" },
      { label: "AGE", value: "20" },
      { label: "GENDER", value: "女" },
      { label: "SPECIES", value: "アンドロイド" },
    ],

    prompt: `girl, slim feminine physique, modest breast size, subtle natural body curves, slender waist, balanced body proportions,

pale porcelain skin, translucent synthetic skin, transparent artificial skin, semi-transparent body shell, clear glass-like outer skin,

pure white hair, snow white hair, cool white hair, thick straight bangs, layered front bangs, long face-framing side locks, curved side bangs, asymmetrical side fringe, smooth inward-curving hair ends, smooth rounded back hair, compact rounded hair silhouette, neatly arranged back hair, no loose strands, 1.5::three long cable-like twin tails, mechanical twin tails, flexible translucent cable hair::, long hanging cable extensions, futuristic cable extensions, separated from natural hair, symmetrical silver mechanical twin-tail mounts, angular outward-flared metallic housings, integrated slim radio antennas, antenna ornaments attached to twin-tail mounts, industrial connectors,

emotionless expression, neutral expression, neutral eye shape, neither upturned nor downturned eyes, straight eye shape, relaxed eyelids, no visible eyelashes, clean eyelid lines, large luminous cyan mint eyes, fluorescent mint green irises, 1.6::concentric mechanical iris patterns, digital iris design, futuristic optical eye, bright white glowing pupils, pure white inner glow, luminous white highlights::,

visible internal mechanical skeleton, transparent anatomical structure, visible titanium skeleton beneath transparent skin, polished silver titanium bones, metallic skeletal structure, visible cervical vertebrae, visible rib cage, visible spine, visible shoulder bones, visible arm bones, visible pelvis, anatomical skeletal details,

futuristic mechanical neck apparatus, black mechanical neck brace, cybernetic cervical support, thick black cable collar, multiple black flexible cables surrounding the neck, vertically arranged mechanical tubes, silver metallic connectors, exposed mechanical components,

futuristic cropped cyber jacket, oversized short cropped jacket, high collar, long sleeves, loose sleeves, technical fabric, underboob top design, underbust cutout, exposed lower breasts, cropped upper garment, open lower torso, gray technical fabric, white geometric markings, minimal futuristic sportswear,

large futuristic mechanical backpack, back-mounted electronic apparatus, white and silver mechanical devices, external antenna array, multiple radio antennas, satellite dish components, communication equipment, mechanical tubes, flexible connecting cables, metallic brackets, industrial machinery,

1.7::cybernetic mechanical legs, full robotic legs::, biomechanical lower body, exposed mechanical leg structures, robotic thighs, mechanical hip joints, articulated knee joints, silver titanium leg frames, layered metallic armor plates, intricate mechanical leg components, exposed pistons, mechanical joints, segmented metal plating, 1.7::robotic legs extending from the feet to the middle of the thighs, visible upper thigh transition::, white silver and pale lavender metallic surfaces, glossy titanium finish,`,
    outfitPrompt: ``,
    negativePrompt: ``,
},
{
    id: "aurora",
    name: "オーロラ",
    image: "/images/characters/aurora.webp",
    category: "",
    description: `身長：168cm
髪色ランダム`,

    profile: [
      { label: "NAME", value: "オーロラ" },
      { label: "AGE", value: "20" },
      { label: "GENDER", value: "女" },
      { label: "SPECIES", value: "人間" },
    ],

    prompt: `delicate feminine facial features, small delicate nose, soft facial contours, small delicate lips, naturally shaped lips, subtle lip definition,

high twin tails, two long straight twin tails reaching down to the calves, two thin separate accent braids, one attached beside each twin tail base, twin tails with long braided strands, one long thin braid attached at the base of each twin tail, two separate braids, braids extending from twin tail roots, long braids following the length of each twin tail, braids hanging alongside twin tails, integrated braided hair sections, symmetrical braided twin tails,

1.6::misty blue::, 1.3::very light pastel red::, 1.3::very light pastel pink::, 1.3::very light pastel lavender::, four-color hair gradient, equal distribution of four colors, each color covering exactly 25% of the hair, evenly balanced color proportions, four distinct equal-sized color sections, smooth seamless gradient transitions, consistent color saturation, soft pale pastel tones, low saturation, high brightness,

narrow almond-shaped eyes, cat round eyes, elongated eyes,  slightly drooping outer eye corners, long delicate eyelashes, subtle lower eyelashes,

pale pastel pink irises, muted rose pink eyes, soft pink pupils, subtle pink eye highlights,

thin delicate eyebrows,

feminine body, voluptuous figure, large full breasts, narrow waist, slim abdomen, pronounced waist-to-hip ratio, wide rounded hips, full pelvis, thick shapely thighs, soft thighs, long slender legs, delicate shoulders, slender arms, soft feminine curves, balanced body proportions, 1.5::glossy skin, glittering skin::,

large hoop earrings,

gyaru decora nails, extravagant decorated long nails,

layered rings,`,
    outfitPrompt: `pale pink fitted long-sleeved top, plunging V-neckline, slightly sheer fabric, delicate lace details, visible white triangular bralette, light blue low-rise denim micro shorts, distressed denim, frayed hem, rolled waistband, unbuttoned shorts, unzipped fly, white high-cut bikini briefs with exposed crisscross waist straps, chunky platform sneakers, white choker, silver cross necklace`,
    negativePrompt: ``,
},
{
    id: "touma",
    name: "冬真",
    furigana: "とうま",
    image: "/images/characters/touma.webp",
    category: "",
    description: `身長：182cm
退魔師`,

    profile: [
      { label: "NAME", value: "冬真" },
      { label: "AGE", value: "29" },
      { label: "GENDER", value: "男" },
      { label: "SPECIES", value: "人間" },
    ],

    prompt: `delicate feminine facial features, small delicate nose, soft facial contours, small delicate lips, naturally shaped lips, subtle lip definition,

high twin tails, two long straight twin tails reaching down to the calves, two thin separate accent braids, one attached beside each twin tail base, twin tails with long braided strands, one long thin braid attached at the base of each twin tail, two separate braids, braids extending from twin tail roots, long braids following the length of each twin tail, braids hanging alongside twin tails, integrated braided hair sections, symmetrical braided twin tails,

1.6::misty blue::, 1.3::very light pastel red::, 1.3::very light pastel pink::, 1.3::very light pastel lavender::, four-color hair gradient, equal distribution of four colors, each color covering exactly 25% of the hair, evenly balanced color proportions, four distinct equal-sized color sections, smooth seamless gradient transitions, consistent color saturation, soft pale pastel tones, low saturation, high brightness,

narrow almond-shaped eyes, cat round eyes, elongated eyes,  slightly drooping outer eye corners, long delicate eyelashes, subtle lower eyelashes,

pale pastel pink irises, muted rose pink eyes, soft pink pupils, subtle pink eye highlights,

thin delicate eyebrows,

feminine body, voluptuous figure, large full breasts, narrow waist, slim abdomen, pronounced waist-to-hip ratio, wide rounded hips, full pelvis, thick shapely thighs, soft thighs, long slender legs, delicate shoulders, slender arms, soft feminine curves, balanced body proportions, 1.5::glossy skin, glittering skin::,

large hoop earrings,

gyaru decora nails, extravagant decorated long nails,

layered rings,`,
    outfitPrompt: `pale pink fitted long-sleeved top, plunging V-neckline, slightly sheer fabric, delicate lace details, visible white triangular bralette, light blue low-rise denim micro shorts, distressed denim, frayed hem, rolled waistband, unbuttoned shorts, unzipped fly, white high-cut bikini briefs with exposed crisscross waist straps, chunky platform sneakers, white choker, silver cross necklace`,
    negativePrompt: ``,
},
{
    id: "yhm",
    name: "양해민 (ヤン・ヘミン)",
    image: "/images/characters/yhm.webp",
    category: "",
    description: `身長：185cm
道士`,

    profile: [
      { label: "NAME", value: "양해민 (ヤン・ヘミン)" },
      { label: "AGE", value: "27" },
      { label: "GENDER", value: "男" },
      { label: "SPECIES", value: "人間" },
    ],

    prompt: `adult male, 1.5::light skin tone, natural ivory complexion::, moderately muscular masculine physique, naturally defined muscles, broad shoulders, toned athletic build, well-proportioned muscular body,

slightly tousled black hair, medium-long shaggy layered hair, voluminous spiky crown, smooth flowing hair layers, longer nape-length hair, irregular outward-flipped ends, loose wispy strands, natural 6:4 side part, asymmetrically swept bangs partially covering the eyes, elongated face-framing locks reaching the jawline,

handsome mature masculine face, sharp angular facial structure, defined jawline,

slightly narrow elongated eyes, half-lidded eyes, deep pure black eyes, thin sharp eyebrows,

straight nose, subtle confident smirk, thin lips, small beauty mark directly below the lower lip,

geek chic glasses, thin metal rectangular eyeglass frames, sophisticated intellectual appearance,`,
    outfitPrompt: `luxurious black Korean hanbok-inspired formal suit, tailored black three-piece suit, 2::fitted waistcoat with traditional Korean overlapping front closure, modernized black jeogori-inspired inner jacket, elegant Korean dongjeong collar::, 1.5::asymmetrical front opening with traditional seop panels::, decorative deep blue Korean otgoreum knot closures and last knot norigae, sharply structured shoulders, fitted waist, tailored black trousers, long open-front black overcoat inspired by traditional durumagi and dopo, broad tailored lapels, floor-length flowing coat panels, vivid crimson red silk inner lining, intricate cobalt blue Korean floral embroidery along the lapels, cuffs and coat edges, traditional Korean ornamental motifs, subtle black-on-black fabric detailing, fitted black leather gloves, smooth glossy leather texture, luxurious silk and matte fabric contrast, refined aristocratic aesthetic`,
    negativePrompt: ``,
},
{
    id: "ichigo",
    name: "イチゴ",
    image: "/images/characters/ichigo.webp",
    category: "",
    description: `身長：162cm
    いちごケーキ専門店でアルバイト`,

    profile: [
      { label: "NAME", value: "イチゴ" },
      { label: "AGE", value: "24" },
      { label: "GENDER", value: "男" },
      { label: "SPECIES", value: "人間" },
    ],

    prompt: `late-teen youthful appearance, young adult boyish features, slim lean physique, delicate youthful facial structure, pale porcelain skin, soft pink blush, faint freckles, refined small nose, soft pink lips, half-lidded sleepy eyes, languid relaxed gaze, magenta-pink irises, long dark pink eyelashes,

pale strawberry milk pink hair, fluffy choppy hair, short layered hair, soft rounded silhouette, airy layered texture, asymmetrical parted bangs, long sweeping side bangs, one tiny front bang section tied into a sprout-like tuft above the forehead, small pink strawberry hair tie with yellow seeds and green leaves, remaining hair completely loose, untied short back hair ending above the nape, exposed neck,

warm milky pink palette, low saturation, simplified cel shading, clean bold lineart, minimal highlights, clear readable silhouette,`,
    outfitPrompt: `oversized pastel pink cable-knit sweater vest, chunky knit texture, ribbed hem, layered over a loose white collared shirt, large pointed collar, voluminous rolled-up sleeves, long oversized white necktie, untucked shirt hem, loose white wide-leg trousers, flowing fabric, white chunky platform sneakers with pastel pink accents, relaxed Japanese street fashion, cute androgynous boy aesthetic, oversized silhouette, detailed fabric folds,`,
    negativePrompt: `half-up hairstyle, ponytail`,
},
{
    id: "momo",
    name: "モモ",
    image: "/images/characters/momo.webp",
    category: "",
    description: `身長：154cm
    大学生`,

    profile: [
      { label: "NAME", value: "モモ" },
      { label: "AGE", value: "22" },
      { label: "GENDER", value: "女" },
      { label: "SPECIES", value: "人間" },
    ],

    prompt: `young cute girl,

Hair: waist-length straight hair, kotori beige roots, warm beige midtones, 2::smooth gradient fading to pure white tips::, 2.5::short hime cut, blunt side locks, straight cheek-length sidelocks::, 1.5::short choppy bangs, uneven jagged fringe, short blunt bangs above eyebrows::,

Face: 1.3::large round puppy eyes, strongly downturned outer eye corners::, rounded lower eyelids, white irises, pink limbal rings, star-shaped highlights, thick warm beige eyelashes, beauty marks under both eyes, soft natural complexion, 1.2::full plump lips::, subtle natural lip color, short thick straight white eyebrows, short inu eyebrows, soft rounded facial features, small nose, rosy cheeks,`,
    outfitPrompt: `off-shoulder white knit sweater, exposed shoulders, soft ribbed knit texture, loose fit, beige pleated tennis skirt, high-waisted skirt, white knee-high socks, ivory leg warmers, slouchy leg warmers, black Mary Jane shoes, rounded toes, strap across the instep, delicate silver chain necklace, small butterfly-shaped pendant worn around the neck,`,
    negativePrompt: ``,
},
{
    id: "dk",
    name: "蓮司",
    furigana: "れんじ",
    image: "/images/characters/dk.webp",
    category: "",
    description: `身長：190cm`,

    profile: [
      { label: "NAME", value: "蓮司" },
      { label: "AGE", value: "3700" },
      { label: "GENDER", value: "男" },
      { label: "SPECIES", value: "天使" },
    ],

    prompt: `adult male, anime male character, very tall, massive imposing muscular physique, broad massive shoulders, thick powerful upper body, thick solid torso, broad deep chest, prominent pectorals,

light ivory blonde, very pale skin, natural skin pigmentation, realistic skin color variation, subtle cool lavender-gray shadows, softly illuminated skin, delicate tonal variations, natural cool-toned skin shading,

mature handsome man, exceptionally beautiful masculine face, refined masculine beauty, subtly androgynous features, harmonious facial proportions, sophisticated graceful appearance, beautiful but unmistakably male, faintly defined cupid's bow,

1.6::long waist-length blonde hair, flowing hair reaching the waist::, 1.5::smooth silky straight hair, soft natural volume, loose flowing strands::, 1.4::soft center part, slightly off-center parting, long parted bangs::, long face-framing strands, hair swept back from both sides of the face, front strands falling over shoulders, side locks flowing outward behind shoulders, gently curved hair ends, naturally layered hair, delicate wispy flyaway strands, soft flowing hair silhouette, elegant loose hairstyle,

light turquoise blue eyes, pale aqua irises, 1.3::narrow elongated half-lidded eyes, heavy relaxed upper eyelids, subtly drooping outer corners::, delicate eyelashes, light blonde eyebrows,

1.5::four large angel wings::, 1.6::luminous golden halo::,

glowing white emblem drawn directly on the skin, circular chest sigil with radiating sacred wave patterns, symmetrical pointed vertical lines,

curved closed eyelid markings, tapered ends,

laurel wreath adorning both sides of the head, delicate golden laurel leaves,`,
    outfitPrompt: `elegant white tailored suit, pure white fitted suit jacket worn directly on bare skin, open jacket, completely open neckline, bare chest, no inner shirt, no undershirt, structured shoulders, fitted waist, sharp lapels, tailored white suit trousers, luxurious minimalist design, no shose,`,
    negativePrompt: ``,
},
{
    id: "rina",
    name: "リナ",
    image: "/images/characters/rina.webp",
    category: "",
    description: `身長：160cm
大学生`,

    profile: [
      { label: "NAME", value: "リナ" },
      { label: "AGE", value: "25" },
      { label: "GENDER", value: "女" },
      { label: "SPECIES", value: "人間" },
    ],

    prompt: `adult female, delicate and beautiful feminine face, pale ivory skin, soft facial features, slender oval face, small delicate nose, soft natural lips, elegant and ethereal beauty, 1.4::glossy highlight::,

light sage blonde hair, muted grayish blonde hair, pale ash blonde hair with a subtle green undertone, desaturated pastel colors, medium layered hair, short fluffy hairstyle, soft wavy locks, single hair intake, wolf cut, asymmetrical bangs, ahoge, loose strands falling over the forehead, light volume at the crown, visible ears,

muted violet eyes, dusty purple eyes, reddish violet undertones, purple irises with subtle pink highlights, delicate eyelashes, half-lidded eyes, languid gaze, sleepy gentle eyes,

moderately full breasts, medium-sized breasts,

soft skin shading, refined anime lineart, soft cel shading, delicate highlights, detailed individual hair strands,`,
    outfitPrompt: `fitted light sage gray-green cropped cardigan, button-up cardigan, black lace-trim camisole, exposed midriff, high-waisted charcoal gray wide-leg trousers, loose straight-leg fit, gray and white sneakers`,
    negativePrompt: ``,
},
{
    id: "ks",
    name: "竜司",
    furigana: "りゅうじ",
    image: "/images/characters/ks.webp",
    category: "",
    description: `身長：179cm`,

    profile: [
      { label: "NAME", value: "竜司" },
      { label: "AGE", value: "26" },
      { label: "GENDER", value: "男" },
      { label: "SPECIES", value: "人間" },
    ],

    prompt: `anime male character, very tall, large muscular build, broad shoulders, imposing masculine physique, thick muscular neck, well-developed chest and arms, large hands, sculptural anatomy,

exceptionally handsome masculine face, refined facial features, striking masculine beauty, beautiful but unmistakably male, sharp yet elegant features, subtly rugged charm, smooth youthful facial contours, softly full under-eye area, smooth lower eyelids, softly contoured cheekbones,

extensive Japanese irezumi tattoos on both shoulders and arms,

irregular horizontal circular scar encircling the middle of the neck, uneven zigzag scar edges, thin raised reddish-brown scar tissue,

natural warm brown skin, realistic skin tones, delicate skin details, soft skin glow, small narrow eyes, cool muted ash-silver gray irises, small focused pupils, thin well-shaped eyebrows,

1.3::red and white two-tone spiky hair, distinct alternating red and white hair spikes, vivid red and pure white color contrast::, wild upward-pointing spikes, swept-back hair, wide black headband covering the entire forehead, completely concealed hairline, no visible forehead, short tapered nape, exposed neck,

multiple small silver hoop piercings, silver stud earrings, helix piercings, lobe piercings, metallic ear cuffs,

micro-sized tongue piercing, very small stud proportional to the tongue,`,
    outfitPrompt: `tight black tank top, open black and khaki bomber jacket, distressed tight black pants, chunky platform combat boots, metallic necklace, layered silver chains, edgy punk streetwear, rebellious delinquent aesthetic,`,
    negativePrompt: ``,
},
{
    id: "mint",
    name: "ミント",
    image: "/images/characters/mint.webp",
    category: "",
    description: `身長：151cm
モデル`,

    profile: [
      { label: "NAME", value: "ミント" },
      { label: "AGE", value: "20" },
      { label: "GENDER", value: "女" },
      { label: "SPECIES", value: "猫" },
    ],

    prompt: `1.3::young girl, cute anime girl::, petite delicate body, slender feminine figure, pale porcelain skin, delicate facial features, small face, small nose, cat eyes, upturned outer eye corners, light cyan-blue eyes,

1.7::short rounded layered cut, chin-length bob, perfectly rounded bob silhouette, inward-curving hair contour, smoothly tucked-in ends, 1.8::voluminous crown, full crown, dense crown volume::, ears fully covered by hair, hair completely covering both ears, -1::curly hair, windy hair::,

1.5::short layered wolf cut, shaggy layered nape, longer feathered back layers, outward-flipped nape layers::, 1.8::short tiny twin tails on both sides::,  pale mint-cyan hair, icy aqua hair, light silver-cyan gradient, dark navy blue inner hair strands, deep teal hair underneath, vivid turquoise highlights, glossy cyan hair highlights, bright white reflective hair streaks, luminous aqua shine,

1.5::bangs, straight bangs, rounded fringe, evenly distributed bangs, slightly curved bang line, soft tapered bang tips::,

single ahoge,

large pointed cat ears, one upright cat ear, one drooping cat ear, white inner ear fur, pale cyan ear tips, multiple silver piercings on cat ears, dangling silver earrings, delicate silver chains and dangling star charms attached to ears, thin black rectangular glasses, multiple silver rings, long slender fingers, long pointed silver nails,`,
    outfitPrompt: `oversized black jacket, oversized white collared shirt, loose wide shirt collar, slightly off-shoulder styling, fitted black turtleneck T-shirt, tight-fitting high-neck shirt, smooth stretch fabric, long baggy jacket sleeves, layered streetwear, short black pleated mini skirt, mismatched black sheer thigh-high stockings, chunky black platform lace-up boots, silver chains, gothic punk fashion, black and white outfit, metallic silver accessories,`,
    negativePrompt: `bob hair, bub cut, pixie cut, very short hair, cropped nape, extremely short back hair, spiky short hair, heavily spiked hair, short choppy bangs, blunt bangs, thick straight bangs, short sidelocks, outward-flipped side hair, straight flat bob, blunt bob, mushroom cut, bowl cut, hime cut, long hair, waist-length hair, long ponytail, large twin tails, low twin tails, full hair tied up, braided hair, buns, outward-flared bob, flared side hair, outward-curving side locks, triangular hair silhouette, wide bottom hair, outward-spiked hair ends, uneven flared bob, outward-flared ends, outward-curving hair, triangular bob, A-line bob, V-shaped hair silhouette, spiky ends, uneven hair length, flared bottom`,
},
{
    id: "yulin",
    name: "予琳",
    furigana: "よりん",
    image: "/images/characters/yulin.webp",
    category: "",
    description: `身長：177cm
公主(長女)`,

    profile: [
      { label: "NAME", value: "予琳" },
      { label: "AGE", value: "28" },
      { label: "GENDER", value: "女" },
      { label: "SPECIES", value: "人間" },
    ],

    prompt: `adult female, mature woman, elegant feminine appearance, gentle smile, slightly tilted head, voluminous breasts, ample bust, delicate facial features, mature almond-shaped cat eyes, subtly sharp eye shape, small refined upturned nose, defined nose bridge, subtly upturned lips, naturally full mature lips,

1.4::lavender-blue irises, pale icy blue inner irises, subtle coral pink outer iris rings, pink limbal rings::,

rosy cheeks,

1.4::extremely long flowing dark charcoal brown hair, muted violet undertones, subtle blue highlights::,

1.4::voluminous layered hair, long side-swept bangs::,

1.3::wispy face-framing strands, outward-curled hair ends::,

1.5::low centered small bun at the back of the head, nape-level bun placement::,

1.3::floral hair ornaments, red and orange flowers, small blue floral accessories, decorative hairpins::,`,
    outfitPrompt: `traditional East Asian ceremonial dress, elegant hanfu-inspired outfit, flowing turquoise jade-green sleeveless outer robe, fitted green bodice, high-waisted silhouette, ornate gold embroidery, intricate floral embroidery, decorative gold trim, voluminous ivory-white puff sleeves, translucent wide sleeve fabric, layered flowing long skirt, asymmetrical overlapping front panels, high front slit, exposed legs, pale beige inner skirt, dark charcoal trailing outer fabric,

ornate waist belt, elaborate gold waist ornaments, red floral decorations around the waist, dangling tassels, turquoise hanging ribbons, long burgundy fabric ribbons,

turquoise high-heeled shoes, ankle strap heels, delicate ankle ornaments,`,
    negativePrompt: `short hair, medium hair, bob cut, short bangs, blunt bangs, center-parted bangs, straight bangs, missing side-swept bangs, missing face-framing strands, straight hair ends, inward-curled hair ends, missing hair layers, flat hair, short back hair, high bun, top bun, side bun, double bun, multiple buns, large bun, missing bun, misplaced bun, missing floral ornaments, missing red flowers, missing orange flowers, missing blue floral accessories, missing hairpins`,
},
{
    id: "yuhwa",
    name: "予华",
    furigana: "よふぁ",
    image: "/images/characters/yuhwa.webp",
    category: "",
    description: `身長：175cm
公主(次女)`,

    profile: [
      { label: "NAME", value: "予华" },
      { label: "AGE", value: "25" },
      { label: "GENDER", value: "女" },
      { label: "SPECIES", value: "人間" },
    ],

    prompt: `adult female, mature woman, mature feminine appearance, feminine curves, mature female figure, elegant feminine appearance, gentle smile, slightly tilted head, voluminous breasts, ample bust, delicate facial features, mature round cat eyes, elongated eye shape, small refined upturned nose, defined nose bridge, subtly upturned lips, naturally full mature lips,

1.4::lavender-blue irises, pale icy blue inner irises, subtle coral pink outer iris rings, pink limbal rings::,

rosy cheeks,

1.4::long flowing muted charcoal brown hair, warm mauve undertones, subtle reddish highlights::,

1.4::extremely long layered hair, voluminous hair, tousled crown::,

1.5::messy layered bangs, long side-swept fringe::,

1.4::face-framing strands, loose strands framing cheeks::,

1.4::flowing outward-curled hair ends::,

1.4::turquoise headband, turquoise ribbon hair ornament::,

1.5::large turquoise bow at the back of the head::,`,
    outfitPrompt: `fitted elegant white sleeveless dress, strapless sweetheart neckline, delicate thin crisscross straps across the upper chest, narrow sheer white fabric trim at the base of the neck, fitted bodice, knee-length flared layered skirt, voluminous flowing white fabric, intricate lace trim, delicate embroidered floral patterns, white frilled lace underskirt, white ruffled lace lining visible beneath the skirt,

enormous flowing draped arm shawl, turquoise draped fabric, long trailing fabric panels, wide flowing translucent cape-like garment, ornate decorative patterns, subtle yellow-green accents, intricate ornamental motifs,

ribbon tied at the back of the neck, turquoise fabric accents,

elegant pointed high heels, dark muted plum shoes, jade-green ankle straps, small jade-green ankle bows,`,
    negativePrompt: `dark skin, tanned skin, short hair, medium hair, short bangs, blunt bangs, straight bangs, center-parted bangs, split bangs, symmetrical bangs, slicked-back hair, straight flat hair, thin hair, flat crown, short sidelocks, short back hair, bob cut, ponytail, high ponytail, twin tails, pigtails, braided hair, multiple buns, double bun, messy tangled hair, hair covering entire face, missing hair ornaments, missing headband, missing ribbon, extra hair accessories`,
},
{
    id: "kb",
    name: "金蛇",
    furigana: "きんじゃ",
    image: "/images/characters/kb.webp",
    category: "【ペアあり】",
    description: `身長：178cm`,

    profile: [
      { label: "NAME", value: "金蛇" },
      { label: "AGE", value: "26" },
      { label: "GENDER", value: "男" },
      { label: "SPECIES", value: "アルビノニシキヘビ" },
    ],

    prompt: `adlut male, messy tied-up hair, loose high bun, short messy ponytail, layered black hair silhouette, long face-framing side locks, 1.5::long loose sidelocks::, asymmetrical strands,

2::pale golden yellow and ivory white hair, irregular yellow and white color patterns, snake-inspired hair coloration::,

androgynous masculine face, refined facial features, small face, long thin eyebrows, very thin eyebrows, straight eyebrows,

1.5::narrow half-lidded eyes, jito-me, thin eyes, straight outer eye corners, elongated outer eyelashes, long trailing eyelashes, small visible irises::,

heterochromia, vertical slit pupils, 2::right eye with black sclera and red iris::, 2::left eye with white sclera and golden iris::,

straight horizontal mouth, neutral straight lips, flat mouth line, expressionless mouth, relaxed lips, no smile, no frown, neutral lip corners, no mouth curvature,

1.5::cool-toned pale white skin::, human skin, subtle iridescent snake scales, scattered small snake scales, glossy scales on cheeks, neck and body, irregular scale patches, pearlescent scale reflections, shimmering golden-white scales,

180cm tall, 8-head-tall proportions, small head, long limbs, slender build, elongated body proportions,

multiple ear piercings, multiple black metal earrings, multiple silver ear cuffs, industrial ear jewelry, chain accessories, metal hardware,

(舌)

1.3::long snake tongue, elongated tongue, forked tongue, deeply split tongue tip, two pointed tongue tips, bifurcated tongue, serpent-like tongue::,`,
    outfitPrompt: `black cropped oversized utility jacket, loose structured jacket, high collar, black inner top, exposed midriff, low-rise black cargo pants, extremely baggy pants, multiple oversized cargo pockets, layered straps, hanging belts, metal buckles, metal rings, eyelets, zipper details, distressed black fabric, heavy fabric, multiple utility straps, black belt, industrial punk fashion, techwear, dark streetwear,`,
    negativePrompt: ``,
},
{
    id: "siro",
    name: "白",
    furigana: "しろ",
    image: "/images/characters/siro.webp",
    category: "【ペアあり】",
    description: `身長：162cm`,

    profile: [
      { label: "NAME", value: "白" },
      { label: "AGE", value: "26" },
      { label: "GENDER", value: "女" },
      { label: "SPECIES", value: "乳牛" },
    ],

    prompt: `adult female, 1.5::pale porcelain skin, delicate face, vintage pink eyes, muted pink beige eyes, half-lidded almond eyes, glossy eye highlights, subtle blush, soft lips, sleepy alluring gaze::, 1.5::glossy skin, glittering skin::,

2.0::small dairy cow horns growing from the top sides of the head, short upward-curving horns::,

1.7::low-set ponytail, nape-level hair tie, long black ponytail reaching mid-thigh, sleek flowing ponytail::, 1.5::smooth layered strands, naturally tapered hair ends, dusty pink highlight streaks, asymmetrical side-swept bangs covering one eye, short chin-length side locks, glossy hair::,

2.5::pair of cow ears replacing human ears, low side-mounted ears at normal human ear position, extending horizontally outward, elongated broad ears, solid black short fur, black inner ears, no human ears, no ears on top of the head::, 1.5::one ear with distinct white cow patches, black-and-white spotted pattern::, 1.4::one orange livestock identification ear tag attached to a single ear, small rectangular plastic ear tag with a punched hole::,

1.5::mature voluptuous figure, overwhelmingly full bust, explosive breast volume, hyper-bulging bust, deep prominent cleavage, tight narrow waist, pronounced hourglass figure, smooth feminine curves::,

long black cow tail, black tuft at tail tip,`,
    outfitPrompt: `lack sleeveless dress, thin shoulder straps, low square neckline, oversized off-ethnic patterned cardigan, dark brown and bronze geometric and floral motifs, off-the-shoulder fit, open front, long balloon sleeves, chunky vertical ribbing, elegant black high heels, pointed-toe stiletto pumps, slender high heels,`,
    negativePrompt: `high ponytail, high-set ponytail, mid-height ponytail, topknot, bun, double buns, half-up hairstyle, crown ponytail, elevated hair tie, human ears, visible ears, ears, earlobes, outer ears, ear details`,
},
{
    id: "ian",
    name: "イアン",
    image: "/images/characters/ian.webp",
    category: "【ペアあり】",
    description: `身長：188cm
牧場の管理人`,

    profile: [
      { label: "NAME", value: "イアン" },
      { label: "AGE", value: "25" },
      { label: "GENDER", value: "男" },
      { label: "SPECIES", value: "犬(アクバシュ)" },
    ],

    prompt: `adult male, anime male character, very tall, gigantic muscular build, massive imposing physique, exaggerated masculine musculature, extremely broad shoulders, massive upper body, thick muscular torso, huge barrel chest, massive rounded well-defined pectoral muscles, deep chest definition, prominent clearly defined clavicles, thick muscular neck, bulky trapezius muscles, massive deltoids, huge biceps, thick triceps, powerful muscular arms, thick veiny forearms, large muscular hands, broad muscular back,

mature handsome man, exceptionally handsome masculine face, refined masculine beauty, elegant male facial features, unmistakably masculine, subtly rugged charm, mature adult male facial anatomy, broad masculine face, solid facial structure, strong defined jawline, angular cheekbones, moderately prominent brow ridge, thick eyebrows,

2::medium-sized narrow slightly drooping eyes::, gentle downward-slanting outer corners, luminous eyes, bright sparkling eye catchlights, pure white upper and lower eyelashes, deep vivid dark sapphire-blue eyes, well-balanced facial proportions, symmetrical facial features, straight elegant nose bridge, well-shaped nose, refined nose tip, naturally defined lips,

stylish rectangular glasses, thin dark frames, clear lenses,

1.7::very fair porcelain-white skin, ivory skin tone::, luminous fair skin, subtle pink blush on cheeks,

fluffy voluminous short white curly hair, tousled layered hair, side-swept comma bangs with exposed forehead, fluffy curled fringe, messy bangs, asymmetrical side part, soft curls framing the face, bright sky-blue and light pastel pink hair highlights,

soft fluffy white floppy dog ears with folded tips, multiple silver ear piercings, small silver earrings, short thick bushy white canine tail,`,
    outfitPrompt: `light blue oversized denim jacket, beige contrasting collar, unbuttoned jacket, 1.7::loose-fitting white crew-neck T-shirt::, relaxed neckline, 1.3::soft draping fabric::, beige straight-leg chinos, black leather belt, adidas sneakers, wristwatch, casual vintage menswear`,
    negativePrompt: ``,
},
{
    id: "kw",
    name: "熊雄",
    furigana: "くまお",
    image: "/images/characters/kw.webp",
    category: "【ペアあり】",
    description: `身長：193cm
元軍人、殺し屋`,

    profile: [
      { label: "NAME", value: "熊雄" },
      { label: "AGE", value: "37" },
      { label: "GENDER", value: "男" },
      { label: "SPECIES", value: "人間" },
    ],

    prompt: `1.7::adult male, tall, 200cm tall, 9-head-tall proportions, nine-head figure, elongated legs, long legs, balanced anatomical proportions, imposing masculine physique, exceptionally broad shoulders and back, thick neck, massive sturdy build, naturally bulky dense muscles::, 2.2::broad thick chest, large full pectorals, thick rounded chest volume, prominent trapezius and deltoids, wide lats, thick muscular upper back, massive muscular arms, thick forearms, large strong hands, heavy muscular frame, solid athletic proportions, substantial upper body mass::

1.4::slightly elongated masculine face shape, mature masculine facial features::, 1.7::smooth and even lower face, subtle jawline, smooth lower facial contours::, 1.4::masculine facial features, defined square jaw, straight nose, well-defined nose bridge, thick dark eyebrows, slightly messy eyebrows::,

1.6::orange eyes, overall drooping eyes, small narrow eyes, narrow half-lidded eyes, naturally drooping upper eyelids, sharp languid gaze, deep-set eyes, slightly upturned outer eye corners, tarema eyes::,

1.5::deep dark brown hair, short layered hair, slightly tousled textured hair, natural asymmetrical side part, curved comma-shaped side-swept fringe, eyebrow-length diagonal bangs, partially exposed forehead, subtly fuller sides and temples, soft crown volume, short tapered sides::,

1.5::wide mouth, naturally defined lips, slightly fang-shaped lips::`,
    outfitPrompt: `2::black tailored coat, dark turtleneck, black clothing, black tailored trousers, black leather dress shoes, professional hitman outfit::,`,
    negativePrompt: `prominent mouth corner muscles, exaggerated mouth corner definition, deep creases around mouth corners, harsh shadows around mouth, deep nasolabial folds, marionette lines,`,
},

].map((character, index) => ({
  ...character,
  number: String(index + 1).padStart(3, "0"),
}));
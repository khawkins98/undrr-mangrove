import { P } from "./Paragraph";

const getCaptionForLocale = (locale) => {
  switch (locale) {
    case "english":
      const engText = {
        detail:
          "Large paragraph lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porttitor mauris quis pulvinar ultrices. Quisque eget placerat odio, vel viverra ipsum. Sed pharetra varius dignissim. Cras varius luctus est sit amet sollicitudin. Donec eget dui eget nulla luctus ultrices. Sed eu turpis quam. Nulla facilisi.",
      };
      return engText;
    case "arabic":
      const arabicText = {
        detail:
          "فقرة كبيرة lorem ipsum dolor sit amet، consectetur adipiscing elit. Pellentesque porttitor mauris quis pulvinar ultrices. Quisque eget placerat odio، vel viverra ipsum. Sed pharetra varius gentissim. Cras varius luctus est sit amet sollicitudin. Donec eget dui eget nulla luctus ultrices. Sed eu Turpis quam. نولا فاسيليسي.-",
      };
      return arabicText;
    case "burmese":
      const burmeseText = {
        detail:
          "ကြီးမားသောစာပိုဒ် lorem ipsum dolor sit amet, consectetur adipiscing elit ။ Pellentesque porttitor mauris quis pulvinar ultrices Quisque eget placerat odio, vel viverra ipsum ။ Sed pharetra varius dignissim ဖြစ်သည်။ Cras varius luctus est amet sollicitudin ထိုင်သည်။ Donec eget dui eget nulla luctus ultrices ။ Sed eu turpis quam ။ Nulla facilisi",
      };
      return burmeseText;
    case "japanese":
      const japaneseText = {
        detail:
          "大きな段落はインターネット自体の苦痛です。 Pellentesque porttitor mauris quis pulvinarultrices。誰もが本物、または漫画自体を嫌う必要があります。しかし、矢筒は資産です。悲しみは大変なことです。住宅の必要性が痛みを必要としないまで。しかし、どれほど素晴らしくて醜い。複雑なことは何もありません。",
      };
      return japaneseText;
    default:
      return {
        detail:
          "Large paragraph lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porttitor mauris quis pulvinar ultrices. Quisque eget placerat odio, vel viverra ipsum. Sed pharetra varius dignissim. Cras varius luctus est sit amet sollicitudin. Donec eget dui eget nulla luctus ultrices. Sed eu turpis quam. Nulla facilisi.",
      };
  }
};

export default {
  title: "Components/Typography/P",
  component: P,
};

export const DefaultP = {
  render: (args, { globals: { locale } }) => {
    const caption = getCaptionForLocale(locale);
    return <P label={caption.detail}></P>;
  },

  name: "P",
};

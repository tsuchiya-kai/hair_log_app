/**
 * TODO:
 * CSSをある程度書いてから気づいたのだが、CSS ModuleとRSCSSを組み合わせると
 * RSCSSにおけるvariantがうまく機能しないことに気づいた。
 * そのため、本来variantに持たせるような責務をutilitiesで代用している。
 * 時間がないためのwork aroundなのであとで見直すべき。
 *
 * こちらは不要になりました🎉
 * TODO: あとで全体を確認して消す
 */
export default function toggleVisible(flag: boolean) {
  return `_hidden ${flag ? "_show" : ""}`;
}

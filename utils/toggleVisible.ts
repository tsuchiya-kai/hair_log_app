export default function toggleVisible(flag: boolean) {
  return `_hidden ${flag ? "_show" : ""}`;
}

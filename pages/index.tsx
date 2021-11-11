import Link from "next/link";

export default function TopPage() {
  return (
    <>
      <div>トップです</div>
      <h1>h1テスト</h1>
      <h2>h2テスト</h2>
      <Link href="/">テスト</Link>
      <li>
        {[...Array(3)].map((_, index) => {
          const temporaryId = index + 1;
          return (
            <Link href={`/beautician/${temporaryId}`} key={index}>
              <a>美容師{temporaryId}</a>
            </Link>
          );
        })}
      </li>
    </>
  );
}

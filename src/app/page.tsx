import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-title bg-gradient-to-r from-primary-600 to-accent bg-clip-text text-transparent mb-4">
          Graphic Record Sharing
        </h1>
        <p className="text-xl text-gray-600 font-hand max-w-2xl mx-auto">
          グラフィックレコーディング風HTMLインフォグラフィックを投稿・共有できるプラットフォーム
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="card p-6">
          <h2 className="text-2xl font-bold font-title text-primary-700 mb-4">閲覧する</h2>
          <p className="mb-4 font-hand">様々なグラフィックレコーディング風インフォグラフィックを閲覧できます。</p>
          <Link href="/posts" className="btn btn-primary inline-block">
            作品を見る
          </Link>
        </div>
        <div className="card p-6">
          <h2 className="text-2xl font-bold font-title text-primary-700 mb-4">投稿する</h2>
          <p className="mb-4 font-hand">あなたの作品をHTMLで投稿して、みんなと共有しましょう。</p>
          <Link href="/posts/create" className="btn btn-accent inline-block">
            作品を投稿する
          </Link>
        </div>
      </div>

      <section className="card p-8 mb-12">
        <h2 className="text-2xl font-bold font-title text-primary-700 mb-4 text-center">
          グラフィックレコーディング風HTMLインフォグラフィックとは？
        </h2>
        <div className="prose max-w-none font-hand">
          <p className="mb-4">
            グラフィックレコーディングは、会議やプレゼンテーションなどの内容を、リアルタイムで視覚的に記録する手法です。
            このサイトでは、そのような手書き風の視覚表現をHTML/CSSで実現したインフォグラフィックを共有できます。
          </p>
          <p className="mb-4">
            手書き風のフォント、イラスト、図形を使って情報を視覚的に整理し、わかりやすく伝えることができます。
          </p>
        </div>
      </section>

      <section className="card p-8">
        <h2 className="text-2xl font-bold font-title text-primary-700 mb-4 text-center">
          使い方
        </h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
          <div className="flex-1 rounded-lg border border-gray-200 p-4">
            <div className="text-xl font-bold text-accent mb-2 flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent text-white">1</span>
              アカウント作成
            </div>
            <p className="font-hand">GitHubアカウントでログインするだけで簡単に始められます。</p>
          </div>
          <div className="flex-1 rounded-lg border border-gray-200 p-4">
            <div className="text-xl font-bold text-accent mb-2 flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent text-white">2</span>
              HTMLを作成
            </div>
            <p className="font-hand">グラフィックレコーディング風のHTMLインフォグラフィックを作成します。</p>
          </div>
          <div className="flex-1 rounded-lg border border-gray-200 p-4">
            <div className="text-xl font-bold text-accent mb-2 flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent text-white">3</span>
              投稿・共有
            </div>
            <p className="font-hand">作成したHTMLを投稿して、みんなと共有しましょう。</p>
          </div>
        </div>
      </section>
    </div>
  );
}

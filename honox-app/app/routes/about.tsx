export default function Top() {
  return (
    <div className="my-4">
      <div className="flex flex-col items-center my-4">
        <img src="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Deer/Flat/deer_flat.svg" alt="kamoshika" className='w-16 h-16 mb-2' />
        <h1 className="text-3xl font-bold text-center">このブログについて</h1>
        <div className="my-2"></div>
      </div>
      <div className="bg-white p-4 rounded-lg">
        <p className="mt-2">このブログは、HonoXを使用して作成した個人ブログです。技術的・私的な内容を共有していきます。</p>
        <h2 className="mt-4 text-xl font-bold">自己紹介</h2>
        <p className="mt-2">
          新卒未経験で 2022年4月 に現在の会社（独立系SIer）に入社しました。<br />
          技術領域は広く浅く取り扱ってますが、業務では主にAWSやバックエンドを担当しています。<br />
          このブログはフロントエンド開発の経験を積むために開設しました。
        </p>
        <h3 className="mt-4 text-lg font-semibold">経歴</h3>
        <table className="mt-2 w-full">
          <thead>
            <tr>
              <th className="border px-4 py-2">年月</th>
              <th className="border px-4 py-2">詳細</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">2022年4月</td>
              <td className="border px-4 py-2">現在の会社に入社</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">2022年10月</td>
              <td className="border px-4 py-2">基本情報技術者試験合格</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">2023年10月</td>
              <td className="border px-4 py-2">応用情報技術者試験合格</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">2024年1月</td>
              <td className="border px-4 py-2">AWS認定ソリューションアーキテクト – アソシエイト合格</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">2024年10月</td>
              <td className="border px-4 py-2">データベーススペシャリスト試験合格</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">2024年12月</td>
              <td className="border px-4 py-2">AWS認定ソリューションアーキテクト – プロフェッショナル合格</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">2025年1月</td>
              <td className="border px-4 py-2">本ブログを開設</td>
            </tr>
          </tbody>
        </table>
        <p>（書ける内容が資格のことばかりだったので、今後はOSS活動とかしてみたいです。）</p>
        <h3 className="mt-4 text-lg font-semibold">趣味</h3>
        <p className="mt-2">プログラミングの他に、食べることやゲームが好きです。あとキーボード等のガジェットも大好きです。</p>
      </div>
    </div>
  )
}
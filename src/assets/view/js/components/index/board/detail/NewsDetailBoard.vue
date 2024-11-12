<template>
  <div>
    <title-label
      :title="$t('news.title')"
      :sub-title="$t('news.supplement')"
    ></title-label>
    <news-detail-card
      :news-title="'グランピングKAWASAKI三周年イベント'"
      :news-date="'2024/07/07'"
      :news-article="'いつもお世話になっているオーナーのために、今回もメンバーみんなでお祝い！そしてキャンプを堪能させて頂きました！これからもお世話になります！！'"
      :news-author="'フジ'"
      :news-picture="'IMG_9013.jpg'"
    ></news-detail-card>
    <news-detail-card
      :news-title="'ことこと列車お出迎え！'"
      :news-date="'2024/07/07'"
      :news-article="'福岡・大分ディスティネーションキャンペーン期間中、ことこと列車をご利用の皆様！炭坑節によるお出迎えはいかがでしたでしょうか？短い時間ではございましたが、一緒に炭坑節を踊れてとても楽しかったです！ことこと列車ご利用の際にもしかしたら、またお出迎えをすることがあるかも...またお会いできる日を楽しみにしております！！'"
      :news-author="'フジ'"
      :news-picture="'IMG_9014.jpg'"
    ></news-detail-card>
    <news-detail-card
      :news-title="'ちょっくらじおにお邪魔してきました!'"
      :news-date="'2024/04/11'"
      :news-article="'月咲SEEDが久々にラジオにゲスト出演してきました！！ラジオ聴いてない...って方はYouTubeで「ちょっくらじお」で検索！！月咲SEEDボーカルのMEGが生歌を披露してくれてるぞ！'"
      :news-author="'フジ'"
      :news-picture="'183857.jpg'"
    ></news-detail-card>
    <news-detail-card
      :news-title="'夏祭り2連チャン！！'"
      :news-date="'2023/08/31'"
      :news-article="'8月26日は中央校区夏祭り、後藤寺夏祭りのダブル出演！！子供達も暑い中素晴らしいパフォーマンス！！久しぶりの開催、本当に楽しかったです！！'"
      :news-author="'フジ'"
      :news-picture="'IMG_6867.jpg'"
    ></news-detail-card>
    <news-detail-card
      :news-title="'4年ぶり、大町町夏祭り！！'"
      :news-date="'2023/08/31'"
      :news-article="'4年ぶりに大町に行ってきました！だーゆんさん(Pinky Sky)やひぜんりささんのライブ本当に素敵でした！月咲SEEDも負けず劣らず、応援と炭坑節披露してきました！また来年開催できる事を楽しみにしてます！！！！'"
      :news-author="'フジ'"
      :news-picture="'IMG_6496.jpg'"
    ></news-detail-card>
    <news-detail-card
      :news-title="'久々の春日神社神幸祭！'"
      :news-date="'2023/05/27'"
      :news-article="'久々の春日神社神幸祭でのステージ！超楽しかった！マスクなしで大きな円をまた作る事ができました！今後も出演依頼がたくさんあるので、体力作ってまたがんばるぞ！！'"
      :news-author="'フジ'"
      :news-picture="'IMG_5813.jpg'"
    ></news-detail-card>
    <news-detail-card
      :news-title="'福寿会 総会でパフォーマンス披露'"
      :news-date="'2023/04/09'"
      :news-article="'田川市の上本町公民館で行われました「福寿会 総会」にて、パフォーマンス披露をさせて頂きました！今回は、DIGGY団メインでのパフォーマンス。みんな、元気でカッコいいパフォーマンスを披露してくれました！福寿会の皆様、大きな拍手とお弁当をありがとうございます！'"
      :news-author="'フジ'"
      :news-picture="'IMG_5516.jpg'"
    ></news-detail-card>
    <news-detail-card
      :news-title="'月咲SEED 今年で6周年目！'"
      :news-date="'2023/04/01'"
      :news-article="'お久しぶりの更新。今年で月咲SEEDもついに6年目を迎えました。コロナ禍の影響で出演数が激減し、SNSの投稿も控える時間が続きました。今年はコロナも落ち着き、多くのお祭りやイベントが数年ぶりに開催されるそうです。我々、月咲SEEDも積極的に活動を再開できる年になるようメンバー共々頑張りたいと思います。2023年、よろしくお願いいたします！'"
      :news-author="'フジ'"
      :news-picture="'IMG_4976.jpg'"
    ></news-detail-card>
    <news-detail-card
      :news-title="'HPリニューアルしました！'"
      :news-date="'2022/08/15'"
      :news-article="'こんにちは！フジです。しばらく更新をしておりませんでしたHPを今回大幅に改良致しました！新たにニュース欄を追加し、これまでよりもHPの更新頻度をあげていこうと思います。まだまだ、活動が難しいご時世ですがこれからも月咲SEEDをよろしくお願い致します。'"
      :news-author="'フジ'"
      :news-picture="'IMG_3513.jpg'"
    ></news-detail-card>
    <news-detail-card
      :news-title="'グランピングKAWASAKI一周年イベント'"
      :news-date="'2022/07/16'"
      :news-article="'月咲SEEDメンバーがいつもお世話になっているキャンプ場「グランピングKAWASAKI」の一周年を記念して、炭坑節を披露してきました！キャンプに来ていたお客様と一緒に炭坑節を踊ることができ、とても盛り上がりました。お越しくださった皆様、そしてキャンプ場オーナー、本当にありがとうございます。そしてこれからも利用させていただきますので今後ともよろしくお願い致します！'"
      :news-author="'フジ'"
      :news-picture="'IMG_3511.jpg'"
    ></news-detail-card>
  </div>
</template>

<script>

import TitleLabel from '../../../../../../common/atoms/TitleLabel'
import NewsDetailCard from '../../../../../../common/molecules/card/detail/NewsDetailCard'

export default {
  name: 'NewsDetailBoard',
  components: {
    TitleLabel,
    NewsDetailCard
  }
}
</script>

<style scoped>

</style>

# rime-cantonese 重構

## 2022-3-11

喺 `20211125_pre_annotation/round_2/released.csv` 度嘅文件，係今次發佈嘅版本，融合咗原有 rime-cantonese 人工篩選出嚟嘅非垃圾詞，同埋冚唪唥仲有粵典詞表嘅詞。

下一步嘅工作有：

1. （完成）`20211125_pre_annotation/round_2/released.csv` 按照常見錯別字表同語氣詞表修正用字
1. 將原有詞表入面嘅長詞條 `20211125_pre_annotation/remain_long.csv` 人工篩選同清洗。
1. 將呢啲篩選出嚟嘅詞條修正用字，然後同第 1 步得到嘅溝埋
1. 將溝埋得到嘅詞條按照長度同關鍵字將短句抽出嚟，然後人工將唔係短句嘅放返

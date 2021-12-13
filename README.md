# rime-cantonese 詞彙表

本倉庫用嚟分類分類存放 [rime-cantonese](https://github.com/rime/rime-cantonese)嘅詞彙源。倉庫目前處於建設中，`20210905`入面係 2021 年 9 月 5 號版碼表入面嘅所有詞條，未完成分類整理。喺整理完成之後會搬出嚟最層。

目前 `two.txt` `three.txt` `four.txt` `long.txt` 都係從`phrase.dict.yaml`入入面抽出嚟嘅詞條，按照字數分成唔同嘅文件，`org.txt`係原先已經分好咗嘅詞條。呢幾個文件嘅詞條加起身就係當日版本嘅 `phrase.dict.yaml` 入面所有詞條。

## 20210905 文檔解釋

注意：喺每次 commit 之前都要保證詞條冇重複，所有文檔嘅詞條加起身就係原碼表入面嘅所有詞條

- `/jyutping` 標有粵拼嘅詞條
    - `/jyutping/english.txt` 來源 `jyut6ping3.letter.dict.yaml` 入面嘅純英語詞彙，全部都冇漢字
    - `/jyutping/mixed.txt` 來源 `jyut6ping3.letter.dict.yaml` 入面同時含有漢字同英語字母嘅詞條
- `/no_jyutping` 
    - 入面幾個文件都係按照字數或者命名規則分出嚟嘅詞條。


## 20211125_pre_annotation

而家要將 `rime-cantonese` 碼表入面嘅有效詞彙都分出嚟，作為碼表上游詞表。碼表入面嘅 `.lettered.dict.yaml` 同埋 `jyut6ping3.maps.dict.yaml` 都係非常用詞條，所以 `source` 入面放凈係放咗 `.dict.yaml` 同埋 `phrase.dict.yaml` 兩個文件。

呢兩個文件唯一區別係一個有粵拼另一個冇。首先第一步就係將呢兩個文件入面嘅詞條合併起身，成為 `source.tsv`。
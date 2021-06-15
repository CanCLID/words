/**
 * 詞庫製作與校對人員
 * Henry Chan (@hfhchan)
 */

const fs = require("fs");
const data = require('./hk-mtr-data.js');

const output = new Map();

const 港鐵路線現行路線 = [...Object.keys(data.currentLines), ...Object.keys(data.xrl)];
output.set("港鐵路線 (現行路線)", 港鐵路線現行路線);

const 港鐵路線舊路線 = [...Object.keys(data.previousLines), ...data.kcrNames];
output.set("港鐵路線 (舊路線)", 港鐵路線舊路線);

const 港鐵項目 = data.mtrProjects;
output.set("港鐵項目", 港鐵項目);

Object.keys(data.mtrBuildings).forEach(key => {
	output.set("港鐵" + key, [
		key,
		"港鐵" + key,
		...data.mtrBuildings[key]
	]);
})

output.set("港鐵站（-站）", data.currentStations.map(station => station + "站"));
output.set("港鐵站（-港鐵站）", data.currentStations.map(station => station + "港鐵站"));
output.set("港鐵站（-鐵路站）", data.currentStations.map(station => station + "鐵路站"));
output.set("港鐵站（-火車站）", data.currentLines["東鐵綫"].map(station => station + "火車站"));
output.set("港鐵站（-東鐵站）", data.currentLines["東鐵綫"].map(station => station + "東鐵站"));
output.set("港鐵站（-西鐵站）", data.previousLines["西鐵綫"].map(station => station + "西鐵站"));
output.set("港鐵站（-馬鐵站）", data.previousLines["馬鐵綫"].map(station => station + "馬鐵站"));

let txt = '';
[...output.keys()].forEach(key => {
	txt += '## ' + key + "\n"
	output.get(key).forEach(value => {
		txt += value + "\n"
	})
	txt += "\n"
});

fs.writeFileSync(__dirname + "/hk-mtr-data.yaml", txt);

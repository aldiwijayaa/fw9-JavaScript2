function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray){
  if (nilaiAwal > nilaiAkhir) return 'nilai akhir harus lebih besar dari nilai awal';

  if (dataArray.length <= 5) return 'jumlah nilai didalam dataArray harus lebih dari 5';

  let newDataArray = [];

  dataArray.map(item => {
    if(item > nilaiAwal && item < nilaiAkhir){
      newDataArray.push(item)
    }
  })

  return newDataArray.sort((a,b) => {
    return a-b
  })
}

console.log(seleksiNilai(5,20, [2,25, 4, 14,17,30,8]))
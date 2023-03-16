import mobil from '../model/mobil.js';

export const getMobil = (req, res) => {
  res.json({
    status: 200,
    values: mobil,
  });
};

export const postMobil = (req, res) => {
  const { id, nama } = req.body;

  let index = mobil.findIndex((i) => i.id === id || i.nama === nama);
  const mobilId = mobil.map((i) => i.id);
  const newId = Math.max(...mobilId) + 1;
  if (index === -1) {
    mobil.push({ id: newId, ...req.body });

    res.json({
      status: 'ok',
      values: mobil,
    });
  } else {
    res.json({
      status: 'error',
      message: 'Data sudah ada',
    });
  }
};

export const putMobil = (req, res) => {
  const { id, nama, merk, harga } = req.body;

  let index = mobil.findIndex((i) => i.id === id);
  const mobilId = mobil.map((i) => i.id);
  const newId = Math.max(...mobilId) + 1;
  if (index !== -1) {
    mobil.splice(index, 1, req.body);
    res.json({
      status: 'ok',
      values: mobil,
    });
  } else {
    mobil.push({
      id: newId,
      nama: nama,
      merk: merk,
      harga: harga,
    });
    res.json({
      status: 'ok',
      message: 'Data mobil berhasil di update',
      values: mobil,
    });
  }
};

export const patchMobil = (req, res) => {
  const { id, nama, merk, harga } = req.body;

  let index = mobil.findIndex((i) => i.id === id);

  if (index !== -1) {
    let updateData = mobil.filter((i) => i.id === id);
    if (id !== undefined) updateData[0].id = id;
    if (nama !== undefined) updateData[0].nama = nama;
    if (merk !== undefined) updateData[0].merk = merk;
    if (harga !== undefined) updateData[0].harga = harga;

    mobil.splice(index, 1, updateData[0]);

    res.json({
      status: 'OK',
      message: `Data mobil ${updateData[0].nama} berhasil di update`,
      values: mobil,
    });
  } else {
    res.json({
      status: 'error',
      message: 'data tidak ditemukan',
    });
  }
};

export const deleteMobil = (req, res) => {
  const { id } = req.body;

  let index = mobil.findIndex((i) => i.id === id);

  mobil.splice(index, 1);

  res.json({
    status: 'OK',
    message: `Data mobil berhasil di hapus`,
  });
};


for (let i = 40; i < 10000; i++) {
    const ddl = `INSERT INTO METADATADETAIL (metadataId, systemId, metaDataDetailId, visibilityFlag) VALUES ('SystemDef', 'modeler', 'test${i}', 'Y');`
    console.log(ddl);
}
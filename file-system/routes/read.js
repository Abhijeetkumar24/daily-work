const express = require('express');
const fs = require('fs');
const router = express.Router();

router.get('/', (req, res) => {
  const backupFolderPath = './backup';
  const mergedFiles = fs.readdirSync(backupFolderPath);

  if (mergedFiles.length === 0) {
    return res.status(404).send('No merged files found in the backup folder.');
  }

  const latestMergedFile = mergedFiles[mergedFiles.length - 1];
  const mergedFilePath = `${backupFolderPath}/${latestMergedFile}`;

  try {
    const mergedFileContent = fs.readFileSync(mergedFilePath, 'utf8');
    res.send(mergedFileContent);
  } catch (error) {
    res.status(500).send('Error reading merged file.');
  }
});

module.exports = router;

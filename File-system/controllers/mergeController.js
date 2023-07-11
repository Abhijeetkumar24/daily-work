const fs = require('fs');

exports.merge = (req, res) => {
  const file1Path = './uploads/txt1.txt';
  const file2Path = './uploads/txt2.txt';
  const backupFolderPath = './backup';

  try {
    const file1Content = fs.readFileSync(file1Path, 'utf8');
    const file2Content = fs.readFileSync(file2Path, 'utf8');
    const mergedContent = file1Content + file2Content;

    const timestamp = new Date().getTime();
    const mergedFileName = `merged_${timestamp}.txt`;
    const mergedFilePath = `${backupFolderPath}/${mergedFileName}`;

    fs.writeFileSync(mergedFilePath, mergedContent);

    res.send('Files merged successfully.');
  } catch (error) {
    res.status(500).send('Error merging files.');
  }
};

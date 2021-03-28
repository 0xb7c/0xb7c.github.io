/**
 * Runs after build of abell
 * @param {ProgramInfo} programInfo
 */
function afterBuild(programInfo) {
  fs.writeFileSync(
    path.join(programInfo.abellConfig.outputPath, 'after-build.txt'),
    'This is added from after build'
  );
}

module.exports = { afterBuild };

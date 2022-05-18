export default {
  // STAGING environment
  // pkEndpoint: 'https://staging-api.patchkit.net/1',
  // uploadEndpoint: 'https://staging.patchkit.waw.pl/1',
  
  // PRODUCTION environment
  endpoint: 'https://49ars1jq3b.execute-api.us-west-2.amazonaws.com/prod',
  pkEndpoint: 'https://api2.patchkit.net/1',
  uploadEndpoint: 'https://api.patchkit.net/1',

  maxFileSize: 1073741824 * 10, // 10 GiB
  exeSearchDepth: 2,
  chunkSize: 1048576 * 10, // 10 MiB
  chunkUploadRetries: 0,
}
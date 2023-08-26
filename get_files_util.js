async function get_files(folderId) {
    let response;
    try {
      response = await gapi.client.drive.files.list({
        pageSize: 10,
        fields: "nextPageToken, files(id, name,webContentLink)",
        q: `'${folderId}' in parents`, // This line sets the folder as the parent
      });
    } catch (err) {
      return [err.message,false];
    }
    const files = response.result.files;
    if (!files || files.length == 0) {
      return ['No Files Found',false];
    }
    return [files,true]
}
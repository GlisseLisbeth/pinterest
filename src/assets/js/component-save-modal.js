$('#btn-save').on('click', ()=>{
  $.get("https://api.pinterest.com/v1/pins/523473156678884261/?access_token=ATLVkpU1AzU-WC0DWQStYpu4HiB_FM6Kk0cL9EhEItzOC6A2WgAAAAA&fields=id%2Clink%2Cnote%2Curl%2Cattribution%2Cboard%2Ccolor%2Ccounts%2Ccreated_at%2Ccreator%2Cimage%2Coriginal_link",(data)=>{
      console.log(data);
      state.pin = data.data.image.original.url;
      console.log(state.pin);
    });
})

$(document).ready(function(){$('#pwShow').on('click',function(){var passInput=$("#loginPassword");if(passInput.attr('type')==='password'){$("#pwShow").attr('class','fa fa-eye-slash pw-show sfx-navbar-text');passInput.attr('type','text');}else{$("#pwShow").attr('class','fa fa-eye pw-show sfx-navbar-text');passInput.attr('type','password');}});});
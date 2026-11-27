// Public site settings only. Never put training backups or private data here.
export const site = {
 title:'ade的个人博客', author:'ade', description:'记录生活里的片段，留住学习中的思考。',
 avatar:'', // Optional bundled image: /exercise/media/avatar.webp
 phrases:['慢慢写，慢慢生长。','把日子过得具体，把喜欢留在这里。','保持好奇，继续向前。'],
 socials:[{label:'GitHub',url:'https://github.com/82wd'}],
 friends:[] as {name:string,url:string,description:string}[],
 // Set optional modules to true when content is ready.
 modules:{words:true,friends:true},
};

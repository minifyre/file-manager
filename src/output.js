output.desc=(state,item)=>v('span.desc',{},file.url2name(item.path))
output.icon=function(state,item)
{
	const ext=file.url2ext(item.path).toLocaleLowerCase()||'folder'

	return v('button.icon',{data:{ext,pointerup:'toggleSelect'}},ext)
}

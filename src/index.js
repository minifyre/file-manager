import file from './node_modules/files/client.js'
import silo from './node_modules/silo/index.js'
import truth from './node_modules/truth/truth.mjs'
import v from './node_modules/v/v.mjs'

const
{config,util,logic,output,input}=silo,
{curry,curryN}=util,
//@todo find & replace "custom" & "element" with proper values

//@todo make accessible from file.path.mk?
joinPath=(path,filename)=>path+(!path.match(/\/$/)?'/':'')+filename

export default silo(async function(initialState,url='/node_modules/custom-element/')
{
	// await util.mkCustomEl(url,'custom-element',custom.element)

	//@todo these should be in silo.customElement constructor... 
	// const
	// state=logic(initialState),
	// render=truth.compile(({state})=>v.render(document.body,state,output))

	// truth(state,render)

	const//@todo upstream replacement & update tests?
	path=JSON.parse(await file.path('./')),
	filePaths=JSON.parse(await file.readDir(path)).map(curryN(1,joinPath,path)),
	stats=await Promise.all(filePaths.map(async function(path)
	{//@todo file.info should return the full path of the object as well
		const info=JSON.parse(await file.info(path))

		return Object.assign(info,{path})
	}))

	console.log(stats)
})
silo.manager=class extends silo.customElement
{
	constructor(state={})
	{
		super(state,silo)
	}
}
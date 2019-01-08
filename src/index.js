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
	const
	state=logic(initialState),
	render=truth.compile(({state})=>v.render(document.body,state,output))

	// truth(state,render)
})
silo.manager=class extends silo.customElement
{
	constructor(state={})
	{
		super(state,silo)
	}
}
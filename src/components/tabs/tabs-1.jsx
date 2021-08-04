
import Tabela from "../tabela/tabela";

const Tabs1 = () => (
	<div style={{margin:100}}class="six columns">
		<h5>Serviços</h5>
		<dl class="tabs">
			<dd class="active"><a href="#simple1">Escova</a></dd>
			<dd><a href="#simple2">Manicure</a></dd>
			<dd><a href="#simple3">Pedicure</a></dd>
			<dd><a href="#simple4">Depilação</a></dd>
			<dd><a href="#simple5">Sombrancelha</a></dd>
		</dl>
		<ul class="tabs-content">
			<li class="active" id="simple1Tab">
				<Tabela />
			</li>
			<li id="simple2Tab">This is simple tab 2's content. Now you see it! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et non ex maxima parte de tota iudicabis? Item de contrariis, a quibus ad genera formasque generum.</li>
			<li id="simple3Tab">This is simple tab 3's content. It's, you know...okay. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et non ex maxima parte de tota iudicabis? Item de contrariis, a quibus ad genera formasque generum.</li>
		</ul>
	</div>


)


export default Tabs1;

<head>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	<link rel="stylesheet" href="style_testing.css">
</head>
<body>
	<table width="300px" border="1" style="border-collapse:collapse;background-color:#E8DCFF">
		<tr>
			<td width="40px">1</td>
			<td>BUDGET</td>
			<td><input class="budget" type="text" name="txt"/></td>
		</tr>
		<tr>
			<td>2</td>
			<td>DATA</td>
			<td><input class="txt" id="data" type="text" name="txt" max=500/></td>
		</tr>
		<tr>
			<td>3</td>
			<td>VOICE</td>
			<td><input class="txt" id="voice" type="text" name="txt" max=500/></td>
		</tr>
		<tr id="summation">
			<td>&nbsp;</td>
			<td align="right">Sum :</td>
			<td align="center"><span id="sum">0</span></td>
		</tr>
	</table>
	<span>
		Budget: <span id="para"></span>
	</span>
	<p>
		TestingTotal: <span id="testing"></span>
	</p>
	
	<!-- <script>
		// const selectElement = document.querySelector('#sum');
		// selectElement.addEventListener('change', (event) => {
		// 	const grabTotal = document.querySelector('#testing');
		// 	grabTotal.textContent = $(event.getTotal.value);
		// })
	</script>-->
	
	<!--TESTING-->

	<div class="card border-primary mb-3"
	style="
	padding:10px;
	margin-top:200px;">
		<div
		id="funBox"
		style="
		height:200px;
		width:552px;
		background-color:lightblue;
		text-align:center;">
	
			<span id="text-inside"
			style="
			text-align:center;
			font-size: 30;
			position: relative;
			top: 83px;">
			</span>
	
		</div>
	
		<span>
			<button id="show_txt"><strong>Show-Text</strong></button>
			<button id="hide_txt"><strong>Hide-Text</strong></button>
			<button>Button-3</button>
			<button>Button-4</button>
			<input type="text">
		</span>
	</div>
</body>



<script src="script_testing.js" defer></script>
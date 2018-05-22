
	//tes 1
	function Kendaraan(jenis, roda, merk){
		this.jenis = jenis;
		this.roda = roda;
		this.merk = merk;
		this.jalan = function(){
			console.log(jenis + ' ' + merk + ' mulai jalan');
		};
		this.log = function(){
			console.log(jenis + ' ' + 'roda ' + roda + ' merk ' + merk + ' berhasil dibuat');
		}
	}
	
	var motor = new Kendaraan('motor', 2, 'Yamaha');
	motor.log();
	var mobil = new Kendaraan('mobil', 4, 'Honda');
	mobil.log();
	
	//tes2
	function fibonacci(min, max){
		var a = min;
		var b = 1;
		console.log(min);
		console.log(b);
		for(var i = 0; i< max; i++){
			var output = b + a;
			if(output < max){
				console.log(output);
				
				a = b;
				b = output;
			}
		}
	}
	
	fibonacci(0, 500);
	
	//tes3
	var inventory = 
	[
		{
			item_id:1, warehouse_id:1, stock:10
		},
		{
			item_id:1, warehouse_id:2, stock:3
		},
		{
			item_id:1, warehouse_id:3, stock:5
		},
		{
			item_id:2, warehouse_id:3, stock:10
		},
		{
			item_id:2, warehouse_id:2, stock:4
		},
		{
			item_id:3, warehouse_id:1, stock:10
		},
		{
			item_id:4, warehouse_id:2, stock:10
		},
		{
			item_id:4, warehouse_id:3, stock:5
		}
	];
	
	var result = _(inventory)
            .groupBy(x => x.item_id)
            .map((value, key) => ({item_id: key, warehouse: value}))
            .value();
			
	console.log(result);
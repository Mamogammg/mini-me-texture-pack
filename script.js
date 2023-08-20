function handleFiles() {
  const input = document.getElementById('imageFileInput');
  const files = input.files;

  if (files.length > 0) {
    const zip = new JSZip();

    // Agregar pack.mcmeta al nivel de la raíz
    zip.file('pack.mcmeta', '{"pack":{"pack_format":1,"description":"Totems Personas"}}');

    // Agregar la imagen al lugar correcto
    const imageFile = files[0]; // Supongamos que solo se carga una imagen
    zip.folder('assets/minecraft/textures/item').file('Imagen', imageFile);

    // Agregar el archivo JSON al lugar correcto
    const jsonContent = `{
      "credit": "Made with Blockbench",
      "texture_size": [32, 32],
      "textures": {
        "1": "item/totem_of_undying"
      },
      "elements": [
		{
			"name": "head",
			"from": [6, 12, 5],
			"to": [10, 16, 9],
			"rotation": {"angle": 0, "axis": "y", "origin": [8, 0, 8]},
			"faces": {
				"north": {"uv": [6, 2, 8, 4], "texture": "#1"},
				"east": {"uv": [4, 2, 6, 4], "texture": "#1"},
				"south": {"uv": [2, 2, 4, 4], "texture": "#1"},
				"west": {"uv": [0, 2, 2, 4], "texture": "#1"},
				"up": {"uv": [4, 2, 2, 0], "rotation": 180, "texture": "#1"},
				"down": {"uv": [6, 0, 4, 2], "rotation": 180, "texture": "#1"}
			}
		},
		{
			"name": "headwear",
			"from": [5.5, 11.5, 4.5],
			"to": [10.5, 16.5, 9.5],
			"rotation": {"angle": 0, "axis": "y", "origin": [8, 0, 8]},
			"faces": {
				"north": {"uv": [14, 2, 16, 4], "texture": "#1"},
				"east": {"uv": [12, 2, 14, 4], "texture": "#1"},
				"south": {"uv": [10, 2, 12, 4], "texture": "#1"},
				"west": {"uv": [8, 2, 10, 4], "texture": "#1"},
				"up": {"uv": [12, 2, 10, 0], "rotation": 180, "texture": "#1"},
				"down": {"uv": [14, 0, 12, 2], "rotation": 180, "texture": "#1"}
			}
		},
		{
			"name": "body",
			"from": [6, 6, 6],
			"to": [10, 12, 8],
			"rotation": {"angle": 0, "axis": "y", "origin": [8, 0, 8]},
			"faces": {
				"north": {"uv": [8, 5, 10, 8], "texture": "#1"},
				"east": {"uv": [7, 5, 8, 8], "texture": "#1"},
				"south": {"uv": [5, 5, 7, 8], "texture": "#1"},
				"west": {"uv": [4, 5, 5, 8], "texture": "#1"},
				"up": {"uv": [7, 5, 5, 4], "rotation": 180, "texture": "#1"},
				"down": {"uv": [9, 4, 7, 5], "rotation": 180, "texture": "#1"}
			}
		},
		{
			"name": "jacket",
			"from": [5.75, 5.75, 5.75],
			"to": [10.25, 12.25, 8.25],
			"rotation": {"angle": 0, "axis": "y", "origin": [8, 0, 8]},
			"faces": {
				"north": {"uv": [8, 9, 10, 12], "texture": "#1"},
				"east": {"uv": [7, 9, 8, 12], "texture": "#1"},
				"south": {"uv": [5, 9, 7, 12], "texture": "#1"},
				"west": {"uv": [4, 9, 5, 12], "texture": "#1"},
				"up": {"uv": [7, 9, 5, 8], "rotation": 180, "texture": "#1"},
				"down": {"uv": [9, 8, 7, 9], "rotation": 180, "texture": "#1"}
			}
		},
		{
			"name": "left_arm",
			"from": [10, 6, 6],
			"to": [12, 12, 8],
			"rotation": {"angle": 0, "axis": "y", "origin": [8, 0, 8]},
			"faces": {
				"north": {"uv": [11, 13, 12, 16], "texture": "#1"},
				"east": {"uv": [10, 13, 11, 16], "texture": "#1"},
				"south": {"uv": [9, 13, 10, 16], "texture": "#1"},
				"west": {"uv": [8, 13, 9, 16], "texture": "#1"},
				"up": {"uv": [10, 13, 9, 12], "rotation": 180, "texture": "#1"},
				"down": {"uv": [11, 12, 10, 13], "rotation": 180, "texture": "#1"}
			}
		},
		{
			"name": "left_sleve",
			"from": [9.75, 5.75, 5.75],
			"to": [12.25, 12.25, 8.25],
			"rotation": {"angle": 0, "axis": "y", "origin": [8, 0, 8]},
			"faces": {
				"north": {"uv": [15, 13, 16, 16], "texture": "#1"},
				"east": {"uv": [14, 13, 15, 16], "texture": "#1"},
				"south": {"uv": [13, 13, 14, 16], "texture": "#1"},
				"west": {"uv": [12, 13, 13, 16], "texture": "#1"},
				"up": {"uv": [14, 13, 13, 12], "rotation": 180, "texture": "#1"},
				"down": {"uv": [15, 12, 14, 13], "rotation": 180, "texture": "#1"}
			}
		},
		{
			"name": "right_arm",
			"from": [4, 6, 6],
			"to": [6, 12, 8],
			"rotation": {"angle": 0, "axis": "y", "origin": [8, 0, 8]},
			"faces": {
				"north": {"uv": [13, 5, 14, 8], "texture": "#1"},
				"east": {"uv": [12, 5, 13, 8], "texture": "#1"},
				"south": {"uv": [11, 5, 12, 8], "texture": "#1"},
				"west": {"uv": [10, 5, 11, 8], "texture": "#1"},
				"up": {"uv": [12, 5, 11, 4], "rotation": 180, "texture": "#1"},
				"down": {"uv": [13, 4, 12, 5], "rotation": 180, "texture": "#1"}
			}
		},
		{
			"name": "right_sleve",
			"from": [3.75, 5.75, 5.75],
			"to": [6.25, 12.25, 8.25],
			"rotation": {"angle": 0, "axis": "y", "origin": [8, 0, 8]},
			"faces": {
				"north": {"uv": [13, 9, 14, 12], "texture": "#1"},
				"east": {"uv": [12, 9, 13, 12], "texture": "#1"},
				"south": {"uv": [11, 9, 12, 12], "texture": "#1"},
				"west": {"uv": [10, 9, 11, 12], "texture": "#1"},
				"up": {"uv": [12, 9, 11, 8], "rotation": 180, "texture": "#1"},
				"down": {"uv": [13, 8, 12, 9], "rotation": 180, "texture": "#1"}
			}
		},
		{
			"name": "left_leg",
			"from": [8, 0, 6],
			"to": [10, 6, 8],
			"rotation": {"angle": 0, "axis": "y", "origin": [8, 0, 8]},
			"faces": {
				"north": {"uv": [7, 13, 8, 16], "texture": "#1"},
				"east": {"uv": [6, 13, 7, 16], "texture": "#1"},
				"south": {"uv": [5, 13, 6, 16], "texture": "#1"},
				"west": {"uv": [4, 13, 5, 16], "texture": "#1"},
				"up": {"uv": [6, 13, 5, 12], "rotation": 180, "texture": "#1"},
				"down": {"uv": [7, 12, 6, 13], "rotation": 180, "texture": "#1"}
			}
		},
		{
			"name": "left_pants",
			"from": [7.75, -0.25, 5.75],
			"to": [10.25, 6.25, 8.25],
			"rotation": {"angle": 0, "axis": "y", "origin": [8, 0, 8]},
			"faces": {
				"north": {"uv": [3, 13, 4, 16], "texture": "#1"},
				"east": {"uv": [2, 13, 3, 16], "texture": "#1"},
				"south": {"uv": [1, 13, 2, 16], "texture": "#1"},
				"west": {"uv": [0, 13, 1, 16], "texture": "#1"},
				"up": {"uv": [2, 13, 1, 12], "rotation": 180, "texture": "#1"},
				"down": {"uv": [3, 12, 2, 13], "rotation": 180, "texture": "#1"}
			}
		},
		{
			"name": "right_leg",
			"from": [6, 0, 6],
			"to": [8, 6, 8],
			"rotation": {"angle": 0, "axis": "y", "origin": [8, 0, 8]},
			"faces": {
				"north": {"uv": [3, 5, 4, 8], "texture": "#1"},
				"east": {"uv": [2, 5, 3, 8], "texture": "#1"},
				"south": {"uv": [1, 5, 2, 8], "texture": "#1"},
				"west": {"uv": [0, 5, 1, 8], "texture": "#1"},
				"up": {"uv": [2, 5, 1, 4], "rotation": 180, "texture": "#1"},
				"down": {"uv": [3, 4, 2, 5], "rotation": 180, "texture": "#1"}
			}
		},
		{
			"name": "right_pants",
			"from": [5.75, -0.25, 5.75],
			"to": [8.25, 6.25, 8.25],
			"rotation": {"angle": 0, "axis": "y", "origin": [8, 0, 8]},
			"faces": {
				"north": {"uv": [3, 9, 4, 12], "texture": "#1"},
				"east": {"uv": [2, 9, 3, 12], "texture": "#1"},
				"south": {"uv": [1, 9, 2, 12], "texture": "#1"},
				"west": {"uv": [0, 9, 1, 12], "texture": "#1"},
				"up": {"uv": [2, 9, 1, 8], "rotation": 180, "texture": "#1"},
				"down": {"uv": [3, 8, 2, 9], "rotation": 180, "texture": "#1"}
			}
		}
	],
      "display": {
		"firstperson_righthand": {
			"rotation": [0, -36, 0],
			"translation": [9.5, 0, -8.75]
		},
		"firstperson_lefthand": {
			"rotation": [0, -36, 0],
			"translation": [9.5, 0, -8.75]
		},
		"fixed": {
			"rotation": [0, 180, 0]
		}
	},
      "groups": [
		{
			"name": "head",
			"origin": [0, 24, 0],
			"color": 0,
			"children": [0]
		},
		{
			"name": "headwear",
			"origin": [0, 24, 0],
			"color": 0,
			"children": [1]
		},
		{
			"name": "body",
			"origin": [0, 24, 0],
			"color": 0,
			"children": [2]
		},
		{
			"name": "jacket",
			"origin": [0, 24, 0],
			"color": 0,
			"children": [3]
		},
		{
			"name": "left_arm",
			"origin": [5, 22, 0],
			"color": 0,
			"children": [4]
		},
		{
			"name": "left_sleve",
			"origin": [5, 22, 0],
			"color": 0,
			"children": [5]
		},
		{
			"name": "right_arm",
			"origin": [-5, 22, 0],
			"color": 0,
			"children": [6]
		},
		{
			"name": "right_sleve",
			"origin": [-5, 22, 0],
			"color": 0,
			"children": [7]
		},
		{
			"name": "left_leg",
			"origin": [2, 12, 0],
			"color": 0,
			"children": [8]
		},
		{
			"name": "left_pants",
			"origin": [2, 12, 0],
			"color": 0,
			"children": [9]
		},
		{
			"name": "right_leg",
			"origin": [-2, 12, 0],
			"color": 0,
			"children": [10]
		},
		{
			"name": "right_pants",
			"origin": [-2, 12, 0],
			"color": 0,
			"children": [11]
		}
	]
    }`;

    zip.folder('assets/minecraft/models/item').file('totem_of_undying.json', jsonContent);

    zip.generateAsync({ type: 'blob' }).then(function(content) {
      const zipFileName = 'Totems_Personas.zip';
      saveAs(content, zipFileName);
    });
  }
}

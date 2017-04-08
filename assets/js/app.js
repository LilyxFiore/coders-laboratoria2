
window.addEventListener("load", function(){
  var students = ["","Fiorella Quispe","Lourdes Vilchez","Rossmery Maldonado","Yessenia Huaman","Miriam Mendoza","Elizabeth Condori",
                  "Arantza Burga","Grecia Rayme","Janine Vega","Rosario Felix","Daguiana Revoredo","Jenny Velasquez","Nadia Cuadros",
                  "Michell More","Marilu Llamocca","Mariel Garcia","Fiorella Cisneros","Geraldine Chauca","Yellitza Rivera","Stephanie Hiyagon",
                  "Emma Tapia","Danna Franco","Flor Retamozo","Nathaly Pacheco","Ericka Vidal","Katherine Ortega","Brilly Majuan","Flor Tello",
                  "Leslie Avendaño","Cindy Mendoza","Annia Flores","Betsi Loayza","Aida Sulca","Milagros Gutierrez","Nakarid Jave","Angie Condor",
                  "Maia Rojas","Ariadna Cabana","Flor Condori","Mitch Rodriguez","Naomi Villanueva","Mary Castillo","Miriam Peralta",
                  "Karin Alejo","Liliana Peña","Ruth Salvador","Maribel","Wendy Reyes","Cinthia","Grecia Cutipa","Ana Durand",
                  "Glisse Jorge","Neiza Nuñez","Sandra Solorzano"];

  for(i = 1; i < students.length; i++){
    var grid = document.getElementById("grid");
    var figure = document.createElement("figure");
    var img = document.createElement("img");
    var figcaption = document.createElement("figcaption");
    var span = document.createElement("span");

    grid.appendChild(figure);
    img.src = "assets/img/students/"+i+".png";
    figure.appendChild(img);

    figure.appendChild(figcaption);

    figcaption.appendChild(span);
    span.appendChild(document.createTextNode(students[i]));
  }
});

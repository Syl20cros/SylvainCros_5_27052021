const resultatRechercheMock = {
    "recipies": [
        {
            "id": 1,
            "name": "Limonade de Coco",
            "servings": 1,
            "ingredients": [
                {
                    "ingredient": "Lait de Coco",
                    "quantity": 400,
                    "unit": "ml"
                },
                {
                    "ingredient": "Jus de citron",
                    "quantity": 2
                },
                {
                    "ingredient": "Crème de coco",
                    "quantity": 2,
                    "unit": "cuillères à soupe"
                },
                {
                    "ingredient": "Sucre",
                    "quantity": 30,
                    "unit": "grammes"
                },
                {
                    "ingredient": "Glaçons"
                }
            ],
            "time": 10,
            "description": "Mettre les glaçons à votre goût dans le blender, ajouter le lait, la crème de coco, le jus de 2 citrons et le sucre. Mixer jusqu'à avoir la consistence désirée",
            "appliance": "Blender",
            "ustensils": ["cuillère à Soupe", "verres", "presse citron"]
        },
        {
            "id": 2,
            "name" : "Poisson Cru à la tahitienne",
            "servings": 2,
            "ingredients": [
                {
                    "ingredient" : "Thon Rouge (ou blanc)",
                    "quantity" : 200,
                    "unit" : "grammes"
                },
                {
                    "ingredient" : "Concombre",
                    "quantity" : 1
                },
                {
                    "ingredient" : "Tomate",
                    "quantity" : 2
                },
                {
                    "ingredient" : "Carotte",
                    "quantite" : 1
                },
                {
                    "ingredient" : "Citron Vert",
                    "quantity" : 5
                },
                {
                    "ingredient" : "Lait de Coco",
                    "quantity" : 100,
                    "unit" : "ml"
                }
            ],
            "time": 60,
            "description": "Découper le thon en dés, mettre dans un plat et recouvrir de jus de citron vert (mieux vaut prendre un plat large et peu profond). Laisser reposer au réfrigérateur au moins 2 heures. (Si possible faites-le le soir pour le lendemain. Après avoir laissé mariner le poisson, coupez le concombre en fines rondelles sans la peau et les tomates en prenant soin de retirer les pépins. Rayer la carotte. Ajouter les légumes au poissons avec le citron cette fois ci dans un Saladier. Ajouter le lait de coco. Pour ajouter un peu plus de saveur vous pouver ajouter 1 à 2 cuillères à soupe de Crème de coco",
            "appliance": "Saladier",
            "ustensils": ["presse citron"]
        },
        {
            "id": 50,
            "name": "Frangipane",
            "servings": 2,
            "ingredients": [
                {
                    "ingredient": "Pâte feuilletée",
                    "quantity": 400,
                    "unit": "grammes"
                },
                {
                    "ingredient": "Oeuf",
                    "quantity": 6
                },
                {
                    "ingredient": "Poudre d'amendes",
                    "quantity": 500,
                    "unit": "grammes"
                },
                {
                    "ingredient": "Beurre",
                    "quantity": 500,
                    "unit": "grammes"
                },
                {
                    "ingredient": "Sucre glace",
                    "quantity": 500,
                    "unit": "grammes"
                }
            ],
            "time": 60,
            "description": "Préparer la frangipane : Mélanger le sucre la poudre d'amander, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes",
            "appliance": "Four",
            "ustensils": ["rouleau à patisserie", "fouet"]
        }
    ],
    "ustensils": ["cuillère à Soupe", "verres", "presse citron"],
    "ingredients": ["Lait de vache", "Jus de citron", "Crème de coco", "Sucre", "Glaçons"],
    "appareils": ["Blender", "Appareil 2", "Appareil 3"]
};

export default resultatRechercheMock;
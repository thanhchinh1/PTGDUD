export const img = {
  hero:'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1600&q=80',
  modal:'https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?auto=format&fit=crop&w=1000&q=80',
  login:'https://images.unsplash.com/photo-1528712306091-ed0763094c98?auto=format&fit=crop&w=900&q=80',
  subscription:'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1000&q=80',
  strawberry:'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?auto=format&fit=crop&w=1000&q=80',
  step:'https://images.unsplash.com/photo-1587393855524-087f83d95bc9?auto=format&fit=crop&w=1000&q=80',
  avatar:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
  empty:'https://cdn-icons-png.flaticon.com/512/6134/6134065.png'
};

export const recipes = [
  ['italian-tomato','Italian-style tomato salad','36 minutes','https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80'],
  ['shrimp-spaghetti','Vegetable and shrimp spaghetti','15 minutes','https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=600&q=80'],
  ['lotus-salad','Lotus delight salad','20 minutes','https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80'],
  ['snack-cakes','Snack cakes','21 minutes','https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=600&q=80'],
  ['cabbage-shrimp','Salad with cabbage and shrimp','32 minutes','https://images.unsplash.com/photo-1511357840105-748c95f0a7e7?auto=format&fit=crop&w=600&q=80'],
  ['bean-potato','Bean, shrimp, and potato salad','32 minutes','https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=80'],
  ['sunny-eggs','Sunny-side up fried eggs','32 minutes','https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80'],
  ['lotus-salad-2','Lotus delight salad','32 minutes','https://images.unsplash.com/photo-1543353071-10c8ba85a904?auto=format&fit=crop&w=600&q=80'],
  ['cucumber','Cucumber salad, cherry tomatoes','32 minutes','https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=600&q=80'],
  ['potato','Potato Salad','32 minutes','https://images.unsplash.com/photo-1516684669134-de6f7c473a2a?auto=format&fit=crop&w=600&q=80'],
  ['five-color','Five-color salad','32 minutes','https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=600&q=80'],
  ['corn','Corn Salad','32 minutes','https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=600&q=80'],
  ['avocado','Avocado Salad','32 minutes','https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&q=80']
].map(([id,title,time,image])=>({id,title,time,image}));

export const editors = [
 {id:'sticky',title:'Stuffed sticky rice ball',author:'Jennifer King',time:'34 minutes',image:'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=80',desc:'Stuffed sticky rice balls. A delightful Asian treat with chewy texture and a flavorful surprise filling.'},
 {id:'smoothie',title:'Strawberry smoothie',author:'Matthew Martinez',time:'40 minutes',image:'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=600&q=80',desc:'Savor the refreshing delight of a strawberry smoothie made with ripe strawberries.'},
 {id:'latte',title:'Latte Art',author:'Sarah Hill',time:'10 minutes',image:'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80',desc:'Latte art is the skillful craft of creating captivating designs on a latte.'},
 {id:'noodles',title:'Butter fried noodles',author:'Julia Lopez',time:'16 minutes',image:'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80',desc:'Butter fried noodles are savory noodles cooked in butter for a rich taste.'}
];

export const customers = [
 ['Elizabeth Lee','AvatarSystems','$359','10/07/2023','New'],['Carlos Garcia','SmoozeShift','$747','24/07/2023','New'],['Elizabeth Bailey','Prime Time Telecom','$564','08/08/2023','In-progress'],['Ryan Brown','OmniTech Corporation','$541','31/08/2023','In-progress'],['Ryan Young','DataStream Inc.','$769','01/05/2023','Completed'],['Hailey Adams','FlowRush','$922','10/06/2023','Completed']
].map((r,i)=>({id:i+1,name:r[0],company:r[1],value:r[2],date:r[3],status:r[4],avatar:`https://i.pravatar.cc/80?img=${i+12}`}));

export const reviews = [
 {name:'Jenny Wilson', text:'This dessert was a gem. The shortcake was soft and the berries tasted fresh.', likes:2},
 {name:'Annette Black', text:'Good proportions and easy to follow. I added extra strawberry slices on top.', likes:5},
 {name:'Emma Gomez', text:'The cream was light and the sponge stayed fluffy. Great family dessert.', likes:1}
];

function RecipePage() {
  return (
    <div className="grid h-screen place-content-center bg-[hsl(30,54%,90%)]">
      <div className="grid h-screen rounded-3xl rounded-b-none bg-white text-[hsl(14,45%,36%)] marker:text-[0.75rem] marker:font-bold sm:w-[800px] sm:gap-8 sm:rounded-3xl sm:p-8">
        <img
          className="sm:rounded-2xl"
          src="/recipePage/image-omelette.jpeg"
          alt="omelette photo"
        />
        <div className="[&>h2]:font-young_serif grid gap-4 p-8 sm:gap-6 sm:p-0 [&>h2]:text-2xl">
          <h1 className="font-young_serif text-3xl text-[hsl(24,5%,18%)] sm:text-[2.75rem]">
            Simple Omelette Recipe
          </h1>
          <p className="font-outfit text-[hsl(30,10%,34%)] sm:text-lg">
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
          <div className="font-outfit rounded-xl bg-[hsl(330,100%,98%)] p-6 py-4">
            <p className="pb-2 text-lg font-semibold text-[hsl(332,51%,32%)]">
              Preparation time
            </p>
            <ul className="list-disc pl-6 [&>*>span]:font-bold [&>li]:pb-2 [&>li]:pl-3">
              <li className="">
                <span>Total</span>: Approximately 10 minutes
              </li>
              <li>
                <span>Preparation</span>: 5 minutes
              </li>
              <li>
                <span>Cooking</span>: 5 minutes
              </li>
            </ul>
          </div>

          <h2>Ingredients</h2>
          <ul className="list-disc pl-6 [&>li]:pb-2 [&>li]:pl-3 [&>li]:text-sm">
            <li>2-3 large eggs</li>
            <li>Salt, to taste</li>
            <li>Pepper, to taste</li>
            <li>1 tablespoon of butter or oil</li>
            <li>
              Optional fillings: cheese, diced vegetables, cooked meats, herbs
            </li>
          </ul>
          <hr />
          <h2>Instructions</h2>
          <ol className="list-decimal pl-6  [&>*>span]:font-bold [&>li]:pb-2 [&>li]:pl-3 [&>li]:text-sm">
            <li>
              <span>Beat the eggs</span>: In a bowl, beat the eggs with a pinch
              of salt and pepper until they are well mixed. You can add a
              tablespoon of water or milk for a fluffier texture.
            </li>
            <li>
              <span>Heat the pan</span>: Place a non-stick frying pan over
              medium heat and add butter or oil.
            </li>
            <li>
              <span>Cook the omelette</span>: Once the butter is melted and
              bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly
              coat the surface.
            </li>
            <li>
              <span>Add fillings (optional)</span>: When the eggs begin to set
              at the edges but are still slightly runny in the middle, sprinkle
              your chosen fillings over one half of the omelette.
            </li>
            <li>
              <span>Fold and serve</span>: As the omelette continues to cook,
              carefully lift one edge and fold it over the fillings. Let it cook
              for another minute, then slide it onto a plate.
            </li>
            <li>
              <span>Enjoy</span>: Serve hot, with additional salt and pepper if
              needed.
            </li>
          </ol>
          <hr />

          <h2>Nutrition</h2>
          <p className="text-sm">
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>
          <table className="border-collapse [&>*>td]:font-semibold [&>*>th]:font-normal [&>tr]:border-b-[1px] [&>tr]:border-[hsl(30,18%,87%)]">
            <tr>
              <th className="py-2 pl-8 text-left">Calories</th>
              <td>277kcal</td>
            </tr>
            <tr>
              <th className="py-2 pl-8 text-left">Carbs</th>
              <td>0g</td>
            </tr>
            <tr>
              <th className="py-2 pl-8 text-left">Protein</th>
              <td>20g</td>
            </tr>
            <tr className="border-none">
              <th className="py-2 pl-8 text-left">Fat</th>
              <td>22g</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default RecipePage;

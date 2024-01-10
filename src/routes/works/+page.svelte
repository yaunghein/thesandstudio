<script lang="ts">
  import AppShell from "$lib/components/AppShell.svelte";

  const WORKS_GROUPS = [
    {
      type: "Works",
      data: [
        {
          name: "ENVISEAM",
          image: "/images/products/bag-and-bowl.jpg",
          details: [
            ["Branding and Graphic", "Design", "Motion Identity"],
            ["Web Development and", "Interaction"],
          ],
        },
        {
          name: "ENVISEAM",
          image: "/images/products/bag-and-bowl.jpg",
          details: [
            ["Branding and Graphic", "Design", "Motion Identity"],
            ["Web Development and", "Interaction"],
          ],
        },
        {
          name: "ENVISEAM",
          image: "/images/products/bag-and-bowl.jpg",
          details: [
            ["Branding and Graphic", "Design", "Motion Identity"],
            ["Web Development and", "Interaction"],
          ],
        },
      ],
    },
    {
      type: "Archives",
      data: [
        {
          name: "ENVISEAM",
          image: "/images/products/bag-and-bowl.jpg",
          details: [
            ["Branding and Graphic", "Design", "Motion Identity"],
            ["Web Development and", "Interaction"],
          ],
        },
        {
          name: "ENVISEAM",
          image: "/images/products/bag-and-bowl.jpg",
          details: [
            ["Branding and Graphic", "Design", "Motion Identity"],
            ["Web Development and", "Interaction"],
          ],
        },
        {
          name: "ENVISEAM",
          image: "/images/products/bag-and-bowl.jpg",
          details: [
            ["Branding and Graphic", "Design", "Motion Identity"],
            ["Web Development and", "Interaction"],
          ],
        },
      ],
    },
  ];
</script>

<div>
  <AppShell>
    <div class="p-11 grid gap-11">
      {#each WORKS_GROUPS as workGroup}
        <section>
          <h2 class="text-2xl mb-2">{workGroup.type}</h2>
          <div class="grid grid-cols-2 gap-4">
            {#each workGroup.data as work}
              <div
                class="group w-full aspect-[1.64/1] relative rounded-xl overflow-hidden"
              >
                <img
                  src={work.image}
                  alt={work.name}
                  class="absolute inset-0 w-full h-full object-cover"
                />
                <div
                  class="relative p-11 grid gap-11 opacity-0 group-hover:opacity-100 transition"
                >
                  {#each work.details as i}
                    <div>
                      {#each i as j}
                        <div class="text-lg leading-tight">{j}</div>
                      {/each}
                    </div>
                  {/each}
                </div>
              </div>
            {/each}
          </div>
        </section>
      {/each}
    </div>
  </AppShell>
</div>

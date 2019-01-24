<template>
  <div>
    <n-title title="World History Textbook" subtitle="An excerpt about human migration"/>
    <n-section>
      <b-row>
        <b-col :cols="8" :offset="2">
          <h3>Homo Sapiens Migration</h3>
          <p>
            While Homo sapiens were decidedly more advanced than other hominids, when they first
            moved out of Africa some 45,000 years ago, they were only equipped with stone tools for hunting
            and cutting. Despite those initial limitations, 30,000 years later Homo sapiens would inhabit
            almost every environment on earth and had a presence in every continent except Antarctica. Homo
            sapiens in fact moved further and faster than all other hominids. While it is hard to attribute a
            single factor to all Homo sapiens migration, we do see that multiple human societies required
            migration to arrive at a more sophisticated level of development. Homo sapien migration accelerated 
            close to 40,000 years ago, where humans reached continental Eurasia.
          </p>

          <img src="../assets/images/globe.jpg" />
          
          <p>
            Modern humans (50,000 – 10,000 years ago) completed the migration to all the continents
            except Antartica, moving first into Australia, Eastern Siberia, the Pacific margins, Japan, and the
            Americas. Then from 10,000 years ago to 1,500 CE, humans arrived in the Arctic, the Indian Ocean,
            the deep Pacific, and tropical rain forests. Migration occurred in a “staccato” pattern with “easiest”
            areas colonized quickly, while more “difficult” areas remained uninhabited for thousands of years.
            A region’s “easiness” is calculated from estimates about available plant and animal biomass and
            net productivity—that is, how quickly it returns—in each habitat. For example, tropical savannas
            and grasslands of East Africa were colonized first as the biomass there sustained the first bipedal
            hominids.
          </p>
          <p>
            Hominids first left “sub-Saharan Africa … through the northern savannahs, up the Nile corridor
            or across the straits of Bab el Mandeb to the Arabian Peninsula.” 7 Evidence exists of Homo erectus in
            Morocco, Chad, and Algeria, and it appears that they eventually left Africa via the Arabian Peninsula.
            After leaving Africa about 1.5 million years ago, choppers, handaxes, and spheroids found at sites
            like Ubeidiya in Israel put Homo erectus in the Levant. Some scholars argue for the existence of a
            second migration out of Africa and into the Jordan Valley 500 to 600 thousand years ago.
          </p>
          <h4>Asia</h4>
          <p>
            Some evidence suggests the presence of Homo ergaster and Homo erectus as having occurred
            in Java over a million years ago. Chinese Homo erectus fossils date between 800,000 to 400,000
            years ago. Homo sapiens began to leave Africa around 40,000 years ago, and hunter gatherers
            appeared in China by the end of the last Ice Age (36,000 to 16,000 BCE) as continental ice in
            central Asia began to melt.
          </p>

          <h4>Europe</h4>
          <p>
            Animal bones and pebble tools place hominids near Rome just before the beginning of the
            Middle Pleistocene (730,000 years ago). This seems to be the first hominid incursion into
            Europe. Hominid remains in Spain suggest colonization in Iberia up to two million years ago,
            but there are not nearly enough remains (no more than twenty inhabitants in any given site) to
            provide any certainty in terms of which hominids they correspond to or when they lived there.
            Either way, colonization of Europe can be considered “late.” This tardiness may have been related
            to a lack of animal food sources. Not until around 500,000 years ago did “new species of deer,
            bovid, rhino, and horse appear” 8 in Europe. Around the same time, the cheetah, saber-tooth tiger,
            and dirk-tooth cat declined in the region, making more carcasses from the aforementioned species
            available to hominid foragers.
          </p>
          <h4>Australia, Papua New Guinea, Sahul</h4>
          <p>
            Evidence of tools from 30,000 years ago exists in Australia, and from even longer in New
            Guinea. The lack of “a dry land crossing to Sahul” (the land mass that once connected New Guinea
            and Australia) meant that an ocean journey of somewhere between sixty-five and 100 kilometers
            was required from mainland Asia. This made Australians and New Guineans the first sea-going
            colonizers. Once in Sahul, how humans populated Australia is still the subject of some debate
            between those who support the “coastal hugger” theory and those who support the idea of population by “overlanders.” The more difficult of the two means of populating Australia is overland,
            as it is more arid than the coasts, and the evidence for tools overland is not as advanced as that
            for the coast.
          </p>

          <div class="d-flex flex-wrap justify-content-between">
            <img v-for="n in 4" :key="n" src="../assets/images/globe.jpg" style="width: 359px; height: 239px; margin-bottom: 15px;" />
          </div>

          <div class="item-grid ipl-3">
            <img v-for="n in 9" :key="n" src="../assets/images/globe.jpg" />
          </div>

          <div class="item-grid ipl-5">
            <img v-for="n in 25" :key="n" src="../assets/images/globe.jpg" />
          </div>
        </b-col>
      </b-row>
    </n-section>
  </div>
</template>

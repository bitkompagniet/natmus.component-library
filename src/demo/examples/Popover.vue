<template>
    <div>
        <h2>Popover</h2>

        <p>
            Popover when hovering an element.
        </p>

        <h3>Usage</h3>

<d-helpers-highlight lang="html">
&lt;n-button 
    class="mt-3" 
    variant="rose" 
    v-b-popover.hover.top="'When you are ready to submit your data, click this button.'"
    title="Ready to submit?"
&gt;
    Top
&lt;/n-button&gt;
</d-helpers-highlight>

        <h3>Example</h3>

        <div class="text-center">
            <div><n-button class="mt-3" variant="rose" v-b-popover.hover.top="'When you are ready to submit your data, click this button.'" title="Ready to submit?">Top</n-button></div>
            <div><n-button class="mt-3" variant="rose" v-b-popover.hover.right="'When you are ready to submit your data, click this button.'" title="Ready to submit?">Right</n-button></div>
            <div><n-button class="mt-3" variant="rose" v-b-popover.hover.left="'When you are ready to submit your data, click this button.'" title="Ready to submit?">Left</n-button></div>
            <div><n-button class="mt-3" variant="rose" v-b-popover.hover.bottom="'When you are ready to submit your data, click this button.'" title="Ready to submit?">Bottom</n-button></div>
        </div>
    </div>
</template>

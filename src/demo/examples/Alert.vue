<template>
    <div>
        <h2>Alert</h2>

        <p>
            These alerts will automatically bake an icon into the result for 
            <code>success</code> and <code>danger</code> variants. Besides these
            two, we also support a more subtle <code>info</code> variant.
        </p>

        <h3>Usage</h3>

<d-helpers-highlight lang="html">
&lt;n-alert variant="success" show dismissible&gt;
    Your file was uploaded successfully.
&lt;/n-alert>
</d-helpers-highlight>

        <h3>Example</h3>

        <n-alert variant="success" show dismissible>
            Your file was uploaded successfully.
        </n-alert>

        <n-alert variant="danger" show dismissible>
            There was a problem uploading the file.
        </n-alert>

        <n-alert variant="info" show dismissible>
            Please notice our new terms of service.
        </n-alert>

        <h3>Properties</h3>

        <p>
            All properties from the <code>b-alert</code> 
            in <a href="https://bootstrap-vue.js.org/docs/components/alert">Bootstrap Vue</a>
            can be used on these alerts.
        </p>

    </div>

</template>

<template>
  <div>
    <h2>Navigation</h2>
    <p>
      Most pages should have a top navigation bar, like the one you see
      above. It could be defined in the top-most
      <code>App</code> component
      for a smaller site, or it could be defined on the page level.
    </p>

    <p>
        The component library navigation is a styling wrapper around
        standard bootstrap nav-items.
    </p>

    <h3>Basic usage</h3>

<d-helpers-highlight lang="html">
&lt;n-nav-topbar&gt;
  &lt;b-nav-item to="/structure"&gt;Structure&lt;/b-nav-item&gt;
  &lt;b-nav-item to="/components"&gt;Components&lt;/b-nav-item&gt;
  &lt;b-nav-item to="/forms"&gt;Forms&lt;/b-nav-item&gt;
  &lt;b-nav-item to="/bootstrap-styling"&gt;Styling&lt;/b-nav-item&gt;

  &lt;b-nav-item-dropdown id="example-dropdown" text="Examples"&gt;
    &lt;b-dropdown-item to="/examples/step-page"&gt;Auto-sliding introduction&lt;/b-dropdown-item&gt;
    &lt;b-dropdown-item to="/examples/rich-text"&gt;Rich text example&lt;/b-dropdown-item&gt;
    &lt;b-dropdown-item to="/examples/file-uploads"&gt;File attachment example&lt;/b-dropdown-item&gt;
    &lt;b-dropdown-item to="/examples/text-page"&gt;Full text page&lt;/b-dropdown-item&gt;
    &lt;b-dropdown-item to="/examples/full"&gt;Sections and elements&lt;/b-dropdown-item&gt;
  &lt;/b-nav-item-dropdown&gt;
&lt;/n-nav-topbar&gt;
</d-helpers-highlight>

    <h3>Example</h3>

    <p>A good example can be seen at the top of this page.</p>
  </div>
</template>

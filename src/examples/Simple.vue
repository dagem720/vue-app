<template>
  <div>
    <div class="mb-6">
      <h2>Content</h2>
    </div>
    <div class="flex mb-3">
      <button @click="openModal" class="text-3 cursor-pointer">Image</button>
    </div>
    <tiptap-vuetify placeholder="Placeholder" v-model="content" :extensions="extensions" />
    <div class="my-6">
      <h2>HTML</h2>
      {{
        content }}
    </div>
    <div class="my-6">
      <h2>Rendered</h2>
    </div>
    <div class="my-6" v-html="content"></div>
    <!-- vuetify dialog -->
    <v-dialog v-model="modal" max-width="500px">
      <!-- add Image field -->
      <v-card>
        <v-card-title>
          <span class="headline">Image</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <!-- file input -->
                <v-file-input accept="image/*" placeholder="Select your file" ref="image" @change="getImage(
                  $event
                )" multiple></v-file-input>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="modal = false">
            Cancel
          </v-btn>
          <v-btn color="blue darken-1" text @click="modal = false">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import {
  // component
  TiptapVuetify,
  // extensions
  Heading,
  Bold,
  Italic,
  Strike,
  Underline,
  Code,
  Paragraph,
  BulletList,
  OrderedList,
  ListItem,
  Link,
  Blockquote,
  HardBreak,
  HorizontalRule,
  History,
  Image,
  TodoList,
  TodoItem,
  Table,
  TableCell,
  TableHeader,
  TableRow
} from 'tiptap-vuetify'

export default {
  components: { TiptapVuetify },
  data: () => ({
    extensions: [
      History,
      Table,
      TableCell,
      TableHeader,
      TableRow,
      Blockquote,
      Link,
      Underline,
      Strike,
      Italic,
      ListItem, // if you need to use a list (BulletList, OrderedList)
      BulletList,
      OrderedList,
      Image,
      [
        Heading,
        {
          // Options that fall into the tiptap's extension
          options: {
            levels: [1, 2, 3]
          }
        }
      ],
      Bold,
      Link,
      Code,
      HorizontalRule,
      TodoList,
      [TodoItem, {
        options: {
          nested: true
        }
      }],
      Paragraph,
      HardBreak // line break on Shift + Ctrl + Enter
    ],
    content: `
      <h1>Most basic use</h1>
      <p>
        You can use the necessary extensions.
        The corresponding buttons are
        <strong>
          added automatically.
        </strong>
      </p>
      <pre><code>&lt;tiptap-vuetify v-model="content" :extensions="extensions"/&gt;</code></pre>
      <p></p>
      <h2>Icons</h2>
      <p>Avaliable icons groups:</p>
      <ol>
        <li>
          <p>Material Design <em>Official</em></p>
        </li>
        <li>
          <p>Font Awesome (FA)</p>
        </li>
        <li>
          <p>Material Design Icons (MDI)</p>
        </li>
      </ol>
      <p></p>
     
      <p></p>
      <p>
        There is always something to do. Thankfully, there are checklists for that. Don't forget to call mom.
      </p>
      <ul data-type="todo_list">
        <li data-type="todo_item" data-done="true">
          Buy cheese
        </li>
        <li data-type="todo_item" data-done="true">
          Buy meat
        </li>
        <li data-type="todo_item" data-done="true">
          Buy bread
        </li>
        <li data-type="todo_item" data-done="false">
          Call mom
        </li>
      </ul>
      <table>
        <tr>
          <th colspan="3" data-colwidth="100,0,0">Wide header</th>
        </tr>
        <tr>
          <td>One</td>
          <td>Two</td>
          <td>Three</td>
        </tr>
        <tr>
          <td>Four</td>
          <td>Five</td>
          <td>Six</td>
        </tr>
      </table>
    `,
    modal: false,
    image: ''
  }),
  methods: {
    openModal () {
      this.modal = true
    },
    save () {
      this.modal = false
    },
    getImage (file) {
      console.log(file)
      // const file = this.$refs.image.files[0]
      // const reader = new FileReader()
      // reader.onload = e => {
      //   this.image = e.target.result
      // }
      // reader.readAsDataURL(file)
    }
  }
}
</script>

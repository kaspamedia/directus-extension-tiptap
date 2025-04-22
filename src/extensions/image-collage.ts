import type { ExtensionMeta } from "./index";
import { Node, mergeAttributes } from "@tiptap/core";

const ImageCollageExtension = Node.create({
  name: "imageCollage",
  
  group: "block",
  
  atom: true, 
  
  draggable: true,
  
  inline: false,
  
  selectable: true,
  
  parseHTML() {
    return [
      {
        tag: 'image-collage',
      },
    ]
  },
  
  renderHTML({ HTMLAttributes }) {
    return ['image-collage', mergeAttributes(HTMLAttributes)]
  },
  
  addAttributes() {
    return {
      id: {
        default: null,
      },
    }
  },

  addCommands() {
    return {
      setImageCollage: (attributes) => ({ chain }) => {
        return chain()
          .insertContent({
            type: this.name,
            attrs: attributes,
          })
          .run();
      },
    };
  },
});

const extension: ExtensionMeta = {
  name: "imageCollage",
  title: "Image Collage",
  package: "",
  group: "node",
  defaults: {},
  options: [],
  load: async () => {
    return ImageCollageExtension;
  },
};

export default extension;
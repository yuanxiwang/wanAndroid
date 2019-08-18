Component({
  options: {
    multipleSlots: true 
  },

  properties: {
    // 数据源
    src: {
      type: Array
    },
    bg_color:{type:String}
  },

  methods: {
    /**
     * 标签点击监听
     */
    _labelTap: function(e) {
      this.triggerEvent('labeltap', e.currentTarget);
    }
  }
})
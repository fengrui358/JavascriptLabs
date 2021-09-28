export default {
  functional: true,
  render: (h, ctx) => {
    console.log(
      //   h,
      //   ctx,
      ctx.props,
      ctx.scopedSlots.default,
      ctx.scopedSlots.default && ctx.scopedSlots.default(ctx.props || {})
    );
    return ctx.scopedSlots.default && ctx.scopedSlots.default(ctx.props || {});
  },
};
